import React from "react";
import { useEffect } from "react";
import './WinScreen.css';
import { useSelector, useDispatch } from 'react-redux'
import { compareScores } from "../../utils";

const WinScreen = () => {
  const dispatch = useDispatch();
  const flipCount = useSelector((state) => state.cardsList.flipCount);
  const timePassed = useSelector((state) => state.cardsList.timePassed);
  const hasRunOnce = React.useRef(false);
  const topCount = 10;

  useEffect(() => {
    if (hasRunOnce.current) {
      return;
    }

    hasRunOnce.current = true;
    const previousResults = JSON.parse(localStorage.getItem('results'));
    const newEntry = {flipCount: flipCount, timePassed: timePassed};
    if (previousResults) {
      if (previousResults.length < topCount) {
        localStorage.setItem('results', JSON.stringify(
          ([...previousResults, newEntry]).sort(compareScores)
        ));
      } else {
        if (previousResults.some(result => compareScores(result, newEntry) > 0)) {
          localStorage.setItem('results', JSON.stringify(
            ([...previousResults.slice(0, topCount - 1), newEntry]).sort(compareScores)
          ));
        }
      }
    } else {
      localStorage.setItem('results', JSON.stringify(
        [newEntry]
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