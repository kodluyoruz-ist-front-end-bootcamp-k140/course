import './App.css';
import React from 'react';
import { FormRow } from "./components/form-row"
import { ScreenSize } from './components/screen-size';

export default class extends React.Component {

  constructor(props) {
    super(props);

    //console.log("constructor")

    this.state = {
      name: "Harry",
      surname: "Potter",
      showScreenSize: true
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
    
  }

  handleClick () {
    console.log(this)
  }

  componentDidMount() {
    document.title = this.state.name + ' ' + this.state.surname
  }

  componentDidUpdate() {
    document.title = this.state.name + ' ' + this.state.surname
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value})
  }

  handleSurnameChange(e) {
    this.setState({ surname: e.target.value})
  }

  render() {
    const { name, surname, showScreenSize } = this.state

    return (
      <div className="container">
        <div className='form'>
          <FormRow
            label="Ad"
            value={name}
            onChange={this.handleNameChange}
          />
           <FormRow
            label="Soyad"
            value={surname}
            onChange={this.handleSurnameChange}
          />
          <button onClick={() => this.setState({ showScreenSize: false })}>Kapat</button>
          { showScreenSize && (
            <ScreenSize />
          )}
        </div>
    </div>
  );
  }
};



