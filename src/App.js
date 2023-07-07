import React from 'react'
import Header from './Components/Header'
import TodoList from './Components/TodoList'
import testData from './testData'
import NewTodo from './Components/NewTodo'

function App() {
  const completedArr = testData.completedData.completed.map(data => data)
  const dataArr = testData.data.todoList.map(data => data)

  const[completedState, setCompletedState] = React.useState(completedArr)
  const[dataState, setDataState] = React.useState(dataArr)

  const[deleteState, setDeleteState] = React.useState(1)
  
  const [data, setData] = React.useState(dataState)

  /**
   * To combine the 2 arrays set the data state to contain the two arrays
   * const[temp, setTemp] = React.useState({completedArr, dataArr})
   * 
   */
 
  return (
    <div className="app--div">
      <div className="app--todo--container">
        <TodoList 
          toDoData={dataState}
          completedData={completedState}
          data={data}
          setData={setData}
          setDataState={setDataState}
          completedState={completedState}
          setCompletedState={setCompletedState}
          deleteState={deleteState}
          setDeleteState={setDeleteState}
        />
        
        <NewTodo 
          data={dataState}
          setData={setData}
          setDataState={setDataState}
        />

      </div>
    </div>
  );
}

export default App;
