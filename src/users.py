from abc import ABC, abstractmethod

class BaseUser(ABC):

    def __init__(self, username:str, email:str):
        self.username = username
        self.email = email

    @property
    @abstractmethod
    def access_level(self):
        ...
