import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';


class BodySectionWithMarginBottom extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
        <div className={css(styles.bodySect)}>
            <BodySection {...this.props }/>
        </div>
    )
  }
}

BodySectionWithMarginBottom.defaultProps = {
    title: '',
}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string,
}

const styles =  StyleSheet.create ({
  bodySect: {
    marginBottom: '40px',
    width: '100%',
  }
})

export default BodySectionWithMarginBottom;