import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.Component{
  render() {
    const {type, html, value, markAsRead, id} = this.props
    return (
      <>
       {value? <li data-notification-type={type} onClick={() => markAsRead(id)} >{value}</li>: null}
       {html? <li data-urgent dangerouslySetInnerHTML={{__html: html}} onClick={() => markAsRead(id)}></li>: null}
      </>
    )
  }


}

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {
    console.log('Marking as read');
  },
  id: 0
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string,}),
  markAsRead:PropTypes.func,
  id: PropTypes.number
};


export default NotificationItem;
