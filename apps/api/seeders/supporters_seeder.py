from sqlalchemy.orm import Session
from database import SessionLocal
from models.supporters import Supporter


supporters_data = [
    {"name": "Foundation for Growth", "rank": "gold", "email": "fig@example.com", "total_donations": 1000, "donation_count": 5, "is_verified": 1},
    {"name": "Mindful Living Institute", "rank": "gold", "email": "mli@example.com", "total_donations": 1200, "donation_count": 6, "is_verified": 1},
    {"name": "Acme Foundation", "rank": "gold", "email": "af@example.com", "total_donations": 1100, "donation_count": 5, "is_verified": 1},

    {"name": "Personal Development Co", "rank": "silver", "email": "pdc@example.com", "total_donations": 500, "donation_count": 3, "is_verified": 1},
    {"name": "Wellness Partners", "rank": "silver", "email": "wp@example.com", "total_donations": 450, "donation_count": 2, "is_verified": 1},
    {"name": "Future Leaders Fund", "rank": "silver", "email": "flf@example.com", "total_donations": 400, "donation_count": 2, "is_verified": 1},
    {"name": "Empowerment Network", "rank": "silver", "email": "en@example.com", "total_donations": 350, "donation_count": 2, "is_verified": 1},

    {"name": "Sarah Johnson", "rank": "community_champion", "email": "sj@example.com", "total_donations": 50, "donation_count": 1, "is_verified": 1},
    {"name": "Michael Chen", "rank": "community_champion", "email": "mc@example.com", "total_donations": 60, "donation_count": 1, "is_verified": 1},
    {"name": "Emily Rodriguez", "rank": "community_champion", "email": "er@example.com", "total_donations": 40, "donation_count": 1, "is_verified": 1},
    {"name": "David Kim", "rank": "community_champion", "email": "dk@example.com", "total_donations": 45, "donation_count": 1, "is_verified": 1},
    {"name": "Lisa Anderson", "rank": "community_champion", "email": "la@example.com", "total_donations": 55, "donation_count": 1, "is_verified": 1},
    {"name": "James Wilson", "rank": "community_champion", "email": "jw@example.com", "total_donations": 50, "donation_count": 1, "is_verified": 1},
]

def seed_supporters():
    db: Session = SessionLocal()
    try:
        for supporter_data in supporters_data:
            existing = db.query(Supporter).filter(Supporter.email == supporter_data["email"]).first()
            if not existing:
                supporter = Supporter(**supporter_data)
                db.add(supporter)
        db.commit()
        print("Supporters successfully seeded!")
    finally:
        db.close()
