from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.routes import supporters_route, donations_route, survey_questions_route
from api.database import Base, engine
from api.models import supporters, donations, survey_questions

Base.metadata.create_all(bind=engine)


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(supporters_route.router, prefix="/supporters", tags=["Supporters"])
app.include_router(donations_route.router, prefix="/donations", tags=["Donations"])
app.include_router(survey_questions_route.router, prefix="/survey", tags=["SurveyQuestions"])


@app.get("/")
def home():
    return {"message": "Backend live!"}