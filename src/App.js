import './App.css';
import Header from './Components/Header';
import Naslovna from './Components/Naslovna';
import Biography from './Components/Biography';
import Songs from "./Components/Songs";
import Trgovina from "./Components/Trgovina"
import { Route, Routes, BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <center>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Naslovna/>}></Route>
            <Route path="/biography" element={<Biography/>}></Route>
            <Route path="/songs" element={<Songs/>}></Route>
            <Route path="/trgovina" element={<Trgovina/>}></Route>
          </Routes>
        </Router>
      </center>
    </div>
  );
}

export default App;