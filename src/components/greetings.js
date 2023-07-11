import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import {
  getGreetingsAsync, selectStatus, selectGreetings, selectError,
} from '../redux/greetings/greetingSlice';

const Greetings = () => {
  const greeting = useAppSelector(selectGreetings);
  const status = useAppSelector(selectStatus);
  const error = useAppSelector(selectError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGreetingsAsync());
  }, [dispatch]);

  return (
    <div>
      {status && <h2>Loadiing...</h2>}
      {error && <h2>{error}</h2>}
      {greeting && <h2>{greeting.message}</h2>}
    </div>
  );
};

export default Greetings;
