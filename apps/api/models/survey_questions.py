from sqlalchemy import Column, Integer, String
from database import Base


class SurveyQuestion(Base):
    __tablename__ = "survey_questions"


    id = Column(Integer, primary_key=True, index=True)
    question = Column(String, nullable=False)