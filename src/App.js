// import React ,{useState} from "react";
// import About from "./about";
// import ContactUs from "./contact";
// import Home from "./home";
// import "./App.css";
// const App = () => {
//   let [defaultPage, setDefaultPage] = useState("home");
//   const Pages = ["Home", "About", "Contact", "Gallery"];
//   return (
//     <div>
//       <div>
//         <button
//           style={{
//             backgroundColor: defaultPage === "home" ? "green" : "blue",
//           }}
//           onClick={() => setDefaultPage("home")}
//         >
//           Home
//         </button>
//         <button
//           style={{
//             backgroundColor: defaultPage === "about" ? "green" : "blue",
//           }}
//           onClick={() => setDefaultPage("about")}
//         >
//           About
//         </button>
//         <button
//           style={{
//             backgroundColor: defaultPage === "contact" ? "green" : "blue",
//           }}
//           onClick={() => setDefaultPage("contact")}
//         >
//           Contact
//         </button>
//       </div>
//       <hr />
//       <div>
//         <button
//           className={defaultPage === "home" ? "active-button" : "button"}
//           onClick={() => setDefaultPage("home")}
//         >
//           Home
//         </button>
//         <button
//           className={defaultPage === "about" ? "active-button" : "button"}
//           onClick={() => setDefaultPage("about")}
//         >
//           About
//         </button>
//         <button
//           className={defaultPage === "contact" ? "active-button" : "button"}
//           onClick={() => setDefaultPage("contact")}
//         >
//           Contact
//         </button>
//       </div>
//       <hr />
//       <hr />
//       {Pages.map((value, index) => {
//         return (
//           <button
//           key={index}
//             className={
//               defaultPage === value.toLowerCase() ? "active-button" : "button"
//             }
//             // style={{ backgroundColor: defaultPage === value.toLowerCase() ? "green" : "blue",}}
//             onClick={() => {
//               setDefaultPage(value.toLowerCase());
//             }}
//             disabled={defaultPage === value.toLowerCase() ? true : false}
//           >
//             {value}
//           </button>
//         );
//       })}
//       {/* {defaultPage === "home" && <Home />}
//       {defaultPage === "about" && <About />}
//       {defaultPage === "contact" && <ContactUs />} */}

//       {defaultPage === "home" ? (
//         <Home />
//       ) : defaultPage === "about" ? (
//         <About />
//       ) : defaultPage === "contact" ? (
//         <ContactUs />
//       ) : (
//         <h1>Page not found!</h1>
//       )}
//     </div>
//   );
// };
// export default App;

import React from "react";
import RouteNavigation from "./router";
const App = () => {
  return <RouteNavigation />;
};
export default App;
