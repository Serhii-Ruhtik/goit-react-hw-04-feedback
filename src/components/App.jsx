import { useState } from 'react';
import css from './Feedback/Feedback.module.css';
import Statistik from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    if (option === 'good') {
      setGood(prev => prev + 1);
    } else if (option === 'neutral') {
      setNeutral(prev => prev + 1);
    } else if (option === 'bad') {
      setBad(prev => prev + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    // const { good } = this.state;
    return totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
  };
  const total = countTotalFeedback();
  const positive = countPositiveFeedbackPercentage();
  return (
    <div className={css.feedback}>
      <h2 className={css.title}>Please leave feedback</h2>
      <>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </>

      <div>
        <h2 className={css.title}>Statistik</h2>
        {total === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistik
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positive={positive}
          />
        )}
      </div>
    </div>
  );
};

export default App;
