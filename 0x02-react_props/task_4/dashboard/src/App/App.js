import React from 'react';
import  Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';

function App({isLoggedIn}) {
  let dar = undefined;
  isLoggedIn ? (dar = <CourseList />) : (dar = <Login />);
  return (
    <>
    <Notifications />
    <Header />
    {dar}
    <Footer />
    </>
  );
}

App.defaultProps = {
  isLoggedIn: true,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;