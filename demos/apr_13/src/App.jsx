import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = React.useState(0);

  const [name, setName] = React.useState("");

  const [heroes, setHeroes] = React.useState(["Mario", "Link", "Samus"]);

  const handleAdd = () => {
    const trimmed = name.trim();
    if (trimmed === "") return;
    setHeroes([...heroes, trimmed]);
    setName("");
  };

  const handleKeyDown = (e) => {};

  const handleDelete = (indexToRemove) => {
    setHeroes(heroes.filter((_, i) => i != indexToRemove));
  };

  return (
    <div className="app">
      <h1>React useState Demo</h1>
      <p className="subtitle">Counter, controlled input, array state, .map(), delete</p>

      {/* Part 1: Counter */}
      <div className="counter">
        <button clasName="btn-secondary" onClick={() => setCount(count - 1)}>
          -
        </button>

        <span>{count}</span>

        <button clasName="btn-primary" onClick={() => setCounter(count + 1)}>
          +
        </button>

        <button clasName="btn-secondary" onClick={() => setCount(0)}>
          Resest
        </button>
      </div>

      {/* Part 2: Counter */}



    </div>
  )
}

export default App
