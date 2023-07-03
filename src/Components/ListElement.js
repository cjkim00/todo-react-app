import React from 'react'

export default function ListElement(props) {
    function elementClicked() {
        console.log(props.elementName + " " + props.description)
        props.elementSetState(props.elementName)
        props.descriptionSetState(props.description)
    }
    const [elementName, setElementName] = React.useState("")
    return (
        <div className="listElements--main">
            <div className="listElement--div" onClick={elementClicked}>
                <h3 className="listElement--name">Todo: {props.elementName}</h3>
                <p className="listElement--description">{props.description}</p>
            </div>
        </div>
    )
}