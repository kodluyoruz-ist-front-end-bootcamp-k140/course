import React from "react"
import "./style.css"
import { FormItem } from "../form-item"
import { Button } from "../button"

export class ContactFormClassComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
    }
  }
  
  render() {
    const { firstName, lastName, phone } = this.state
    return (
      <div className="contianer form-container">
      <form onSubmit={e => {
        e.preventDefault();
        console.log(this.state)
        }}>
          <FormItem
            title="First Name"
            value={firstName}
            onChange={e => this.setState({ firstName: e.target.value })}
          />
          <FormItem
            title="Last Name"
            value={lastName}
            onChange={e => this.setState({ lastName: e.target.value })}
          />
           <FormItem
            title="Phone"
            value={phone}
            onChange={e => this.setState({ phone: e.target.value })}
          />
          <Button className="btn btn-danger" type="submit">Gönder</Button>
          <Button className="btn btn-default" type="button">Vazgeç</Button>

        </form>
      </div>
    )
  }
}