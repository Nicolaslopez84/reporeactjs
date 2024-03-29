import React from "react";

export default function InputForm(props) {
  return (
    <div style={{ display: "flex", marginTop: 10, marginBottom:10, justifyContent:"center" }}>
      <label style={{ width: "100px", marginRight: 4 }}>{props.title}</label>
      <input
        value={props.value}
        required={props.required}
        name={props.name}
        type="text"
        onChange={props.onChange}
      />
    </div>
  );
}