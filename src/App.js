import { useState, useEffect } from "react";
import Header from "./compenents/Header/Header";
import Bgtoggler from "./compenents/bgtoggler/Bgtoggler";
import Home from "./compenents/Home/Home";
import Footer from "./compenents/Footer/Footer";
function App() {

  

  return (
    <div className="App">
      <div className="">
        <Header />
        <Bgtoggler />
        <Home />
        <Footer />
    </div>
    </div>
  );
}

export default App;
