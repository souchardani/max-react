import { useState } from "react";
import { useQuiz } from "../context/useQuiz";
import Progress from "./Progress";

const Quiz = () => {
  const questions = useQuiz();

  const [answerClicked, setAnswerClicked] = useState(false);
  const [intervalFinished, setIntervalFinished] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [classToApply, setClassToApply] = useState("selected");
  const [answeredData, setAnsweredData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];
  const handleClick = (e, index) => {
    setSelectedAnswerIndex(index);
    setAnswerClicked(true);
  };

  const evaluateResponseAndSkip = () => {
    if (
      currentQuestion.answers[selectedAnswerIndex] ===
      currentQuestion.answers[0]
    ) {
      setClassToApply("correct");
      setAnsweredData([
        ...answeredData,
        {
          question: currentQuestionIndex,
          answer: selectedAnswerIndex,
          veredict: "correct",
        },
      ]);
    } else {
      setClassToApply("wrong");
      setAnsweredData([
        ...answeredData,
        {
          question: currentQuestionIndex,
          answer: selectedAnswerIndex,
          veredict: "wrong",
        },
      ]);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setClassToApply("");
      setAnswerClicked(false);
      setSelectedAnswerIndex(null);
    }
  };

  return (
    <div id="quiz">
      <div id="question">
        <Progress
          answerClicked={answerClicked}
          setIntervalFinished={setIntervalFinished}
          evaluateResponseAndSkip={evaluateResponseAndSkip}
        />
        <h2>{currentQuestion.text}</h2>
      </div>
      <div id="answers">
        {currentQuestion.answers.map((answer, index) => (
          <div key={index} className="answer">
            <button
              disabled={selectedAnswerIndex !== null}
              className={selectedAnswerIndex === index ? classToApply : ""}
              onClick={(e) => handleClick(e, index)}
            >
              {answer}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Quiz;
