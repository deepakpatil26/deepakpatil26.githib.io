import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import GitHubStats from "./components/GitHubStats";

function App() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <GitHubStats />
        <Contact />
      </main>
    </div>
  );
}

export default App;
