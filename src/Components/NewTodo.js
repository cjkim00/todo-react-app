import React from 'react'

export default function NewTodo(props) {
    const [inputData, setInputData] = React.useState(
        {
            nameText: "",
            description: ""
        }
    )

    function buttonPressed() {
        const tempData = {name : inputData.nameText, description : inputData.description}
        if(tempData.name.length === 0 || tempData.description.length === 0) {
            console.log("length 0")
        } else {
            props.setData(data => {
                const temp = [...data, tempData]
                props.setDataState(temp)
                return temp
                }
            )
            
            setInputData({nameText: "", description: ""})

        }
        
         
         
    }

    function handleChange(event) {
        event.preventDefault(inputData)
        const {name, value, type} = event.target
        setInputData(prevData => {
            return {
                ...prevData,
                [name] : value
            }
        })

    }

    return (
        <div className="newTodo--div">
            <input 
                type="text" 
                className="newTodo--input--name" 
                name="nameText"
                onChange={handleChange}
                value={inputData.nameText}
                maxLength={100}
            />

            <textarea 
                type="text" 
                className="newTodo--input--description" 
                name="description"
                onChange={handleChange}
                value={inputData.description}
            />

            <button className="newTodo--button" onClick={buttonPressed}>Enter</button>
        </div>
    )
}


/*
export defualt function NewTodo(props) {
    return (
        <div>

        </div>
    )
}
*/
