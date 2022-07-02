import React, { useState } from "react"
import { useFetch } from "./hooks"


function TableRow(props) {
  return (
    <tr>
      <th scope="row" >{props.id}</th>
      <td>{props.title}</td>
      <td>{props.completed ? "Tamamlandı" : "Yapılacak"}</td>
    </tr>
  )
}


const TODOS = "https://jsonplaceholder.typicode.com/todos"
const POSTS = "https://jsonplaceholder.typicode.com/posts"


// Todos Componenti
// class-fn component

// Posts Componenti
// class-fn component


export default function () {

  const [activeTab, setActiveTab] = useState("todos")
  const todos = useFetch(TODOS)
  const posts = useFetch(POSTS)

  const renderBody = () => {
    return (
      <React.Fragment>
        {todos.data.slice(0,20).sort((a, b) => b.id - a.id).map((item, index) => {
          return (
            <TableRow key={item.id} {...item} />
          )
        })}
      </React.Fragment>
    )
  }

  const renderTable = () => {
    return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Başlık</th>
            <th scope="col">Durum</th>
          </tr>
        </thead>
        <tbody>
          {renderBody()}
        </tbody>
      </table>
    </>
    )
  }

   const renderPosts = () => {
    return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Başlık</th>
          </tr>
        </thead>
        <tbody>
          {renderPostsBody()}
        </tbody>
      </table>
    </>
    )
   }
  const renderPostsBody = () => {
    return (
      <React.Fragment>
        {posts.data.slice(0,20).sort((a, b) => b.id - a.id).map((item, index) => {
          return (
            <tr key={item.id}>
              <th scope="row" >{item.id}</th>
              <td>{item.title}</td>
            </tr>
          )
        })}
      </React.Fragment>
    )
  }

  const renderActiveTab = () => {
    if (activeTab === "todos") {
      return renderTable()
    }

    return renderPosts()
  }
  return (
    <div className="container">
      <div className="btn-group tabs" role="group">
        <button
          onClick={() => setActiveTab("todos")}
          className={activeTab === "todos" ? "btn btn-primary" : "btn btn-default"}>Todos</button>
        <button 
          onClick={() => setActiveTab("posts")}
          className={activeTab === "posts" ? "btn btn-primary" : "btn btn-default"}>Posts</button>
      </div>
      
      { todos.loading ? "Yükleniyor..." : renderActiveTab()}
    </div>
  )
}