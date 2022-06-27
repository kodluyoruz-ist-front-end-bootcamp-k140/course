import React from "react"


export function FormItem({
  title = "",
  value = "",
  onChange = () => console.log("not implemented yet"),
  component = "input"
}) {

  const renderInput = () => {
    return (
      <>
      <label className="col-sm-2 col-form-label">{title}</label>
      <div className="col-sm-10">
        <input
          className="form-control"
          value={value}
          onChange={onChange} />
        </div>
      </>
    )
  }

  const renderCheckbox = () => {
    return (
      <div className="form-check">
      <label className="form-check-label" htmlFor="checkbox">{title}</label>
        <input
          className="form-check-input"
          id="checkbox"
          type={"checkbox"}
          checked={value}
          onChange={onChange} />
      </div>
    )
  }
  return (
    <div className="mb-3 row">
      {component === "checkbox" ? renderCheckbox(): renderInput()}
    </div>
  )
}