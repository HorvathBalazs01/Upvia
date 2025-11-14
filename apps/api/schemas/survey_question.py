from pydantic import BaseModel


class SurveyQuestionCreate(BaseModel):
    question: str