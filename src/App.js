import react, { useState } from "react";
import "./App.scss";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [superpower, setSuperpower] = useState("");
  const [showData, setShowData] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "name") nameChange(e);
    if (e.target.name === "age") ageChange(e);
    if (e.target.name === "height") heightChange(e);
    if (e.target.name === "superpower") superpowerChange(e);
  };
  const nameChange = (e) => {
    setName(e.target.value);
  };
  const ageChange = (e) => {
    setAge(e.target.value);
  };
  const heightChange = (e) => {
    setHeight(e.target.value);
  };
  const superpowerChange = (e) => {
    setSuperpower(e.target.value);
  };
  return (
    <>
      <div className="App">
        <h1>Build a Hero</h1>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        ></input>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={age}
          onChange={handleChange}
        ></input>
        <label>height:</label>
        <input
          type="number"
          name="height"
          value={height}
          onChange={handleChange}
        ></input>
        <label>Superpower:</label>
        <input
          type="text"
          name="superpower"
          value={superpower}
          onChange={handleChange}
        ></input>
        <button onClick={() => setShowData(!showData)}>Hero</button>
      </div>
      {showData && (
        <>
          <div>Name: {name}</div>
          <div>Age: {age}</div>
          <div>Height: {height}</div>
          <div>SuperPower: {superpower}</div>
        </>
      )}
    </>
  );
}

export default App;
