
import { useState, useEffect } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [feedback, setFeedback] = useState(() => {
    const feedbackFromLocalStorage = window.localStorage.getItem('reviews');
    if (feedbackFromLocalStorage !== null) {
      return JSON.parse(feedbackFromLocalStorage);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  useEffect(() => {
    window.localStorage.setItem('reviews', JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div>
      <Description />
      <Options
        callback={updateFeedback}
        hasFeedback={totalFeedback > 0}
        reset={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          reviews={feedback}
          allFeedback={Math.round((feedback.good / totalFeedback) * 100)}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;