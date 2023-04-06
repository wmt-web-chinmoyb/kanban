import React from "react";
import "./Editable.css";
import { X } from "react-feather";
import { useState } from "react";

const Editable = (props) => {
  const [showEdit,setShowEdit]=useState(false)
  return (
    <div className="editable">
      
      {showEdit ?<form
        className="editable_edit"
        onSubmit={(e) => {
          e.preventDefault();
          if (props.onSubmit) {
            props.onSubmit();
          }
        }}
      >
        <input
          type="text"
          defaultValue={props.text}
          placeholder={props.placeholder}
        />

        <div className="editable_edit_footer">
          <button type="submit">{props.buttonText || "Add"}</button>
          <X onClick={()=>setShowEdit(false)}/>
        </div>
      </form>:<p onClick={()=>setShowEdit(true)}>{props.text || "Add item"}</p>}
      
    </div>
  );
};

export default Editable;
