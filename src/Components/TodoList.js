import React from "react"
import testData from "../testData"
import ListElement from "./ListElement"
import DisplayTodo from "./DisplayTodo"

export default function TodoList(props) {
    const [eleName, setElementName] = React.useState("")
    const [descriptionName, setDescriptionName] = React.useState("")
    const [toBeDeleted, setToBeDeleted] = React.useState(-1)
    const [showButtons, setShowButtons] = React.useState(false)
    
    
    const dataArr = props.data.map(data => {
        return <ListElement 
                    key={data.id}
                    elementName={data.name} 
                    description={data.description} 
                    elementSetState={setElementName}
                    descriptionSetState={setDescriptionName}
                    toBeDeleted={setToBeDeleted}
                    index={props.data.indexOf(data)}
                    showButtons={showButtons}
                    setShowButtons={setShowButtons}
                    deleteState={props.deleteState}
                    />
    })

    function onToDoButtonPressed() { 
        props.setData(props.toDoData)
        props.setDeleteState(1)
        if(props.deleteState !== 1) {
            setShowButtons(false)
        }
    }
    
    function onCompletedButtonPressed() {
        props.setData(props.completedData)
        props.setDeleteState(0)
        if(props.deleteState !== 0) {
            setShowButtons(false)
        }
    }

    return (
 
        <div className="todoList--box">
            <div className="todoList--div">
                <div className="todoList--button--div">
                    <button className="todoList--toDoButton" onClick={onToDoButtonPressed}>Tasks</button>
                    <button className="todoList--completedButton" onClick={onCompletedButtonPressed}>Completed</button>
                </div>
                {props.deleteState ? props.data.length === 0 && <h3 className="todoList--add--task">Add a task</h3> : 
                                     props.data.length === 0 && <h3 className="todoList--add--task">No completed tasks</h3>}
                {dataArr}
            </div>

            
            
            <DisplayTodo 
                setData={props.setData}
                toBeDeleted={toBeDeleted}
                eleName={eleName}
                descriptionName={descriptionName}
                deleteState={props.deleteState}
                setDataState={props.setDataState}
                completedState={props.completedState}
                setCompletedState={props.setCompletedState}
                showButtons={showButtons}
                setShowButtons={setShowButtons}
            />
        </div>

        
        
    )
} 