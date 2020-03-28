import React from 'react';
import Header from "./components/header";
import Dish from "./components/dish";
import './styles/App.css';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Dish></Dish>
    </div>
  );
}

export default App;
