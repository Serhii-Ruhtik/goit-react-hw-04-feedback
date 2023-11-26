import css from '../Feedback/Feedback.module.css';

const Statistik = ({ good, neutral, bad, total, positive }) => {
  return (
    <>
      <ul className={css.list}>
        <li className={css.item}>
          Good: <span className={css.span}>{good}</span>{' '}
        </li>
        <li className={css.item}>
          Neutral: <span className={css.span}>{neutral}</span>{' '}
        </li>
        <li className={css.item}>
          Bad: <span className={css.span}>{bad}</span>{' '}
        </li>
        <li className={css.item}>
          TotalFeedback: <span className={css.span}>{total}</span>
        </li>
        <li className={css.item}>
          PositiveFeedback: <span className={css.span}>{positive} %</span>
        </li>
      </ul>
    </>
  );
};
export default Statistik;
