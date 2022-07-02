import React from "react"

import "./style.css"

export class FormRow extends React.Component {
  render() {
    return (
      <div className='form-row'>
        <label>{this.props.label}</label>
        <input
          value={this.props.value}
          onChange={this.props.onChange}
          placeholder={this.props.label} />
      </div>
    )
  }
}