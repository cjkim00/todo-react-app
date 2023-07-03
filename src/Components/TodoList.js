import React from "react"
import testData from "../testData"
import ListElement from "./ListElement"

export default function TodoList(props) {
    const [eleName, setElementName] = React.useState("")
    const [descriptionName, setDescriptionName] = React.useState("")
    
    const dataArr = props.data.map(data => {

        return <ListElement 
                    elementName={data.name} 
                    description={data.description} 
                    elementSetState={setElementName}
                    descriptionSetState={setDescriptionName}
                    />
    })

    return (
        <div className="todoList--box">
            <div className="todoList--div">
                {dataArr}
            </div>

            <div className="todoList--second">
                <h3>{eleName}</h3>
                <h3>{descriptionName}</h3>
            </div>
        </div>
        
    )
} 