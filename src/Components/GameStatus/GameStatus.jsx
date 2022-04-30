import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setTimePassed } from '../../gameStatusSlice'

const GameStatus = () => {
  const flipCount = useSelector((state) => state.gameStatus.flipCount);
  const timePassed = useSelector((state) => state.gameStatus.timePassed);
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