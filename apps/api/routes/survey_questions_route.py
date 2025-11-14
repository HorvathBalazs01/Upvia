from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from models.survey_questions import SurveyQuestion
from schemas.survey_question import SurveyQuestionCreate


router = APIRouter()


@router.post("/")
def add_question(data: SurveyQuestionCreate, db: Session = Depends(get_db)):
    question = SurveyQuestion(question=data.question)
    db.add(question)
    db.commit()
    db.refresh(question)
    return question


@router.get("/")
def list_questions(db: Session = Depends(get_db)):
    return db.query(SurveyQuestion).all()