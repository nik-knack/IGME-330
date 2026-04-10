import { useState } from "react";
import './App.css'

// app "globals" and utils
const baseurl = "https://www.amiiboapi.org/api/amiibo/?name=";


const loadXHR = (url, callback) => {
  // create new XHR object
  let xhr = new XMLHttpRequest;
  
  // set up what happens when the request finishes
  xhr.onload = (e) => {
    // only call callback if request was successful
    if (xhr.status === 200) {
      callback(xhr);
    } else {
      console.error("Request failed:", xhr.status);
    }
  };
  
  // handle network errors
  xhr.onerror = () => {
    console.error("Network error");
  };
  
  // open connection and send the request
  xhr.open("GET", baseurl);
  xhr.send();
};

const searchAmiibo = (name, callback) => {
  loadXHR(`${baseurl}${name}`, callback);
};

const parseAmiiboResult = (xhr) => {
  // get the `.responseText` string
  let text = xhr.resonseText;

  // declare a json variable
  let json;

  // try to parse the string into a json object
  try {
    json = JSON.parse(text);
  } catch (err) {
    //console.error("Error parsing JSON:", err);
    return;
  }

  // log out number of results (length of `json.amiibo`)
  console.log(`Number of results=${json.amiibo.length}`);
  
  // loop through `json.amiibo` and log out the character name
  json.amiibo.forEach((item) => {
    console.log(item.character);
  });
};

// call searchAmiibo() with "mario" and our callback function
searchAmiibo("mario", parseAmiiboResult); // DONE

const App = () => {
  return <>
    <header>
      <h1>Amiibo Finder</h1>
    </header>
    <hr />
    <main>
      <button>Search</button>
      <label>
        Name: 
        <input />
      </label>
    </main>
    <hr />
    <footer>
      <p>&copy; 2023 Ace Coder</p>
    </footer>
  </>;
};

export default App;