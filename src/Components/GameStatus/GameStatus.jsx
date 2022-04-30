import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setTimePassed } from '../../cardsListSlice'

const GameStatus = () => {
  const flipCount = useSelector((state) => state.cardsList.flipCount);
  const timePassed = useSelector((state) => state.cardsList.timePassed);
  const dispatch = useDispatch();

  const tick = () => {
    dispatch(setTimePassed(timePassed+1));
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
      <div>Time passed: {timePassed}</div>
    </>
  );
};

export default GameStatus;