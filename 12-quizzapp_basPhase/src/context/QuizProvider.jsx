import { QuizContext } from "./quizContext";
import questions from "../assets/questions";

const questionsToUse = [];

const numbersUsed = [];

while (questionsToUse.length < 3) {
  const random = Math.floor(Math.random() * 7) + 1;
  if (!numbersUsed.includes(random)) {
    questionsToUse.push(questions[random]);
    numbersUsed.push(random);
  }
}

export default function QuizProvider({ children }) {
  return (
    <QuizContext.Provider value={questionsToUse}>
      {children}
    </QuizContext.Provider>
  );
}
