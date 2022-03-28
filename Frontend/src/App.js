import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import { Alert } from "./components/Alert";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";

import NotesState from "./Context/notes/NotesState";
const App = () => {
  return (
    <>
      <NotesState>
        <BrowserRouter>
          <Navbar />
          <Alert mesg={"thus is aslasj "} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </NotesState>
    </>
  );
};

export default App;
