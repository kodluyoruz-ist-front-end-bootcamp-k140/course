import React from 'react';
//import './App.css';
// import other from './Other.module.css'; .module is important!
// import { TitleClassComponent, TitleFnComponent } from "./components/title"

import { ContactFormClassComponent, ContactFormFnComponent } from "./components/contact"
import { DataGrid } from './components/data-grid';
import { Header } from './components/header';

function App() {

  return (
    <div className="App">
      <Header />
      {/* <ContactFormClassComponent /> */}
      <div className='container'>
        <DataGrid />
      </div>
    </div>
  );
}




export default App;