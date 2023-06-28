import React from 'react'

export default function ListElement(props) {
    return (
        <div className="listElement--div">
            <p>{props.elementName}</p>
            <p>{props.description}</p>
        </div>
    )
}