import React from 'react'

const NAME_MAX_LENGTH = 15
const DESCRIPTION_MAX_LENGTH=25

export default function ListElement(props) {
    function elementClicked() {
        //console.log(props.elementName + " " + props.description)
        props.elementSetState(props.elementName)
        props.descriptionSetState(props.description)
        props.toBeDeleted(props.index)
        //console.log(props.index)
        props.setShowButtons(true)

    }
    const [elementName, setElementName] = React.useState("")
    return (
        <div className="listElement--div" onClick={elementClicked}>
            {props.elementName.length > 15 ?
             <h3 className="listElement--name">{`${props.elementName.substring(0, NAME_MAX_LENGTH - 3)}...`}</h3> :
             <h3 className="listElement--name">{props.elementName.substring(0, NAME_MAX_LENGTH)}</h3>
            }
            {props.description.length > 25 ? 
             <p className="listElement--description">{`${props.description.substring(0, DESCRIPTION_MAX_LENGTH - 3)}...`}</p> :
             <p className="listElement--description">{props.description.substring(0, DESCRIPTION_MAX_LENGTH)}</p>
            }
        </div>
    )
}