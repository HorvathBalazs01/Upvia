from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from api.database import get_db
from api.models.supporters import Supporter
from api.schemas.supporter import SupporterOut


router = APIRouter()


@router.get("/", response_model=list[SupporterOut])
def get_supporters(db: Session = Depends(get_db)):
    return db.query(Supporter).all()