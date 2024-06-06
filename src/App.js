import React from "react";
import About from "./about";
import ContactUs from "./contact";
import Home from "./home";
let defaultPage = "contacfds";
const App = () => {
  return (
    <div>
      {/* {defaultPage === "home" && <Home />}
      {defaultPage === "about" && <About />}
      {defaultPage === "contact" && <ContactUs />} */}

      {defaultPage === "home" ? (
        <Home />
      ) : defaultPage === "about" ? (
        <About />
      ) : defaultPage === "contact" ? (
        <ContactUs />
      ) : <h1>Page not found!</h1>}
    </div>
  );
};
export default App;
