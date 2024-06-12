import React, { useState } from "react";
import "./contact.css";
const ContactUs = () => {
  const [pages, setPages] = useState([
    {
      title: "Home",
      selected: false,
    },
    {
      title: "About",
      selected: false,
    },
    {
      title: "Contact",
      selected: false,
    },
    {
      title: "Gallery",
      selected: false,
    },
  ]);
  const List = [
    {
      title: "A",
      bgColor: "red",
      borderColor: "blue",
      borderRadius: "10px",
    },
    {
      title: "B",
      bgColor: "green",
      borderColor: "yellow",
      borderRadius: "5px",
    },
    {
      title: "C",
      bgColor: "blue",
      borderColor: "red",
      borderRadius: "20px",
    },
    {
      title: "D",
      bgColor: "yellow",
      borderColor: "green",
      borderRadius: "1px",
    },
  ];
  return (
    <div>
      <h1>Contact us Page</h1>
      <ul>
        {List.map((val, index) => {
          return (
            <li
              key={index}
              style={{
                backgroundColor: val.bgColor,
                // border: "5px solid",
                // borderColor: val.borderColor,

                border: `5px solid ${val.borderColor}`,
                borderRadius: val.borderRadius,
              }}
            >
              {val.title}
            </li>
          );
        })}
      </ul>
      <hr />
      <hr />
      <hr />
      <hr />
      {pages.map((val, index) => {
        return (
          <button
            key={index}
            onClick={()=> {
                pages[index].selected = !pages[index].selected;
                setPages([...pages])
            }}
            className={
              val.selected  ? "contact-active-button" : "contact-button"
            }
          >
            {val.title}
          </button>
        );
      })}
    </div>
  );
};
export default ContactUs;
