class Department:
    def __init__(self, dept_id:str, dept_name:str):
        self._dept_id = dept_id
        self._dept_name = dept_name

    @property
    def dept_id(self)->str:
        return self._dept_id
    
    @property
    def dept_name(self)->str:
        return self._dept_name
    