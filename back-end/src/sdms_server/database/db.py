from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from sdms_server.exceptions.exceptions import *

def get_one_document(db_name: str, collection: str, filter: dict, projection: dict = None) -> dict:
    with MongoClient(
            os.getenv('MONGO_URI'),
            server_api=ServerApi(os.getenv('MONGO_SERVER_API_VER'))
    ) as client:
        db = client[db_name]
        collection = db[collection]
        result = collection.find_one(filter, projection)
    return result


def get_multi_documents(db_name: str, collection: str, filter: dict, projection: dict = None) -> list:
    with MongoClient(
            os.getenv('MONGO_URI'),
            server_api=ServerApi(os.getenv('MONGO_SERVER_API_VER'))
    ) as client:
        db = client[db_name]
        collection = db[collection]
        result = collection.find(filter, projection)
    return result

