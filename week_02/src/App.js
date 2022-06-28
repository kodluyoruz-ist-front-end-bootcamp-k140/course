import React, { useState } from 'react';
import './App.css';
// import other from './Other.module.css'; .module is important!
// import { TitleClassComponent, TitleFnComponent } from "./components/title"

import { ContactFormClassComponent, ContactFormFnComponent } from "./components/contact"
import { DataGrid, DataGridClsComponent } from './components/data-grid';
import { Header } from './components/header';
import { Button } from "./components/button"

function App() {

  const [activeTab, setActiveTab] = useState("fn")

  return (
    <div className="App">
      <Header />
      {/* <ContactFormClassComponent /> */}
      <div className='container'>
        <div className="btn-group tabs" role="group" ariaLabel="Basic example">
          <Button onClick={() => setActiveTab("cls")} className={activeTab === "cls" ? "btn btn-primary" : "btn btn-default"}>Class Component</Button>
          <Button onClick={() => setActiveTab("fn")} className={activeTab === "fn" ? "btn btn-primary" : "btn btn-default"}>Fn Component</Button>
        </div>
        <br />
        { activeTab == "fn" ? <DataGrid /> : <DataGridClsComponent />}
      </div>
    </div>
  );
}




export default App;