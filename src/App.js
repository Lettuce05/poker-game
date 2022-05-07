import Button from './components/Button/Button'
import { Link } from 'react-router-dom';
import './App.css';
import './components/Button/Button.css';



export default function App() {
  return (
    <main className="App">
       <h1 className="title">Poker</h1>
      <nav className="nav">
        <Link className="btn btn-green" to="/game">Play</Link>
        <Link className="btn btn-orange" to="/highscores">Highscores</Link>
        <Link className="btn btn-orange" to="/settings">Settings</Link>
      </nav>

    </main>
  );
}
