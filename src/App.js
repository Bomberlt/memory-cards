import './App.css';
import { useSelector } from 'react-redux'
import CardsList from './Components/CardsList/CardsList';
import GameMenu from './Components/GameMenu/GameMenu';
import GameStatus from './Components/GameStatus/GameStatus';
import TopScores from './Components/TopScores/TopScores';

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
