import React, { useState } from "react";
import "../App.css";

/** item, index */

export const ListItem = (props) => {
  const [value, setValue] = useState(props.item);
  return (
    <div
      style={{ display: "flex", flexDirection: "row", padding: "5px" }}
      key={props.item}
    >
      <input
        type="text"
        value={value}
        style={{ border: "0px", borderBottom: "1px solid black" }}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        style={{ margin: "2px" }}
        onClick={() => {
          props.onUpdate(props.index, value);
        }}
      >
        Save changes
      </button>
      <button
        style={{ margin: "2px" }}
        onClick={() => {
          props.onDelete(props.index);
        }}
      >
        Delete
      </button>
    </div>
  );
};
