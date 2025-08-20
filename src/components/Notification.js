import React from 'react';
import './Notification.css';

const Notification = ({ message }) => {
  return (
    <div className="notification-banner">
      <p>{message}</p>
    </div>
  );
};

export default Notification;
