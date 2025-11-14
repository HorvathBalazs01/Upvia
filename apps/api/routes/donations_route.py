from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from api.database import get_db
from api.models.donations import Donation
from api.models.supporters import Supporter
from api.schemas.donation import DonationCreate


router = APIRouter()


def compute_rank(total):
    if total >= 1000:
        return "gold"
    elif total >= 300:
        return "silver"
    elif total > 0:
        return "community-supporter"
        
    


@router.post("/donations")
def add_donation(data: DonationCreate, db: Session = Depends(get_db)):
    supporter = db.query(Supporter).filter(Supporter.email == data.email).first()


    if not supporter:
        supporter = Supporter(name=data.name, email=data.email)
        db.add(supporter)
        db.commit()
        db.refresh(supporter)


    donation = Donation(amount=data.amount, email=data.email, supporter_id=supporter.id)
    db.add(donation)


    supporter.total_donations += data.amount
    supporter.donation_count += 1
    supporter.rank = compute_rank(supporter.total_donations)


    db.commit()


    return {"message": "Donation added", "supporter_rank": supporter.rank}
