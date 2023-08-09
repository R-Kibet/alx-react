import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function App() {
  return (
    <>
      <main role='main' className={css(styles.Abody)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' className={css(styles.inpt)}/>
        <label className={css(styles.lbl)} htmlFor='password'>Password</label>
        <input type='password' id='password' className={css(styles.inpt)} />
        <button className={css(styles.btn)} type='button'>OK</button>
      </main>
    </>
  );
}

/* responsive to screen size */
const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const styles =  StyleSheet.create({
  Abody: {
    margin: '50px',
    paddingTop: '3rem',
    fontSize: '20px',
    [screenSize.small]: {
      marginTop: '10px',
      marginLeft: 0,
      marginRight: 0,
      marginBottom:0,
    }

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

  inpt: {
    marginLeft: "10px",
    marginRight: "20px",
    [screenSize.small]: {
      display: "block",
      marginLeft: 0,
      marginTop: "10px",
      marginBottom: "10px",
    }
  },

})

export default App;