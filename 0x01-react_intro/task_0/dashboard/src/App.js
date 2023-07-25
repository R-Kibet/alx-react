import logo from './assets/logo.jpg';
import './App.css';

export default function App() {
  return (
    <>
      <header className='App-header'>
        <img src={logo} alt='logo'/>
        <h1>School dashboard</h1>
      </header>

      <main className='App-body' role="main">
        <p>Login to access the full dashboard</p>
      </main>

      <footer className='App-footer'>
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </>
  )
}