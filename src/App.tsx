import React from "react";
import mapArray from "./episodes.json";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import "./App.css";
import {useState} from "react";


function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("")
  
  return (
    <div>
      <Header />
      <SearchBar 
        setSearchTerm={setSearchTerm}
        />
      <MainContent 
        searchTerm={searchTerm}
        />
      <Footer />
    </div>
  );
}

export default App;
