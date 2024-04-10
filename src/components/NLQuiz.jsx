// This is a component containing a quiz About 10 official things of Newfoundland & Labrador.

import React, { Component } from 'react';

class NLQuiz extends Component {
  // Initialize state in the constructor
  constructor(props) {
    super(props);
    this.state = {
      
      // Array of questions, each with a question, possible answers, and the correct answer
      myQuestions: [
        {
          question: "#1: What year did Newfoundland and Labrador become a province?",
          answers: {
              A: "1950",
              B: "1942",
              C: "1949"
          },
          correctAnswer: "C"
      },
      {
          question: "#2: What is the capital city of Newfoundland and Labrador?",
          answers: {
              A: "Corner Brook",
              B: "St. John's",
              C: "Gander"
          },
          correctAnswer: "B"
      },
      {
          question: "#3: What is the official flower of Newfoundland and Labrador?",
          answers: {
              A: "Pitcher Plant",
              B: "Wild Rose",
              C: "Carnations"
          },
          correctAnswer: "A"
      },
      {
          question: "#4: What is the official bird of Newfoundland and Labrador?",
          answers: {
              A: "Atlantic Puffin",
              B: "Osprey",
              C: "Seagull"
          },
          correctAnswer: "A"
      },
      {
          question: "#5: What is the official tree of Newfoundland and Labrador?",
          answers: {
              A: "Red Pine",
              B: "White Pine",
              C: "Black Spruce"
          },
          correctAnswer: "C"
      },
      {
          question: "#6: What is the official dog breed of Newfoundland and Labrador?",
          answers: {
              A: "Labrador Retriever",
              B: "Newfoundland Dog",
              C: "Golden Retriever"
          },
          correctAnswer: "B"
      },
      {
          question: "#7: What is the provincial mineral of Newfoundland and Labrador?",
          answers: {
              A: "Iron",
              B: "Gold",
              C: "Labradorite"
          },
          correctAnswer: "C"
      },
      {
          question: "#8: Who was the official 1st Premier of Newfoundland and Labrador?",
          answers: {
              A: "Joey Smallwood",
              B: "Frank Moores",
              C: "Danny Williams"
          },
          correctAnswer: "A"
      },
      {
          question: "#9: What is the official fish of Newfoundland and Labrador?",
          answers: {
              A: "Salmon",
              B: "Cod",
              C: "Trout"
          },
          correctAnswer: "B"
      },
      {
          question: "#10: What is the official game bird of Newfoundland and Labrador?",
          answers: {
              A: "Partridge",
              B: "Pheasant",
              C: "Grouse"
          },
          correctAnswer: "A"
      }
      ],
      
      // Object to store the user's answers
      answers: {},
      
      // Boolean to control whether to show the results
      showResults: false,
    };
  }

  // Method to handle when an answer is selected
  handleAnswer = (questionIndex, answer) => {
    this.setState(prevState => ({
      answers: {
        ...prevState.answers,
        [questionIndex]: answer,
      },
    }));
  }

  // Method to handle when the quiz is submitted
  handleSubmit = () => {
    this.setState({ showResults: true }, () => {
      window.scrollTo(0, 2000);
    });
  }
  
  // Method to handle when the quiz is redone
  handleRedo = () => {
    this.setState({ answers: {}, showResults: false }, () => {
      window.scrollTo(0, 0);
    });
  }

  // Render the component
  render() {
    const { myQuestions, answers, showResults } = this.state;

    return (
      <div className = "quizBacking">
        <h3 id="title">10 official things of Newfoundland & Labrador Quiz</h3>
        <div className="quiz-container" id="quiz">
          {/* Map over the questions and render each one */}
          {myQuestions.map((question, index) => (
            <div key={index}>
              <div className="question">{question.question}</div>
              <div className="answers">
                {/* Map over the answers and render each one */}
                {Object.entries(question.answers).map(([letter, answer]) => (
                  <label key={letter}>
                    <input
                      type="radio"
                      name={`question${index}`}
                      value={letter}
                      checked={answers[index] === letter}
                      onChange={() => this.handleAnswer(index, letter)}
                    />
                    {letter}: {answer}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button id="submit" onClick={this.handleSubmit}>Submit Quiz</button>
        <button id="redo" onClick={this.handleRedo}>Redo Quiz</button>
        {/* Render the results if showResults is true */}
        {showResults && (
          <div id="results">
            You answered {Object.keys(answers).length} questions, out of which,
            {Object.entries(answers).filter(([index, answer]) => myQuestions[index].correctAnswer === answer).length} were correct.
          </div>
        )}
      </div>
    );
  }
}

export default NLQuiz;