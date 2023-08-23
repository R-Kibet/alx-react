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

const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const styles = StyleSheet.create({

  default: {
    color: 'blue',
    [screenSize.small]: {
      listStyle: "none",
      borderBottom: "1px solid black",
      padding: "10px 8px",
      fontSize: "20px",
    }
  },

  urgent: {
    color: '#e0354b',
    [screenSize.small]: {
      listStyle: "none",
      borderBottom: "1px solid black",
      padding: "10px 8px",
      fontSize: "20px",
    }
  }
})


export default NotificationItem;
