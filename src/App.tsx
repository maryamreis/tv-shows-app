import react, { useEffect } from "react";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import "./App.css";
import { useState } from "react";

function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    async function getEpisodes() {
      const response = await fetch("https://api.tvmaze.com/shows/49/episodes");
      const data = await response.json();
      setEpisodes(data);
      console.log("test");
    }
    getEpisodes();
  }, []);

  return (
    <div>
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <MainContent searchTerm={searchTerm} episodes={episodes}/>
      <Footer />
    </div>
  );
}

export default App;
