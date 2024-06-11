import React, { useState } from "react";
const Home = () => {
  let [name, setName] = useState("iHunar");
  console.log("Name:- ", name);
  return (
    <div>
      <h1>Home Page</h1>
      <h1>Name: - {name}</h1>
      <input
        type="text"
        placeholder="Type ...."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name === "" && <p style={{ color: "red" }}>Error</p>}
    </div>
  );
};
export default Home;
