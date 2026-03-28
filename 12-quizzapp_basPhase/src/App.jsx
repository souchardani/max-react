import Header from "./Components/Header";
import Quiz from "./Components/Quiz";
import QuizProvider from "./context/QuizProvider.jsx";

function App() {
  return (
    <QuizProvider>
      <Header /> <Quiz />
    </QuizProvider>
  );
}

export default App;
