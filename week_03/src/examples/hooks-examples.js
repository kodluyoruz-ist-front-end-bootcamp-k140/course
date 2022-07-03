import React, { useEffect, useState, useRef, useCallback, memo, useMemo } from "react"

export function UseStateExample () {
  const [count, setCount] = useState(0)

  const [car, setCar] = useState({
    color: "red",
    year: "2022",
    model: "AMG",
    brand: "Mercedes"
  })

  const increment = () => {
    setCount(count => count + 1)
  }

  const change = () => {
    // setCar(car => ({
    //   ...car,
    //   brand: "BWM",
    //   color: "White",
    //   model: "5.20",
    //   year: "2022"
    // }))
    setCar(car => {
      return {
        ...car,
        brand: "BWM",
        color: "White",
        model: "5.20",
        year: "2022"
      }
    })
  }
  
  return (
    <div>
      <button onClick={increment}>
        Arttır
      </button>
      <p>{count}</p>

      <br />
      <h1>Marka {car.brand}</h1>
      <p>Renk {car.color}</p>
      <p>Model {car.model}</p>
      <p>Yıl {car.year}</p>
      <button onClick={change}>Sat</button>
    </div>
  )
}

export function UseEffectExample() {

  const [count, setCount] = useState(0)
  const [calculation, setCalculation] = useState(0);
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const inputRef = useRef()

  useEffect(() => {
    console.log("useEffect")
    const timer = setTimeout(() => {
      setCount(c => c + 1)
    }, 1000);
    return () => {
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
   loadData();
  }, [])

  const loadData = () => {
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(resp => resp.json())
      .then(response => {
        setLoading(false)
        console.log("response", response)
        setData(response)
      }).catch(e => {
        setLoading(false)
      })
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count => count + 1)}>+</button>
      <p>Calculation: {calculation}</p>
      
      <input ref={inputRef}/>
      <button onClick={() => {
        inputRef.current.focus()
      }}>Odaklan</button>
    </div>
  )
}




const Todos = memo(({ todos, addTodo }) => {
  //console.log("render todos from todos")
  return (
    <>
      <h2>My Todos</h2>
      <hr />
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
      <button onClick={addTodo}>Add Todo</button>
    </>
  )
})

// useCallback

export function UseCallbackExample() {
  const [todos, setTodos] = useState([])
  const [count, setCount] = useState(0)


  const increment = () => {
    setCount(c => c + 1)
  }

  const addTodo = useCallback(() => {
    setTodos(t => [...t, "New Todo"])
  }, [todos])
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Arttır</button>
      <hr />
      <Todos todos={todos} addTodo={addTodo} />
    </div>
  )
}

// useMemo
export default function UseMemoExample() {
  const [todos, setTodos] = useState([])
  const [count, setCount] = useState(0)

  const calculation = useMemo(() => expensiveCalculation(count), [count])

  const increment = () => {
    setCount(c => c + 1)
  }

  const addTodo = () => {
    setTodos(t => [...t, "New Todo"])
  }

  return (
    <div>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <p>Count: {count}</p>
      <button onClick={increment}>Arttır</button>
      <hr />
      <h2>Expensive Calculation</h2>
      <p>{calculation}</p>
    </div>
  )
}

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};