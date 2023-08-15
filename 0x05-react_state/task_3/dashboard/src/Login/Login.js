import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      passwword:'',
      enableSubmit: false,
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);

  }

  handleLoginSubmit(event) {
   event.preventDefault();
   const { logIn } = this.props;
   logIn();
  }

  handleChangeEmail(event) {
   const { value } = event.target;
   const { password } = this.state;

   if (value !== '' && password !== '') this.setState({ enableSubmit: true });
   else this,this.setState({ enableSubmit: false });

   this.setState({ email: event.target.value });
  }

  handleChangePassword(event) {
   const { value } = event.target;
   const { email } = this.state;

   if (email !== '' && value !== '') this.state({ enableSubmit: true });
   else this.setState({ enableSubmit: false });

   this.setState({ password: event.target.value });

  }
  render(){
    return (
      <>
      <div role='main' className={css(styles.Abody)}>
          <p>Login to access the full dashboard</p>
          <form action='' onSubmit={this.handleLoginSubmit}>
           <label htmlFor='email'>Email</label>
           <input 
             type='email' 
             id='email' 
             className={css(styles.inpt)}
             value={this.state.email}
             onChange={this.handleChangeEmail}
             />
           <label className={css(styles.lbl)} htmlFor='password'>Password</label>
           <input 
             type='password' 
             id='password' 
             className={css(styles.inpt)} 
             value={this.state.password}
             onChange={this.handleChangePassword}
             />
           <input type='submit' disabled={!this.state.enableSubmit}></input>
          </form>
      </div>
    </>
  )};
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

export default Login;