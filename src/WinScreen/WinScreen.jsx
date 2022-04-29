import './WinScreen.css';
import { useSelector, useDispatch } from 'react-redux'
import { completeGame } from '../CardsList/cardsListSlice'

const WinScreen = () => {
  const dispatch = useDispatch();
  dispatch(completeGame());
  const flipCount = useSelector((state) => state.cardsList.flipCount);
  const timePassed = useSelector((state) => state.cardsList.timePassed);
  return (
    <div className="win-screen">
      <span>All Cards are up</span> <br/>
      <span>Time passed: {timePassed}; flips used: {flipCount}</span>
    </div>
  );
};

export default WinScreen;