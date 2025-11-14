import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import React, { useState, useEffect } from 'react';
import questionsData from '../util/surveyQuestions.json'; // If in src folder
import "../styles/pageStyles/survey.css"

function Survey() {
  const [currentCategory, setCurrentCategory] = useState('positive_indicators');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const categories = [
    { key: 'positive_indicators', label: 'Motivation & Well-being' },
    { key: 'depression_indicators', label: 'Depression Indicators' },
    { key: 'anxiety_indicators', label: 'Anxiety Indicators' }
  ];

  const ratingOptions = [
    { value: 1, label: 'Never' },
    { value: 2, label: 'Rarely' },
    { value: 3, label: 'Sometimes' },
    { value: 4, label: 'Often' },
    { value: 5, label: 'Always' }
  ];

  const currentQuestions = questionsData[currentCategory];
  const currentQuestion = currentQuestions[currentQuestionIndex];

  const handleAnswer = (rating) => {
    const questionKey = `${currentCategory}_${currentQuestion.id}`;
    setAnswers({
      ...answers,
      [questionKey]: rating
    });

    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const currentCategoryIndex = categories.findIndex(c => c.key === currentCategory);
      if (currentCategoryIndex < categories.length - 1) {
        setCurrentCategory(categories[currentCategoryIndex + 1].key);
        setCurrentQuestionIndex(0);
      } else {
        setShowResults(true);
      }
    }
  };

  const calculateScore = (categoryKey) => {
    const categoryAnswers = Object.entries(answers).filter(([key]) =>
      key.startsWith(categoryKey)
    );

    const total = categoryAnswers.reduce((sum, [, rating]) => sum + rating, 0);
    const average = categoryAnswers.length > 0 ? total / categoryAnswers.length : 0;

    return {
      total,
      average: average.toFixed(2),
      count: categoryAnswers.length
    };
  };

  if (showResults) {
    return (
      <div className="survey-container">
        <div className="resultsCard">
          <h2 className="resultsTitle">Quiz Results</h2>
          {categories.map(category => {
            const score = calculateScore(category.key);
            return (
              <div key={category.key} className="categoryResult">
                <h3 className="categoryTitle">{category.label}</h3>
                <p className="resultText">Average Score: {score.average} / 5</p>
                <p className="resultText">Questions Answered: {score.count} / {questionsData[category.key].length}</p>
              </div>
            );
          })}
          <button onClick={() => window.location.reload()} className="restartButton">
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  const totalQuestions = categories.reduce((sum, cat) => sum + questionsData[cat.key].length, 0);
  const answeredQuestions = Object.keys(answers).length;
  const overallProgress = (answeredQuestions / totalQuestions) * 100;

  return (
    <div className="survey-container">
        <div className="quiz-container">
            <div className="quizCard">
                <div className="header">
                    <h2 className="categoryLabel">{categories.find(c => c.key === currentCategory)?.label}</h2>
                    <p className="questionCounter">Question {currentQuestionIndex + 1} of {currentQuestions.length}</p>
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
                
                <p className="progressText">Overall Progress: {answeredQuestions} / {totalQuestions}</p>
            </div>
        </div>
    </div>
  );
}

export default Survey;
