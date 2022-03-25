import React, { useContext, useEffect } from "react";
import notesContext from "../Context/notes/notesContext";
import AddNote from "./AddNote";
import Noteitem from "./Noteitem";
const Notes = () => {
  const { state, getNote } = useContext(notesContext);
  useEffect(() => {
    getNote();
  }, []);
  return (
    <>
      <AddNote />
      <div className="row my-3">
        {state.map((notes, x) => {
          return <Noteitem notes={notes} key={x + 1} />;
        })}
      </div>
    </>
  );
};

export default Notes;
