import { useState, useEffect } from "react";
import './App.css'
import { searchAmiibo } from "./api";
import { readFromLocalStorage, writeToLocalStorage } from "./storage";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { AmiiboList } from "./AmiiboList";
import { AmiiboSearchUI } from "./AmiiboSearchUI";

const App = () => {
  const savedTerm = readFromLocalStorage("term") || "";
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    writeToLocalStorage("term", term);
  });

  return <>
    <Header title="Amiibo Finder" />
    <hr />
    <main>
      <AmiiboSearchUI
        term={term}
        setTerm={setTerm}
        searchAmiibo={searchAmiibo}
        setResults={setResults}
      />
      <AmiiboList results={results} />
    </main>
    <hr />
    <Footer
      name="Ace Coder"
      year={new Date().getFullYear()}
    />
  </>;
};

export default App;