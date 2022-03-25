import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import NotesState from "./Context/notes/NotesState";
const App = () => {
  return (
    <>
      <NotesState>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </NotesState>
    </>
  );
};

export default App;
