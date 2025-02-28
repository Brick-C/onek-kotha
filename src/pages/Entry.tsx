import React, { useState } from "react";
import "./entry.css";
import { useNavigate } from "react-router-dom";

interface EntryProps {}

interface EntryState {
  ip: string;
  port: string;
  name: string;
}

//Using functional component because hooks(useNavigate) do not work with class componets
const Entry: React.FC<EntryProps> = (props) => {
  const navigate = useNavigate();
  const [state, setState] = useState<EntryState>({
    ip: "localhost",
    port: "9999",
    name: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(state.ip);
    console.log(state.port);
    console.log(state.name);
    navigate("/home");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state, //using spread operator; spreading previous state to not overwrite the other state properties
      [e.target.name]: e.target.value, //dynamically based on input name; example name="ip"/"name"/port in the input field
    });
  };

  return (
    <div className="container">
      <div className="left">
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="ip">IP Address</label>
            <input
              type="text"
              id="ip"
              name="ip"
              value={state.ip}
              onChange={handleChange}
            />
            <label htmlFor="port">Port</label>
            <input
              type="text"
              id="port"
              name="port"
              value={state.port}
              onChange={handleChange}
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={state.name}
              onChange={handleChange}
            />

            {/* do not need to use handleSubmit inside the button as is already
            inside the form control <form> 👆*/}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Entry;
