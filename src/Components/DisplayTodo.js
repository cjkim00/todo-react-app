import React from "react"

export default function DisplayTodo(props) {

    function deleteElement() {
        props.setData(data => {
            data.splice(props.toBeDeleted, 1)
            props.deleteState ? props.setDataState(data) : props.setCompletedState(data)
            return [...data]
        })
        props.setShowButtons(false)
    }

    function completeTask() {
        //need to delete the selected task from the to do list
        //add the deleted task into the completed array (add to front)
        props.setData(data => {
            const temp = {name: data[props.toBeDeleted].name, 
                          description: data[props.toBeDeleted].description}

            data.splice(props.toBeDeleted, 1)
            
            props.setCompletedState(data => {
                console.log(data)
                return [temp, ...data]
            })

            return [...data]
        })

        props.setShowButtons(false)
        
    }


    return (
        <div className="displayTodo--div">
            {props.showButtons ? 
                <p className="displayTodo--display--name">{props.eleName}</p> :
                <p className="displayTodo--display--name"></p>
            }
            {props.showButtons ? 
                <textarea type="text" 
                 className="displayTodo--display--discription"
                 value={props.descriptionName} 
                 readOnly
                /> :
                <textarea type="text"
                 className="displayTodo--display--discription"
                 value={""} 
                 readOnly 
                />
            }
            <div className="displayTodo--button--div">
                {props.showButtons && 
                    <button onClick={deleteElement} className="displayTodo--delete--button">Delete</button>}
                    
                {(props.showButtons && props.deleteState === 1) &&
                    <button onClick={completeTask} className="displayTodo--completed--button">Complete</button>}
            </div>
        </div>
    )
}