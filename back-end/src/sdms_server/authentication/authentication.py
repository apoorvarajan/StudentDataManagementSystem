import re
import bcrypt
import hashlib
import base64
from argon2 import PasswordHasher
from argon2.exceptions import Argon2Error

from sdms_server.exceptions.exceptions import InvalidPasswordError


def hash_password(password:str)->str:
    """
    Hashes the given password using SHA-256, base64 encoding, and bcrypt hashing.

    Args:
        password (str): The password to be hashed.

    Returns:
        str: The bcrypt hash of the password.
    """
    # Hash with SHA-256
    sha_hash = hashlib.sha256(password.encode('utf-8')).digest()

    # Base64 encode
    hash_b64 = base64.b64encode(sha_hash)

    # Salt and hash with bcrypt
    bcrypt_hash = bcrypt.hashpw(hash_b64, bcrypt.gensalt())

    # Return the bcrypt hash as string
    return bcrypt_hash.decode('utf-8')

def hash_password_argon2(password:str)->str:
    """
    Hashes the given password using Argon2 algorithm.

    Args:
        password (str): The password to be hashed.

    Returns:
        str: The Argon2 hash of the password.
    """
    return PasswordHasher().hash(password)

def check_password(password:str, hashed:str)->bool:
    """
    Checks if the given password matches the hashed password.

    Args:
        password (str): The password to be checked.
        hashed (str): The hashed password to compare against.

    Returns:
        bool: True if the password matches the hashed password, False otherwise.
    """
    # Hash with SHA-256
    sha_hash = hashlib.sha256(password.encode('utf-8')).digest()

    # Base64 encode
    hash_b64 = base64.b64encode(sha_hash)

    # Check bcrypt hashed password
    return bcrypt.checkpw(hash_b64, hashed.encode('utf-8'))

def check_password_argon2(password:str, hashed:str)->bool:
    """
    Checks if the given password matches the Argon2 hashed password.

    Args:
        password (str): The password to be checked.
        hashed (str): The Argon2 hashed password to compare against.

    Returns:
        bool: True if the password matches the Argon2 hashed password, False otherwise.
    """
    try:
        return PasswordHasher().verify(hashed, password)
    except Argon2Error:
        return False

def validate_password(password:str):
    """
    Validates the password against a regex pattern.

    Args:
        password (str): The password to be validated.

    Raises:
        InvalidPasswordError: If the password does not meet the required criteria.
    """
    regex = r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
    if not re.match(regex, password):
        raise InvalidPasswordError()
