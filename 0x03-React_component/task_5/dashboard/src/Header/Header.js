import React from 'react';
import './Header.css';
import logo from '../assets/holberton-logo.jpg';


function App() {
  return (
    <>
      <header className='App-header'>
        <img src={logo} alt='logo' />
        <h1>School dashboard</h1>
      </header>
    </>
  );
}

export default App;