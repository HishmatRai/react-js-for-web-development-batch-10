import React, { useState } from "react";
const About = () => {
  let [inputValue, setInputValue] = useState("");
  let [todoList, setTodoList] = useState([]);
  return (
    <div>
      <h1>About Page</h1>
      <input
        type="text"
        placeholder="Type ... "
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          if (inputValue === "") {
            alert("Type something ....");
          } else {
            let newTodo = [];
            newTodo.push(inputValue);
            console.log(newTodo);
            setTodoList([...todoList, ...newTodo]);
            setInputValue("");
          }
        }}
      >
        Add
      </button>

      {todoList.length === 0 ? (
        <p>Data not found!</p>
      ) : (
        <ul>
          {todoList
            .map((val, index) => {
              return <li key={index}>{val}</li>;
            })
            .reverse()}
        </ul>
      )}
    </div>
  );
};
export default About;
