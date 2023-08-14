import React from 'react';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


class Notifications extends React.Component{
  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this)
  }

  markAsRead (id) {
    console.log(`Notification ${id} has been marked as red`);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.listNotifications.length > this.props.listNotifications.length) {
      return true;
    }
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    const menuPStyle = css(
      displayDrawer ? styles.menuItemPNoShow : styles.menuItemPShow
    );

    return (
      <>
      { displayDrawer ?
      (
        <>
        <div className={css(styles.menuItem)} id='menuItem'>
          <p className={menuPStyle}>Your notifications</p>
        </div>
         <div className={css(styles.nots)}>
           <button
            type='button'
            aria-label='Close'
            onClick={() => console.log('Close button has been clicked')}
            style={{
              display: 'inline-block',
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 0,
              border: 0,
              outline: 'none',
              cursor: 'pointer',
            }}
            >
              <img src={close_icon} alt='' style={{ width: '8px', height: '8px' }} />
           </button>
           <p className={css(styles.np)}>Here is the list of notifications</p>
          <ul className={css(styles.list)}>
          {listNotifications === 0 ? (
              <NotificationItem value="No new notification for now"/>
            ) :

            listNotifications.map((item) => (
            <NotificationItem 
              key={item.id}
              type={item.type}
              value={item.value}
              html={item.html}
              markAsRead={this.markAsRead}
              />
              )
            )}
          </ul>
        </div>
        </>
        )  : (
          <div className={css(styles.menuItem)}>
            <p className={css(styles.np)}>Your notifications</p>
          </div>
       
        )}
      </>
    );
  }
} 


Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

const opacityFrame = {
  from: {
    opacity: 0.5,
  },

  to: {
    opacity: 1,
  }
};

const trnslateY = {
  "0%": {
    transform: 'translateY(0)',
  },

  "50%": {
    transform: 'translateY(-5px)',
  },

  "75%": {
    transform: 'translateY(5px)',
  },

  "100%": {
    transform: 'translateY(0)',
  },
}

const borderFrame = {
  "0%": {
    border: '3p dashed deepSkyBlue',
  },
  "100%": {
    border: '3p dashed #e01d3f',
  },
}

const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const styles = StyleSheet.create ({
    nots : {
      float: "right",  
      padding: '10px',
      marginLeft: '20px',
      marginTop: '20px',
      marginBottom: '30px',
      fontSize: '18px',
      borderStyle: dashed,
      borderColor: 'red',
      top: '10px',
      animationName: [borderFrame],
      animationDuration: '0.8s',
      animationIterationCount: 1,
      animationFillMode: 'forwards',
      ':hover': {
        border: `3px dashed deepSkyBlue`
      },
      [screenSize.small]: {
        float: "none",
        border: "none",
        listStyle: "none",
        padding: 0,
        fontSize: "20px",
        position: "absolute",
        background: "white",
        height: "110vh",
        width: "100vw",
      }
  },

  menuItem: {

    float: 'right',
    backgroundColor:"#fff8f8",
    ':hover': {
      cursor: 'pointer',
      animationName: [opacityFrame, trnslateY],
      animationDuration: "1s, .5s",
      animationIterationCount: 3, 
    },
  },

  menuItemPNoShow: {
    marginRight: "8px",
    display: "none",
  },

  menuItemPShow: {
    marginRight: "8px",
  },

  np: {
    fontSize: '18px',
    fontWeight: '580',
    margin:0,

  },

  list: {
    fontWeight: '600',
    [screenSize.small]: {
      padding: 0,
    }
  }

})

export default Notifications;
