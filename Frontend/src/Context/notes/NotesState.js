import NotesContext from "./notesContext";

import React, { useState } from "react";

const NotesState = ({ children }) => {
  const s1 = {
    name: "Mohisn",
    class: "bce",
  };
  const [state, setstate] = useState(s1);
  const update = () => {
    setTimeout(() => {
      setstate({
        name: "Sajid",
        class: "bce7",
      });
    }, 2000);
  };
  return (
    <NotesContext.Provider value={{ state, update }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesState;
