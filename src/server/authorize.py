import jwt
import os
import json

with open('src/server/sample_databases.json') as f:
    databases = json.load(f)

class UnauthorizedError(Exception):
    """Exception raised for unauthorized access.
    """

def decode_token(token:str, /)->dict:
    decoded = jwt.decode(
        token, os.getenv('JWT_SECRET'),
        algorithms=[os.getenv('JWT_ALGORITHM')])
    assert 'role' in decoded
    assert 'user_id' in decoded
    return decoded

def is_enrolled_in_course(_user_id:str, /, *, course_id:str, **_kwargs)->bool:
    try:
        return course_id in databases['userdata']['students'][_user_id]['courses']
    except KeyError:
        return False

def is_instructor_of_course(_user_id:str, /, *, course_id:str, **_kwargs)->bool:
    try:
        return course_id in databases['userdata']['instructors'][_user_id]['courses']
    except KeyError:
        return False

def is_ta_of_course(_user_id:str, /, *, course_id:str, **_kwargs)->bool:
    try:
        return course_id in databases['userdata']['tas'][_user_id]['courses']
    except KeyError:
        return False

def is_ta_or_instructor_of_course(_user_id:str, /, *, course_id:str, **_kwargs)->bool:
    return is_instructor_of_course(_user_id, course_id=course_id) or is_ta_of_course(_user_id, course_id=course_id)

def is_self(_user_id:str, /, *, user_id:str, **_kwargs)->bool:
    return _user_id == user_id

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
            print(f'Checking permissions for user `{decoded_token["user_id"]}` with role `{decoded_token["role"]}`...')
            if decoded_token['role'] not in permissions:
                raise UnauthorizedError('Role not found')
            
            for check in permissions[decoded_token['role']]:
                if not check(decoded_token['user_id'], **kwargs):
                    raise UnauthorizedError('User not allowed')

            print(f'User `{decoded_token["user_id"]}` has permissions')
            return func(decoded_token, **kwargs)
        return wrapper
    return decorator

@permissions_required(
    student = (is_self, is_enrolled_in_course),
    instructor = (is_instructor_of_course,))
def view_grade(_token, /, *, user_id, course_id):
    """A function that requires permissions to run."""
    print(f'Viewing grade for user `{user_id}` in course `{course_id}`...')

def try_my_function(token, user_id, course_id):
    """Try running my_function with the given user and value.

    Args:
        user (str): The user trying to run my_function
        a (int): The value to pass to my_function
    """
    try:
        view_grade(token, user_id=user_id, course_id=course_id)
    except UnauthorizedError as e:
        print(f'User with token `{token[:10]}...` is not authorized to run my_function: {e}')
    print()

def main():
    """Try running my_function with different users and values.
    """
    try_my_function({'user_id':'user1', 'role':'student'}, 'user1', 'CSE101')


if __name__ == '__main__':
    main()
