import React from "react";

export const Alert = ({ mesg }) => {
  return (
    <div className="alert alert-primary" role="alert">
      {mesg}
    </div>
  );
};
