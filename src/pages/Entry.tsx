import React, { JSX, useState } from "react";

function EntryForm(): JSX.Element {
  const [inputValues, setInputValues] = useState({
    ip: "",
    port: "",
    name: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    alert(
      `Input 1: ${inputValues.ip}\nInput 2: ${inputValues.port}\nInput 3: ${inputValues.name}`
    );
  };

  return (
    <div className="mb-3">
      <h1>Input Form</h1>
      <input
        type="text"
        className="form-control"
        name="ip address"
        value={inputValues.ip}
        onChange={handleChange}
        placeholder="localhost"
      />
      <br />
      <input
        type="text"
        className="form-control"
        name="port"
        value={inputValues.port}
        onChange={handleChange}
        placeholder="9999"
      />
      <br />
      <input
        type="text"
        className="form-control"
        name="Name"
        value={inputValues.name}
        onChange={handleChange}
        placeholder="User"
      />
      <br />
      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default EntryForm;
