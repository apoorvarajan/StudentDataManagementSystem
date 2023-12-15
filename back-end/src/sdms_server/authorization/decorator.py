import os
import jwt

from sdms_server.exceptions.exceptions import UnauthorizedError

def decode_token(token:str, /)->dict:
    """
    Decode a JWT token.

    Args:
        token (str): The JWT token to decode.

    Returns:
        dict: The decoded token as a dictionary.
    """
    decoded = jwt.decode(
        token, os.getenv('JWT_SECRET'),
        algorithms=[os.getenv('JWT_ALGORITHM')])
    assert 'role' in decoded
    assert 'user_id' in decoded
    return decoded

def permissions_required(**permissions):
    """Decorator to check permissions before running a function.

    Args:
        **permissions: The permissions for different roles required 
            to run the function.

    Returns:
        function: The decorated function
    """
    def decorator(func):
        def wrapper(_token, **kwargs):
            try:
                decoded_token = decode_token(_token)
            except (jwt.exceptions.PyJWTError, AssertionError) as e:
                raise UnauthorizedError('Invalid token') from e
            if decoded_token['role'] not in permissions:
                raise UnauthorizedError('Role not found')

            for check in permissions[decoded_token['role']]:
                if not check(decoded_token['user_id'], **kwargs):
                    raise UnauthorizedError('User not allowed')

            return func(decoded_token, **kwargs)
        return wrapper
    return decorator
