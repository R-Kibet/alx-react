import React from "react";
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite';


export default function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
    return (
    <tr className= {isHeader ? css(styles.header) : css(styles.default)}>
        {isHeader ? (
            textSecondCell === null ? (
                <th colSpan={2}>{textFirstCell}</th>
            ) : (
                <>
                <th style={{backgroundColor: '#deb5b545'}}>{textFirstCell}</th>
                <th style={{backgroundColor: '#deb5b545'}}>{textSecondCell}</th>
                </>
            )
        ) : (
            <>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
            </>
        )}
    </tr>
    )
}

CourseListRow.PropTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
}

const styles = StyleSheet.create({
    default: {
        backgroundColor: '#f5f5f5ab',
    },

    header: {
        backgroundColor: "#deb5b545",
    }
})
