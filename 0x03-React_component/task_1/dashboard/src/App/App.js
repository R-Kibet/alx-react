import React from 'react';
import  Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';


class App extends React.Component{
  constructor(props) {
    super(props);

    this.handleKeyboardPress = this.handleKeyboardPress.bind(this);
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
    const { logout } = this.props;
    if (e.ctrlKey && e.key == 'h') {
      alert('Logging you out');
      logout();
    }
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
    const { isLoggedIn } = this.props;
    return (
      <>
      <Notifications listNotifications={this.listNotifications} />
      <div className='App'>
        <Header />
        {isLoggedIn ? <CourseList  listCourses={this.listCourses }/> :  <Login />}
        <Footer />
      </div>
     
      </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: true,
  logout: () => {}
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logout: PropTypes.func
};

export default App;