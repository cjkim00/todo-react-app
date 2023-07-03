import React from 'react'
import Header from './Components/Header'
import TodoList from './Components/TodoList'
import testData from './testData'
import NewTodo from './Components/NewTodo'

function App() {
  const dataArr = testData.data.todoList.map(data => data)
  const [data, setData] = React.useState(dataArr)
  console.log(dataArr)

  return (
    <div className="app--div">
      <div className="app--todo--container">
        <TodoList 
          data={data}
          setData={setData}
        />
        
        <NewTodo 
          data={data}
          setData={setData}
        />

      </div>

    </div>
  );
}

export default App;
