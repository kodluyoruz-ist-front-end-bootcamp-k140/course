import React from "react"

export function ContactFormFnComponent() {

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
    <div className="container">
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
        <input name="phone" value={phone} onChange={handleChange} />
        <button>Kaydet</button>
        </form>
      </div>
  )
}
