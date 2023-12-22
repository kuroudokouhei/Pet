import { Routes, Route, Link } from "react-router-dom";

import {Home} from "./components/Home"
import {Map} from "./components/Map"
import {Poster} from "./components/Poster"
import {Tips} from "./components/Tips"
import {PosterCheck} from "./components/PosterCheck"


function App(){
  return(
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="Map">Map</Link>
        <br />  
        <Link to="Poster">Poster</Link>
        <br />
        <Link to="Tips">Tips</Link>
        <br />

        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Map" element={<Map />} />
        <Route path="/Poster">
          <Route index={true} element={<Poster />} />
          <Route path="/Poster/PosterCheck" element={<PosterCheck />} />
        </Route>
        <Route path="/Tips" element={<Tips />} />
      </Routes>
      </div>
  );
}     
export default App;
