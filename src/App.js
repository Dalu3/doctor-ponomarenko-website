import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Services from "./components/Services";
import "./styles/header.css"
import "./styles/main.css"
import "./styles/about.css"
import "./styles/experience.css"
import "./styles/footer.css"
import "./styles/services.css"

function App(){
 return(
   <div>
    <Header />
    <Main />
    <About />
    <Services />
  </div>
  )
}

export default App;