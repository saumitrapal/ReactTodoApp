import { useState } from 'react'

let counter = 0;

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: "Go to gym 1",
    description: "go to gym today",
  },{
    id: 2,
    title: "Go to gym 2",
    description: "go to gym today",
  }, {
    id: 3,
    title: "Go to gym 3",
    description: "go to gym today",
  }, {
    id: 4,
    title: "Go to gym 4",
    description: "go to gym today",
  }])

  function addTodo() {
    setTodos([...todos, {
      id: 4,
      title: Math.random(),
      description: Math.random()
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </div>
 
  )
}

function Todo({title, description}) {
  return (
    <div>
      <h1>
        {title}
      </h1>
      <h5>
        {description}
      </h5>      
    </div>
  )
}

export default App;
