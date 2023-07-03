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
         //props.data.push({name : "test element",  description: "This is a test element"})
         
         props.setData(data => {
            return [...data, tempData]
            }
            
         )
         
    }

    function handleChange(event) {
        event.preventDefault(inputData)
        //console.log(inputData)
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
            />

            <input 
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
