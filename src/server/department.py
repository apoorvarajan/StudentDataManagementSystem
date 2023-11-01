from server.user import Faculty

class Department:
    def __init__(self, dept_id:str, dept_name:str, dept_head:Faculty):
        self._dept_id = dept_id
        self._dept_name = dept_name
        self._dept_head = dept_head

    @property
    def dept_id(self)->str:
        return self._dept_id
    
    @property
    def dept_name(self)->str:
        return self._dept_name
    
    @property
    def dept_head(self)->Faculty:
        return self._dept_head.copy()
    