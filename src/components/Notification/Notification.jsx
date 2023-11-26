import React from 'react';
import css from '../Feedback/Feedback.module.css';

const Notification = ({ message }) => {
  return <p className={css.title}>{message}</p>;
};
export default Notification;
