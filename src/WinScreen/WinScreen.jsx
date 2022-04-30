import React from "react";
import { useEffect } from "react";
import './WinScreen.css';
import { useSelector, useDispatch } from 'react-redux'
import { completeGame } from '../CardsList/cardsListSlice'

const WinScreen = () => {
  const dispatch = useDispatch();
  dispatch(completeGame());
  const flipCount = useSelector((state) => state.cardsList.flipCount);
  const timePassed = useSelector((state) => state.cardsList.timePassed);
  const hasRunOnce = React.useRef(false);
  useEffect(() => {
    if (hasRunOnce.current) {
      return;
    }

    hasRunOnce.current = true;
    const previousResults = JSON.parse(localStorage.getItem('results'));
    if (previousResults) {
      localStorage.setItem('results', JSON.stringify(
        [...previousResults, {flipCount: flipCount, timePassed: timePassed}]
      ));
    } else {
      localStorage.setItem('results', JSON.stringify(
        [{flipCount: flipCount, timePassed: timePassed}]
      ));
    }
  }, [flipCount, timePassed]);

  return (
    <div className="win-screen">
      <span>All Cards are up</span> <br/>
      <span>Time passed: {timePassed}; flips used: {flipCount}</span>
    </div>
  );
};

export default WinScreen;