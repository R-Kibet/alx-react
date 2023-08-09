import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

function App() {
  return (
    <>
      <header className={css(styles.Aheader)}>
        <img src={logo} alt='logo' className={css(styles.headerImg)} />
        <h1 className={css(styles.h1)}>School dashboard</h1>
      </header>
    </>
  );
}
const cssVar = {
  mainColor: '#e0344a'
}
const styles = StyleSheet.create({
  Aheader: {
    display: flex,
    color: '#e0344a',
    alignItems: center,
    borderBottom:` thick solid ${cssVar}` ,
  },

  headerImg: {
    width: '200px',
    paddingLeft: '20px',
  },

  h1: {
    font: '40px',
    margin: '30px',
    alignItems: center,
    fontFamily:'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS sans-serif'
  },
})

export default App;