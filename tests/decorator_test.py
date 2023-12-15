import os
import jwt
import pytest
from unittest.mock import patch
from sdms_server.authorization.decorator import decode_token

@pytest.fixture
def mock_jwt_decode():
    with patch('sdms_server.authorization.decorator.jwt.decode') as mock_decode:
        mock_decode.return_value = {
            'role': 'admin',
            'user_id': 123
        }
        yield mock_decode

def test_decode_token(mock_jwt_decode):
    # Set the environment variables
    os.environ['JWT_SECRET'] = 'secret'
    os.environ['JWT_ALGORITHM'] = 'HS256'

    # Call the decode_token function
    token = 'your_jwt_token_here'
    decoded = decode_token(token)

    # Assert the decoded token
    assert decoded == {
        'role': 'admin',
        'user_id': 123
    }

    # Assert that jwt.decode was called with the correct arguments
    mock_jwt_decode.assert_called_once_with(
        token, 'secret', algorithms=['HS256'])

    # Assert that 'role' and 'user_id' are present in the decoded token
    assert 'role' in decoded
    assert 'user_id' in decoded