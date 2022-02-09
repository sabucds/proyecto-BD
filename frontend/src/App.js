import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Inicio from "./Inicio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Inicio />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
