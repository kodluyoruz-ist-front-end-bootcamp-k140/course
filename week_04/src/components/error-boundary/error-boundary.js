import React from "react"


export class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    // log
    console.log(error)

    this.setState({ hasError: true })
  }
  render() {
    if (this.state.hasError) {
      return <p>Bir hata oluştu</p>
    }
    return this.props.children
  }
}