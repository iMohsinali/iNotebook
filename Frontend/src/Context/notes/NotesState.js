import NotesContext from "./notesContext";

import React, { useState } from "react";

const NotesState = (props) => {
  const notes = [{}];
  const host = "http://localhost:5000";

  const getNote = async () => {
    try {
      const url = `${host}/api/notes/fetchallnotes`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzYzE2M2NmYTJkZGUzNGZjYmU5ZGI5In0sImlhdCI6MTY0ODEwNzgyMH0.x3qViP4WFncBupDpEXfoGBxelbAAgPkpEGEGNmnvK4U",
        },
      });
      const json = await response.json();
      console.log(json);
      setstate(json);
    } catch (error) {
      console.log(error);
    }
  };

  const [state, setstate] = useState(notes);

  //Add Note
  const addNote = async (title, descreption, tag) => {
    try {
      const url = `${host}/api/notes/addnotes`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzYzE2M2NmYTJkZGUzNGZjYmU5ZGI5In0sImlhdCI6MTY0ODEwNzgyMH0.x3qViP4WFncBupDpEXfoGBxelbAAgPkpEGEGNmnvK4U",
        },

        body: JSON.stringify({ title, descreption, tag }),
      });
      response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNote = async (id) => {
    try {
      console.log(id);
      const url = `${host}/api/notes//deletenotes/${id}`;
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzYzE2M2NmYTJkZGUzNGZjYmU5ZGI5In0sImlhdCI6MTY0ODEwNzgyMH0.x3qViP4WFncBupDpEXfoGBxelbAAgPkpEGEGNmnvK4U",
        },
      });
      response.json();
    } catch (error) {
      console.log(error);
    }
  };
  //Delte note
  const editNote = async (id, title, descreption, tag) => {
    try {
      const url = `${host}/api/notes//updatenotes/${id}`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzYzE2M2NmYTJkZGUzNGZjYmU5ZGI5In0sImlhdCI6MTY0ODEwNzgyMH0.x3qViP4WFncBupDpEXfoGBxelbAAgPkpEGEGNmnvK4U",
        },

        body: JSON.stringify({ title, descreption, tag }),
      });
      response.json();

      for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if (element._id === id) {
          element.title = title;
          element.descreption = descreption;
          element.tag = tag;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  //Edit Note

  return (
    <NotesContext.Provider
      value={{ state, addNote, editNote, deleteNote, getNote }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesState;
