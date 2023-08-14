import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


class BodySection extends React.Component{
    constructor(props){
        super(props)
    }

    render () {
        const { children, title} = this.props;
        return (
            <div className={css(styles.bodySection)}>
                <h2 className= {css(styles.h2)}> {title} </h2>
                    { children }
            </div>
        )
    }
}

BodySection.defaultProps = {
  title: '',
}

BodySection.prototypes = {
    title: PropTypes.string,
}

const styles = StyleSheet.create ({

    bodySection: {
        width: '100%',
        marginTop: '30px',
        display: flex,
        flexWrap: wrap,
    },

    h2: {
        width: '100%'
    }
})

export default BodySection;
