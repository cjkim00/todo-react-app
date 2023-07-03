import React from 'react'

export default function Header(props) {
    function buttonPressed() {
        const tempData = {name : "test element",  description: "This is a test element"}
         //props.data.push({name : "test element",  description: "This is a test element"})
         
         props.setData(data => {
            return [...data, tempData]
            }
            
         )
         
    }

    return (
        <div className="header--div">
            <button type="button" onClick={buttonPressed}>Test Button</button>
        </div>
    )
}