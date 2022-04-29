import './App.css';
import CardsList from './CardsList/CardsList';
import GameMenu from './GameMenu/GameMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Memory cards
      </header>
      <main>
        <GameMenu/>
        <CardsList/>
      </main>
    </div>
  );
}

export default App;
