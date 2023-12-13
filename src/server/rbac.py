# from server.resources import BaseResource

class Role:
    def __init__(self, role_type, identifier):
        self._role_type = role_type
        self._identifier = identifier

    @property
    def role_type(self):
        return self._role_type

    @property
    def identifier(self):
        return self._identifier

    # def can_read(self, resource:BaseResource)->bool:
    #     return resource.associated_with(self)

    # def can_write(self, resource:BaseResource)->bool:
    #     return resource.owner(self)
