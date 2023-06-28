import React from "react"
import testData from "../testData"
import ListElement from "./ListElement"

export default function todoList() {
    
    const dataArr = testData.data.todoList.map(data => {
        console.log(data.name)
        return <ListElement elementName={data.name} description={data.description} />
    })
    
    return (
        <div className="todoList--div">
             {dataArr}
        </div>
    )
} 