import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "../App.css";

const Home = () => {
  return (
    <header className="home text-white flex flex-col items-center justify-center h-screen text-center md:text-left">
      <div className="content">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4">
          <h2 className="text-4xl md:text-6xl font-bold">Hi, I'm</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-yellow-500">
            <Typewriter
              words={["Jabin Jabez"]}
              typeSpeed={100}
              deleteSpeed={50}
              cursor
              cursorStyle="_"
            />
          </h3>
        </div>
        <h4 className="font-bold text-base md:text-lg mt-3">
          Crafting modern, responsive, and dynamic web experiences with precision.
        </h4>
      </div>
    </header>
  );
};

export default Home;
