import React from 'react';
import './Notifications.css';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

class Notifications extends React.Component{
  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this)
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as red`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <>
      { displayDrawer ?
      (
        <>
        <div className='menuItem'>
          <p>Your notifications</p>
        </div>
         <div className='Notifications'>
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
           <p>Here is the list of notifications</p>
          <ul>
          {
            listNotifications === 0 ? (
              <NotificationItem value="No new notification for now"/>
            ) :

            listNotifications.map((item) => ((<NotificationItem 
              key={ClipboardItem.id}
              type={ClipboardItem.type}
              value={ClipboardItem.value}
              html={ClipboardItem.html}
              markAsRead={this.markAsRead}
              />
              ))
            )}
          </ul>
        </div>
        </>
        )  : (
          <div className="menuItem">
            <p>Your notifications</p>
          </div>
       
        )}
      </>
    );
  }
} 


Notifications.defaultProps = {
  displayDrawer: false,
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};


export default Notifications;