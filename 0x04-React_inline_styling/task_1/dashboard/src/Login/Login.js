import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function App() {
  return (
    <>
      <main role='main' className={css(styles.Abody)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' />
        <label className={css(styles.lbl)} htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' />
        <button className={css(styles.btn)} type='button'>OK</button>
      </main>
    </>
  );
}

const styles =  StyleSheet.create({
  Abody: {
    marginLeft: '50px',
    paddingTop: '3rem',
    fontSize: '20px'

  },

  lbl: {
    padding: '15px',
    fontWeight: '500',
  },

  btn: {
    marginLeft: '10px',
    backgroundColor: 'white',
    borderRadius: '5px',
  },
})

export default App;