import React, { createContext, useContext, useState } from "react"

const UserContext = createContext("")

const useUserContext = () => useContext(UserContext)

export default function () {
  const [user, setUser] = useState("uğur")
  
  return (
    <UserContext.Provider value={user}>
      <div>Parent Component</div>
      <Component1 user={user}/>
    </UserContext.Provider>
  )
}

function Component1({ user }) {
  return (
    <>
      <h2>Component 1</h2>
      <p>{user}</p>
      <Component2 />
    </>
  )
}
function Component2() {
  const user = useUserContext()
  return (
    <>
      <h2>Component 2</h2>
      <p>{user}</p>
      <Component3 />
    </>
  )
}

function Component3({ user }) {
  return (
    <>
      <h2>Component 3</h2>
      <p>{user}</p>
      <Component4 />
    </>
  )
}

function Component4() {
  const user = useUserContext()
  return (
    <>
      <h2>Component 4</h2>
      <p>{user}</p>
    </>
  )
}