import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';

class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const { user, logOut } = this.context;
  return (
    <>
      <header className={css(styles.Aheader)}>
        <img src={logo} alt='logo' className={css(styles.headerImg)} />
        <h1 className={css(styles.h1)}>School dashboard</h1>

        {user.isLoggedIn && (
          <p id="logoutSection" className='{css(styles.logout)}'>
            Welcome <b>{`${user.email} `}</b>
            <span onClick={logOut}>
              (logout)
            </span>
          </p> 
        )}
      </header>
    </>
  );
  }
}

const cssVar = {
  mainColor: '#e0344a'
}
const styles = StyleSheet.create({
  Aheader: {
    color: '#e0344a',
    borderBottom:` thick solid ${cssVar}` ,
  },

  headerImg: {
    width: '200px',
    paddingLeft: '20px',
  },

  h1: {
    font: '40px',
    margin: '30px',
    fontFamily:'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS sans-serif'
  },
})

Header.contextType = AppContext;

export default Header;