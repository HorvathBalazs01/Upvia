from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from database import Base

class Supporter(Base):
    __tablename__ = "supporters"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True, nullable=False)
    email = Column(String, unique=True, nullable=False)
    total_donations = Column(Integer, default=0)
    donation_count = Column(Integer, default=0)
    rank = Column(String, default="community")

    donations = relationship("Donation", back_populates="supporter")