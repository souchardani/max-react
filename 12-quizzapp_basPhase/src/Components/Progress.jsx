import { useEffect, useState } from "react";

const Progress = ({
  answerClicked,
  setIntervalFinished,
  evaluateResponseAndSkip,
}) => {
  const [progressValue, setProgressValue] = useState(10000);
  let intervalReducer = 10;
  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      if (answerClicked) {
        intervalReducer = 100;
      }

      setProgressValue((value) => {
        if (value <= 0) {
          clearInterval(interval);
          return 0;
        } else {
          return value - intervalReducer;
        }
      });
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [answerClicked]);

  useEffect(() => {
    if (progressValue === 0) {
      setIntervalFinished(true);
      evaluateResponseAndSkip();
    }
  }, [progressValue]);

  return (
    <progress
      className={answerClicked ? "answered" : ""}
      value={progressValue}
      max={10000}
    />
  );
};
export default Progress;
