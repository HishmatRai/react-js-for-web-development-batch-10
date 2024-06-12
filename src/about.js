import React, { useState } from "react";

const About = () => {
  let [inputValue, setInputValue] = useState("");
  let [todoList, setTodoList] = useState([]);
  const [messageType, setMessageType] = useState("");
  const addHandler = () => {
    if (inputValue === "") {
      // alert("Type something ....");
      setMessageType("error");
      setTimeout(() => {
        setMessageType("");
      }, 2000);
    } else {
      setMessageType("success");
      let newTodo = [];
      newTodo.push(inputValue);
      console.log(newTodo);
      setTodoList([...todoList, ...newTodo]);
      setInputValue("");
      setTimeout(() => {
        setMessageType("");
      }, 2000);
    }
  };
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
            // alert("Type something ....");
            setMessageType("error");
            setTimeout(() => {
              setMessageType("");
            }, 2000);
          } else {
            let newTodo = [];
            newTodo.push(inputValue);
            console.log(newTodo);
            setTodoList([...todoList, ...newTodo]);
            setInputValue("");
            setMessageType("success");
            setTimeout(() => {
              setMessageType("");
            }, 2000);
          }
        }}
      >
        Add
      </button>
      <button onClick={addHandler}>Add 2</button>
      {/* {messageType !== "" &&
        (messageType === "error" ? (
          <p style={{ color: "red" }}>Type something ...</p>
        ) : (
          <p style={{ color: "green" }}>Success</p>
        ))} */}

      {messageType !== "" && (
        <p style={{ color: messageType === "error" ? "red" : "green" }}>
          {messageType === "error" ? "Type something ..." : "Success"}
        </p>
      )}

      {/* {messageType === "error" ? (
        <p style={{ color: "red" }}>Type something ...</p>
      ) : (
        <p style={{ color: "green" }}>Success</p>
      )} */}
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
