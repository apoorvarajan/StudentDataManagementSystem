from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import yaml
from pathlib import Path
import pandas as pd
import logging

from password_auth import hash_password, check_password, validate_password

DATA_ROOT = Path('data/')

class UserNotFoundError(Exception):
    def __init__(self, username:str, *args, **kwargs):
        msg = f'User `{username}` not found'
        super().__init__(msg, *args, **kwargs)

def get_user(client:MongoClient, db_name:str, collection_name:str, username:str):
    db = client[db_name]
    collection = db[collection_name]

    # find the user with the given username in the collection
    data = collection.find_one({'username': username})
    if data is None:
        raise UserNotFoundError(username)
    return data

def refresh_collection(client:MongoClient, db_name:str, collection_name:str, df_filename:str|Path):
    db = client[db_name]
    collection = db[collection_name]
    collection.drop()

    df : pd.DataFrame = pd.read_csv(DATA_ROOT.joinpath(df_filename))
    df.password = df.password.apply(hash_password)
    df = df.to_dict('records')

    # create a new collection and set username as unique
    collection.create_index('username', unique=True)

    # insert the data into the collection
    collection.insert_many(df)

    logging.info('Refreshed users collection')

def authenticate(client:MongoClient, db_name:str, collection_name:str,
        username:str, password:str
    ):
    user_data = get_user(client, db_name, collection_name, username)

    saved_pwd = user_data['password']
    authenticated = check_password(password, saved_pwd)
    if authenticated:
        print(f'Authenticated. Full name: {user_data["fullname"]}')
    else:
        print('Wrong password')

def reset_password(client:MongoClient, db_name:str, collection_name:str,
        username:str, password:str
    ):
    # verifty the user exists
    get_user(client, db_name, collection_name, username)
    
    # update the password
    db = client[db_name]
    collection = db[collection_name]
    collection.update_one(
        {'username': username}, 
        {'$set': {'password': hash_password(password)}}
    )

    # check if the password is updated
    user_data = get_user(client, db_name, collection_name, username)
    saved_pwd = user_data['password']
    authenticated = check_password(password, saved_pwd)
    if authenticated:
        print('Password updated')
    else:
        print('Password not updated')




def main():
    with open(DATA_ROOT.joinpath('credentials.yml'), 'r') as f:
        credentials = yaml.safe_load(f)
        uri = credentials['base_uri'].format(**credentials)

    print(uri)

    # Create a new client and connect to the server
    client = MongoClient(uri, server_api=ServerApi('1'))

    # Send a ping to confirm a successful connection
    try:
        client.admin.command('ping')
        print("Pinged your deployment. You successfully connected to MongoDB!")
    except Exception as e:
        print(e)

    # refresh_collection(client, 'sdms', 'users', 'dummy_users.csv')
    authenticate(client, 'sdms', 'users', 'tommy', '2t0mmy')
    reset_password(client, 'sdms', 'users', 'tommy', '2t0mmy') 

if __name__ == '__main__':
    logging.basicConfig(level=logging.INFO)
    main()