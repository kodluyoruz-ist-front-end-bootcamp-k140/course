import React from 'react';

export function TitleFnComponent (props) {
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

