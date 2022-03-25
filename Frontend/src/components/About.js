import React, { useContext, useEffect } from "react";
import notesContext from "../Context/notes/notesContext";

const About = () => {
  const { state, update } = useContext(notesContext);
  useEffect(() => {
    update();
  }, []);
  return <div>{state.name}</div>;
};

export default About;
