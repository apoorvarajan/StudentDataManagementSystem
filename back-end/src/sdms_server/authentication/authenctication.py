import re
import bcrypt
import hashlib
import base64

class InvalidPasswordError(Exception):
    DEFAULT_ERROR_MESSAGE = (
        'Password must be at least 8 characters long, contain at least '
        'one uppercase letter, one lowercase letter, one number, and '
        'one special character from [@, $, !, %, *, ?, &]')
    
    def __init__(self,  *args, msg=DEFAULT_ERROR_MESSAGE, **kwargs):
        super().__init__(msg, *args, **kwargs)

def hash_password(password:str)->str:
    # Hash with SHA-256
    sha_hash = hashlib.sha256(password.encode('utf-8')).digest()

    # Base64 encode
    hash_b64 = base64.b64encode(sha_hash)

    # Salt and hash with bcrypt
    bcrypt_hash = bcrypt.hashpw(hash_b64, bcrypt.gensalt())

    # Return the bcrypt hash as string
    return bcrypt_hash.decode('utf-8')

def check_password(password:str, hashed:str)->bool:
    # Hash with SHA-256
    sha_hash = hashlib.sha256(password.encode('utf-8')).digest()

    # Base64 encode
    hash_b64 = base64.b64encode(sha_hash)

    # Check bcrypt hashed password
    return bcrypt.checkpw(hash_b64, hashed.encode('utf-8'))

def validate_password(password:str):
    regex = r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
    if not re.match(regex, password):
        raise InvalidPasswordError()
