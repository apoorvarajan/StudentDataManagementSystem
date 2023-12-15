import pytest
from sdms_server.authentication.authentication import hash_password, hash_password_argon2, check_password, check_password_argon2, validate_password
from sdms_server.exceptions.exceptions import InvalidPasswordError

def test_hash_password():
    password = "password123"
    hashed_password = hash_password(password)
    assert check_password(password, hashed_password)

def test_hash_password_argon2():
    password = "password123"
    hashed_password = hash_password_argon2(password)
    assert check_password_argon2(password, hashed_password)

def test_check_password():
    password = "password123"
    hashed_password = hash_password(password)
    assert check_password(password, hashed_password)
    assert not check_password("wrongpassword", hashed_password)

def test_check_password_argon2():
    password = "password123"
    hashed_password = hash_password_argon2(password)
    assert check_password_argon2(password, hashed_password)
    assert not check_password_argon2("wrongpassword", hashed_password)

def test_validate_password():
    valid_password = "Password123@"
    invalid_password = "password"
    assert validate_password(valid_password) is None
    with pytest.raises(InvalidPasswordError):
        validate_password(invalid_password)
