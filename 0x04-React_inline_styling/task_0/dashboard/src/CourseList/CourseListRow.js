import React from "react";
import PropTypes from 'prop-types'

const bkgH = {backgroundColor: '#f5f5f5ab'};
const bkgR = {backgroundColor: '#deb5b545'}

export default function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
    return (
    <tr style={bkgH}>
        {isHeader ? (
            textSecondCell === null ? (
                <th colSpan={2}>{textFirstCell}</th>
            ) : (
                <>
                <th style={bkgR}>{textFirstCell}</th>
                <th style={bkgR}>{textSecondCell}</th>
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
