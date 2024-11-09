from typing  import Optional
from datetime import date
from pydantic import BaseModel

class User(BaseModel):
    serial_number: Optional[int] = None
    id: str
    name: str
    nickname: str
    password: str
    birth_date: date

class LoginUser(BaseModel):
    id: str
    password: str