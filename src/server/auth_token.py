import jwt
from server.rbac import Role

class AuthToken:
    def __init__(self, auth_token_str:str):
        payload = jwt.decode(auth_token_str, 'secret', algorithms=['HS256'])
        self._payload = payload
        self._role = Role(payload['role'], payload['username'])

    @property
    def role(self):
        return self._role
