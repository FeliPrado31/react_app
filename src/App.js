import React from 'react';
import Header from "./components/pages/header";
import Dish from "./components/pages/dish";
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
