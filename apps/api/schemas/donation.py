from pydantic import BaseModel, EmailStr


class DonationCreate(BaseModel):
    name: str # supporter name
    email: EmailStr
    amount: int