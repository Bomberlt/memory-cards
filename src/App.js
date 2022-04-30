import './App.css';
import { useSelector } from 'react-redux'
import CardsList from './Components/CardsList/CardsList';
import GameMenu from './Components/GameMenu/GameMenu';
import GameStatus from './Components/GameStatus/GameStatus';
import TopScores from './Components/TopScores/TopScores';
import WinScreen from './Components/WinScreen/WinScreen';

function App() {
  const gameCompleted = useSelector((state) => state.gameStatus.gameCompleted);
  return (
    <div className="App">
      <header className="App-header">
          Memory cards
      </header>
      <main>
        <GameMenu/>
        {gameCompleted && <WinScreen />}
        <CardsList/>
        {!gameCompleted && <GameStatus />}
        <TopScores/>
      </main>
    </div>
  );
}

export default App;
