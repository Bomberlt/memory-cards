import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { timePassed } from '../CardsList/cardsListSlice'

const GameStatus = () => {
  const flipCount = useSelector((state) => state.cardsList.flipCount);
  const dispatch = useDispatch();

  const [secondsElapsed, setSeconds] = useState(0);
  const tick = () => {
    setSeconds(secondsElapsed + 1);
    dispatch(timePassed(secondsElapsed+1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      tick();
    }, 1000)

    return () => {
      clearInterval(interval);
    }
  });

  return (
    <>
      <div>Flip count: {flipCount}</div>
      <div>Time passed: {secondsElapsed}</div>
    </>
  );
};

export default GameStatus;