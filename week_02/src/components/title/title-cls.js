import React from 'react';



export class TitleClassComponent extends React.Component {

  renderDivComponent = () => {
    const {text, component} = this.props
    return <div className={component} >{text}</div>
  }

  renderH1 = () => {
    const {text, component} = this.props
    return <h1 id="pageTitle" className={component}>{text}</h1>
  }
  render() {

    const {text, component} = this.props

    // const Component = () => component === "h1" ?
    //   <h1 id="pageTitle" className={component}>{text}</h1>
    //   : <div className={component} >{text}</div>
    
    // const Variable = component === "h1" ?
    //   <h1 id="pageTitle" className={component}>{text}</h1>
    //   : <div className={component} >{text}</div>
    // return Variable
    return component === "h1" ? this.renderH1() : this.renderDivComponent()
  }
}