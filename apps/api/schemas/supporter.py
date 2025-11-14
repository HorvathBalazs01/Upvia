from pydantic import BaseModel, EmailStr


class SupporterCreate(BaseModel):
    name: str
    email: EmailStr


class SupporterOut(BaseModel):
    id: int
    name: str
    email: EmailStr
    total_donations: int
    donation_count: int
    rank: str
    is_verified: int


class Config:
    orm_mode = True