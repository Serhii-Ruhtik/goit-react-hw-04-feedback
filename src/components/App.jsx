import React from 'react';
import css from './Feedback/Feedback.module.css';
import Statistik from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const { good } = this.state;
    return totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();

    return (
      <div className={css.feedback}>
        <h2 className={css.title}>Please leave feedback</h2>
        <>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
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
  }
}

export default App;
