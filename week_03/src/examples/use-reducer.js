import React, { useReducer, createContext, useContext} from "react"


const AppContext = createContext({})

const initialTodos = [{
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

function reducer(state = initialTodos, action) {
  switch (action.type) {
    case "UPDATE_TODO":
      return state.map(todo => {
        if (todo.id == action.payload) {
          return {...todo, complete: !todo.complete}
        } else {
          return todo
        }
      })
      break;
  
    default:
      return state
  }
}

export default function () {

  const [todos, dispatch] = useReducer(reducer, initialTodos)

  const handleChange = (todo) => {
    dispatch({ type: "UPDATE_TODO", payload: todo.id })
  }

  return (
    <AppContext.Provider value={{
      todos,
      dispatch
    }}>
      <h1>Todos</h1>
      {todos.map((todo, index) => (
        <label key={index} style={{ display: "flex", marginBottom: 10 }}>
          <input
            type={"checkbox"}
            checked={todo.complete}
            onChange={() => handleChange(todo)}
          />
          {todo.title}
        </label>
      ))}
      <DisplayTodos />
    </AppContext.Provider>
  )
}


function DisplayTodos() {
  const { todos } = useContext(AppContext)

  console.log(todos)
  return (
    <>
      <h1>Other Todos</h1>
      {todos.map((todo, index) => (
        <label key={index} style={{ display: "flex", marginBottom: 10 }}>
          
          <p>{`${todo.title } complete: ${todo.complete ? "true": "false"}`}</p>
        </label>
      ))}
    </>
  )
}