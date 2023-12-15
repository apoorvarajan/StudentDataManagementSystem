from enum import Enum
from dataclasses import dataclass

class Season(Enum):
    SPRING = 0
    SUMMER = 1
    FALL = 2
    WINTER = 3

@dataclass(frozen=True)
class Semester:
    season : Season
    year : int

    def copy(self):
        return Semester(self.season, self.year)
