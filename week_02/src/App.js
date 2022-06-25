import React from 'react';
//import './App.css';
// import other from './Other.module.css'; .module is important!

// function Title({ text = "React Bootcamp Week 2", component = "h1" }) {

//   const onClicked = (e) => {
//     console.log(e)
//   }
  

//   // return component !== "h1" ?
//   //   <div className={component} onClick={onClicked}>{text}</div> :
//   //   <h1 id="pageTitle" className={component} onClick={onClicked}>{text}</h1>

//   switch (component) {
//     case "h1":
//       return <h1 id="pageTitle" className={component} onClick={onClicked}>{text}</h1>
//       break;
  
//     default:
//       return <div className={component} onClick={onClicked}>{text}</div>
//   }
// }


// class Title extends React.Component {

//   renderDivComponent = () => {
//     const {text, component} = this.props
//     return <div className={component} >{text}</div>
//   }

//   renderH1 = () => {
//     const {text, component} = this.props
//     return <h1 id="pageTitle" className={component}>{text}</h1>
//   }
//   render() {

//     const {text, component} = this.props

//     // const Component = () => component === "h1" ?
//     //   <h1 id="pageTitle" className={component}>{text}</h1>
//     //   : <div className={component} >{text}</div>
    
//     // const Variable = component === "h1" ?
//     //   <h1 id="pageTitle" className={component}>{text}</h1>
//     //   : <div className={component} >{text}</div>
//     // return Variable
//     return component === "h1" ? this.renderH1() : this.renderDivComponent()
//   }
// }

// function Title({ text = "React Bootcamp Week 2", component = "h1"  }) {

function Title(props) {
  const { text = "React Bootcamp Week 2", component = "h1"  } = props
  const onClicked = (e) => {
    console.log(e)
  }
  

  // return component !== "h1" ?
  //   <div className={component} onClick={onClicked}>{text}</div> :
  //   <h1 id="pageTitle" className={component} onClick={onClicked}>{text}</h1>

  const renderH1 = () => {
    return <h1 id="pageTitle" className={component}>{text}</h1>
  }

  const renderDivComponent = () => {
    return <div className={component} onClick={onClicked}>{text}</div>
  }

  // switch (component) {
  //   case "h1":
  //     return <h1 id="pageTitle" className={component} onClick={onClicked}>{text}</h1>
  //     break;
  
  //   default:
  //     return <div className={component} onClick={onClicked}>{text}</div>
  // }
   switch (component) {
    case "h1":
      return renderH1()
  
    default:
      return renderDivComponent()
  }
}


function ContactForm() {

  // const [firstName, setFirstName] = React.useState("")
  // const [lastName, setLastName] = React.useState("")
  // const [phone, setPhone] = React.useState("")

  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
    phone: ""
  })

  const onSubmit = (e) => {
    e.preventDefault()
    // es5 kullanımı

    // const firstName = document.querySelector("#firstName")
    // const lastName = document.querySelector("#lastName")
    // const phone = document.querySelector("#phone")
    //     console.log({ firstName:firstName.value, lastName:lastName.value, Phone: phone.value})

    console.log({ firstName:state.firstName, lastName:state.lastName, Phone: state.phone})
  }

  // const handleChange = (e) => {
  //   const v = e.target.value
  //   if (e.target.name === "firstName") {
  //     setFirstName(v)
  //     return
  //   }

  //   if (e.target.name === "lastName") {
  //     setLastName(v)
  //     return
  //   }

  //   setPhone(v)
  // }

  const { firstName, lastName, phone } = state
  
  const handleChange = (e) => {
    const name = e.currentTarget.name
    const v = e.currentTarget.value || ""
    setState((prev) => {
      return {...prev, [name]: v}
    })
  }
  return (
    <form onSubmit={onSubmit}>
      {/* Örnek 1
       <input id="firstName" value={firstName} onChange={e => {
        //console.log(e.target.value)
        setFirstName(e.target.value)
      }}/>
      <input id="lastName" value={lastName} onChange={e => setLastName(e.target.value)}/>
       <input id="phone" value={phone} onChange={e => setPhone(e.target.value)}/> */}
      
      {/** örnek 2 
      <input name="firstName" value={firstName} onChange={handleChange}/>
      <input name="lastName" value={lastName} onChange={handleChange}/>
       <input name="phone" value={phone} onChange={handleChange}/> 
      <button>Kaydet</button>
      */}

      {/** örnek 3*/}

       <input name="firstName" value={firstName} onChange={handleChange}/>
      <input name="lastName" value={lastName} onChange={handleChange}/>
       <input name="phone" value={phone} onChange={handleChange}/> 
      <button>Kaydet</button>
    </form>
  )
}

function App() {
  // console.log(other)
  // const h1Style = { fontSize: 45 }
  // const divStyle = { fontSize: 20}

  return (
    <div className="App">
      {/* <Title component="h1" text='React Class Component' />
      <Title component="h2" text='Render Div' /> */}
      {/* <h1
        style={false ? h1Style : divStyle}
        className={false ? "page-title" : "component-title"}
      >Page Title</h1> */}

      {/* <h1 className={other.pageTitle}>Page Title</h1> */}
      <ContactForm />
    </div>
  );
}




export default App;