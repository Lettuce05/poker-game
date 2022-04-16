import { render } from "react-dom";
import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Game from "./routes/game";
import Settings from "./routes/settings";
import Highscores from "./routes/highscores";


const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="settings" element={<Settings />}/>
      <Route path="highscores" element={<Highscores />}/>
      <Route path="game" element={<Game />}/>
    </Routes>
  </BrowserRouter>,
 rootElement
);