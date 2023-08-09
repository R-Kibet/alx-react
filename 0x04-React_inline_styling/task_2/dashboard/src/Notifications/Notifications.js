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

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.listNotifications.length > this.props.listNotifications.length) {
      return true;
    }
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <>
      { displayDrawer ?
      (
        <>
        <div className={css(styles.menuItem)} id='menuItem'>
          <p className={css(styles.np)}>Your notifications</p>
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

            listNotifications.map((item) => ((<NotificationItem 
              key={item.id}
              type={item.type}
              value={item.value}
              html={item.html}
              markAsRead={this.markAsRead}
              />
              ))
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
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

const styles = StyleSheet.create ({
    nots : {
    border: '4px',   
    padding: '10px',
    marginLeft: '20px',
    marginTop: '20px',
    marginBottom: '30px',
    fontSize: '18px',
    borderStyle: dashed,
    borderColor: 'red',
    top: '10px',
  },

  menuItem: {
    textAlign: 'right',
  },

  np: {
    fontSize: '18px',
    fontWeight: '580',
  },

  list: {
    fontWeight: '600',
  }

})

export default Notifications;
