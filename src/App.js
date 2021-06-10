import React from "react";
import Home from "./components/home.js";
import Offer from "./components/offer.js";
import Skills from "./components/skills.js";
import Keypoint from "./components/keypoint.js";
import Registration from "./components/registration";
import Footer from "./components/footer.js";

function App() {
  return (
    <div>
      <Home></Home>
      <Offer></Offer>
      <Skills></Skills>
      <Keypoint></Keypoint>
      <Registration></Registration>
      <Footer></Footer>
    </div>
  );
}

export default App;
