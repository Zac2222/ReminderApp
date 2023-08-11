import React, { useState, useEffect } from 'react';
import ReminderServices from '../services/reminder';
import Reminder from '../models/reminders';

const LoadingIndicator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Reminder[]>([]);
  const [error, setError] = useState('');



  useEffect(() => {
    setIsLoading(true);

    ReminderServices.getReminders() //calls ouur apiu
      .then(response => {
        setData(response);
        setError(''); //clears the error message if it was already on screen and got fixed
      })
      .catch(error => {
        setError(error.message); //handles the errors
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className='d-flex justify-content-center'>
      {error && <p className='text-danger'>The api failed to load: {error}</p>}
      {isLoading && <div className='spinner-border'></div>}
    </div>
  );
};

export default LoadingIndicator;
