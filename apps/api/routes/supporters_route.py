from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models.supporters import Supporter
from schemas.supporter import SupporterOut
from typing import List


router = APIRouter()



@router.get("/", response_model=List[SupporterOut])
def get_supporters():
    db: Session = next(get_db())
    supporters = db.query(Supporter).all()
    if not supporters:
        raise HTTPException(status_code=404, detail="No supporters found")
    return supporters