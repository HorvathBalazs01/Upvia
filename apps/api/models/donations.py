from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

class Donation(Base):
    __tablename__ = "donations"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    amount = Column(Integer, nullable=False)
    supporter_id = Column(Integer, ForeignKey("supporters.id"))

    supporter = relationship("Supporter", back_populates="donations")