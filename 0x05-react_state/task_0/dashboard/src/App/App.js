import React from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import BodySection from '../BodySection/BodySection.js';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.js';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { displayDrawer: false }

    this.handleKeyboardPress = this.handleKeyboardPress.bind(this);
    this,handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];
  
  listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
  ];

  handleKeyboardPress = (e) => {
    const { logOut } = this.props;
    if (e.ctrlKey && e.key == 'h') {
      alert('Logging you out');
      logOut();
    }
  }

  handleDisplayDrawer() {
    this.setState({ 
      displayDrawer: true
    });
  }

  handleHideDrawer() {
    this.handleHideDrawer({
      displayDrawer: false
    });
  }

  /*eventlistners on mounting */
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyboardPress);
  }

  /* when unmounting */
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyboardPress);
  }
    
  render() {
    const { isLoggedIn, logOut } = this.props;
    const { displayDrawer } = this.state;
    return (
      <>
      <Notifications 
        listNotifications={this.listNotifications }
        displayDrawer={displayDrawer}
        handleDisplayDrawer={this.handleDisplayDrawer}
        handleHideDrawer={this.handleHideDrawer}
        />
      <div className={css(styles.app)}>
        <Header />
      </div>
      <div className={css(styles.body)}>
        {isLoggedIn ? (
          <BodySectionWithMarginBottom title='Course list'>
            <CourseList listCourses={this.listCourses} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title='Log in to continue'>
            <Login />
          </BodySectionWithMarginBottom>
        )}
        <BodySection title='News from the School'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </BodySection>
        </div>
        <div className={css(styles.footer)}>
          <Footer />
        </div>
     
      </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: true,
  logOut: () => {}
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

const cssVars = {
  mainColor: '#e01d3f'
}

const styles = StyleSheet.create ({
  app: {
    borderBottom: `5px solid ${cssVars.mainColor}`
  },

  body: {
    display: flex,
    justifyContent: 'center'
  },

  footer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    position: 'fixed',
    bottom: 0,
    borderTop: `5px solid ${cssVars.mainColor}`

  },
})

export default App;
