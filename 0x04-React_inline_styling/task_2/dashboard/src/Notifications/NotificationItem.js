import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const {type, html, value, markAsRead, id} = this.props
    return (
      <>
       {value? 
       <li className={type === 'default'? css(styles.default) : css(styles.urgent)}
       data-notification-type={type} onClick={() => markAsRead(id)} >{value}</li>: null}
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
  id: 0,
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string,}),
  markAsRead:PropTypes.func,
  id: PropTypes.number
};

const styles = StyleSheet.create({

  default: {
    color: 'blue',
  },

  urgent: {
    color: '#e0354b'
  }
})


export default NotificationItem;
