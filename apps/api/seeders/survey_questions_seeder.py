from sqlalchemy.orm import Session
from database import SessionLocal
from models.survey_questions import SurveyQuestion


survey_questions = [
    {"id": 1, "statement": "I feel motivated to achieve my personal goals."},
    {"id": 2, "statement": "I can manage my time effectively to complete tasks."},
    {"id": 3, "statement": "I enjoy learning new skills and improving myself."},
    {"id": 4, "statement": "I stay focused even when I encounter challenges."},
    {"id": 5, "statement": "I set clear objectives for my personal growth."},
    {"id": 6, "statement": "I am proactive in finding solutions to problems."},
    {"id": 7, "statement": "I seek feedback to improve my performance."},
    {"id": 8, "statement": "I take initiative without needing to be prompted."},
    {"id": 9, "statement": "I reflect on my actions to learn and grow."},
    {"id": 10, "statement": "I feel confident in my ability to achieve my goals."},
    {"id": 11, "statement": "I struggled to start tasks even when I had time."},
    {"id": 12,"statement": "I followed through on what I planned."},
    {"id": 13,"statement": "I felt a sense of purpose or direction."},
    {"id": 14,"statement": "I avoided things that felt challenging."},
    {"id": 15,"statement": "I celebrated small wins or progress."},
    {"id": 16, "statement": "I felt down, sad, or hopeless."},
    {"id": 17, "statement": "I had little interest or pleasure in doing things."},
    {"id": 18, "statement": "I felt tired or had little energy."},
    {"id": 19, "statement": "My sleep was poor (too much or too little)."},
    {"id": 20, "statement": "I found it hard to concentrate on things."},
    {"id": 21, "statement": "I felt worthless or guilty."},
    {"id": 22, "statement": "My appetite changed noticeably."},
    {"id": 23, "statement": "I felt emotionally numb or disconnected."},
    {"id": 24, "statement": "I avoided social contact or withdrew from others."},
    {"id": 25, "statement": "I felt that life had little meaning."},
    {"id": 26, "statement": "I struggled to make simple decisions."},
    {"id": 27, "statement": "I felt restless or slowed down physically."},
    {"id": 28, "statement": "I noticed negative thoughts repeating in my mind."},
    {"id": 29, "statement": "I found it hard to feel joy even in positive moments."},
    {"id": 30, "statement": "I felt that small tasks took a lot of effort."},
    {"id": 31, "statement": "I felt tense, nervous, or on edge."},
    {"id": 32, "statement": "I worried about many different things."},
    {"id": 33, "statement": "I found it hard to relax."},
    {"id": 34, "statement": "I felt a sense of dread or fear without clear reason."},
    {"id": 35, "statement": "I noticed my heart racing or breathing faster."},
    {"id": 36, "statement": "I felt easily startled or jumpy."},
    {"id": 37, "statement": "I struggled to stop or control worrying."},
    {"id": 38, "statement": "I avoided situations that made me nervous."},
    {"id": 39, "statement": "I felt irritable or impatient."},
    {"id": 40, "statement": "I had trouble sleeping because of racing thoughts."},
    {"id": 41, "statement": "I feared something bad might happen."},
    {"id": 42, "statement": "I replayed stressful situations in my mind."},
    {"id": 43, "statement": "I felt dizzy, sweaty, or shaky during stress."},
    {"id": 44, "statement": "I needed reassurance from others often."},
    {"id": 45, "statement": "I felt anxious even in safe or calm settings."}
]

def seed_survey_questions():
    db: Session = SessionLocal()
    try:
        for q in survey_questions:
            exists = db.query(SurveyQuestion).filter(SurveyQuestion.id == q["id"]).first()
            if not exists:
                question = SurveyQuestion(**q)
                db.add(question)
        db.commit()
        print("Survey questions successfully seeded!")
    finally:
        db.close()

