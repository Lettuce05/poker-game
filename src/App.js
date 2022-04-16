import { Link } from "react-router-dom";
import './App.css';


export default function App() {
  return (
    <main className="App">
       <h1 className="title">3-Way Poker</h1>
      <nav className="nav">
        <Link className="css-button-3d--sky" to="/game">Start Game</Link>
        <Link className="css-button-3d--sky" to="/highscores">Highscores</Link>
        <Link className="css-button-3d--sky" to="/settings">Settings</Link>

      </nav>

    </main>
  );
}
