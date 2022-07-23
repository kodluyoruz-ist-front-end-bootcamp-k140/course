import React, { useEffect, useState } from "react";
import { useWindowWidth } from "../../hooks";

import "./style.css"

export class ScreenSize extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth }
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize)
  }
  componentDidUpdate() {
    window.addEventListener("resize", this.handleResize)
  }

  handleResize() {
    this.setState({ width: window.innerWidth })
    console.log(window.innerWidth)
  }
  
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }
  render() {
    return (
      <div className='form-row'>
        <label>Genişlik</label>
        <div>{this.state.width} {'px'}</div>
      </div>
    )
  }
}

export function ScreenSizeFn() {
  const width = useWindowWidth()
  
  return (
    <>
      <div className='form-row'>
        <label>Genişlik</label>
        <div>{width} {'px'}</div>
      </div>
      <div>{`Platform = ${width >= 768 ? "Desktop" : "Mobil"}`}</div>
    </>
    
  )
}