import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
 import "./App.css";
 import Main from "./Main";

const App = ()=>{
     return (
      <> 
        <div
  className="h-screen w-full  bg-center"
  style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/cyberpunk-forest-futuristic-neon-forest-generative-ai-technology_899928-5.jpg')" }}
>
    <div >
         <Navbar/>
          <Main></Main>

          <Footer/>
          </div>
          </div>
          
      </>
     )
}

export default App;