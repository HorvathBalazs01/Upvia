import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import React, { useState, useEffect } from 'react';
import "../styles/pageStyles/survey.css";

function Survey() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(true);

  const ratingOptions = [
    { value: 1, label: 'Never' },
    { value: 2, label: 'Rarely' },
    { value: 3, label: 'Sometimes' },
    { value: 4, label: 'Often' },
    { value: 5, label: 'Always' }
  ];

  // 🔥 Fetch questions from FastAPI
  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch("https://team04.hackplay.eu/survey");
        if (!res.ok) throw new Error("Failed to load survey questions");

        const data = await res.json();
        setQuestions(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchQuestions();
  }, []);

  if (loading) {
    return <p style={{ textAlign: "center", fontSize: "1.5rem" }}>Loading survey...</p>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (rating) => {
    const questionId = currentQuestion.id;

    setAnswers({
      ...answers,
      [questionId]: rating
    });

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    const values = Object.values(answers);
    const total = values.reduce((sum, v) => sum + v, 0);
    const avg = values.length ? (total / values.length).toFixed(2) : 0;

    return { total, avg };
  };

  if (showResults) {
    const score = calculateScore();

    return (
      <div className="survey-container">
        <div className="resultsCard">
          <h2 className="resultsTitle">Your Results</h2>

          <p className="resultText">Average Score: {score.avg} / 5</p>
          <p className="resultText">
            Questions Answered: {Object.keys(answers).length} / {questions.length}
          </p>

          <button
            onClick={() => window.location.reload()}
            className="restartButton"
          >
            Restart Survey
          </button>
        </div>
      </div>
    );
  }

  const overallProgress = ((Object.keys(answers).length) / questions.length) * 100;

  return (
    <div className="survey-container">

      <div className="quiz-container">
        <div className="quizCard">

          <div className="header">
            <h2 className="categoryLabel">Self-Motivation Survey</h2>
            <p className="questionCounter">
              Question {currentQuestionIndex + 1} of {questions.length}
            </p>
          </div>

          <div className="questionContainer">
            <h3 className="questionText">{currentQuestion.statement}</h3>

            <div className="buttonGrid">
              {ratingOptions.map(option => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className="ratingButton"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="progressBar">
            <div
              className="progressFill"
              style={{ width: `${overallProgress}%` }}
            />
          </div>

          <p className="progressText">
            Overall Progress: {Object.keys(answers).length} / {questions.length}
          </p>

        </div>
      </div>

    </div>
  );
}

export default Survey;
