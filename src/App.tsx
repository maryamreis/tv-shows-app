import React from "react";
import mapArray from "./episodes.json";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Header from "./components/Header"
import "./App.css"

function App(): JSX.Element {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
