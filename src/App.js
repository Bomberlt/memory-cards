import './App.css';
import { useSelector } from 'react-redux'
import CardsList from './CardsList/CardsList';
import GameMenu from './GameMenu/GameMenu';
import GameStatus from './GameStatus/GameStatus';
import TopScores from './TopScores/TopScores';

function App() {
  const gameCompleted = useSelector((state) => state.cardsList.gameCompleted);
  console.log('gameCompleted');
  console.log(gameCompleted);

  return (
    <div className="App">
      <header className="App-header">
          Memory cards
      </header>
      <main>
        <GameMenu/>
        <CardsList/>
        {!gameCompleted && <GameStatus />}
        <TopScores/>
      </main>
    </div>
  );
}

export default App;
