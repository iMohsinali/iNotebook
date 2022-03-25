import React, { useContext, useEffect } from "react";
import notesContext from "../Context/notes/notesContext";

const Noteitem = (props) => {
  const { deleteNote } = useContext(notesContext);
  useEffect(() => {
    deleteNote();
  }, [deleteNote]);

  const { notes } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{notes.title}</h5>
          <p className="card-text">{notes.descreption}</p>
          <p className="card-text">{notes.tag}</p>
          <i
            className="fa-solid fa-trash-can mx-2"
            onClick={() => {
              deleteNote(notes._id);
            }}
          ></i>
          <i className="fa-solid fa-pen-to-square mx-2"></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
