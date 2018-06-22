import React, { Component } from 'react';
import './App.css';
import Clock from './clock';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({
      deadline: this.state.newDeadline
    });
  }

  render() {
    return (
      <div className = "App">
      <h1 className = "App-title">Countdown to { this.state.deadline }</h1>
        { /* Clock App - Passing the deadline */}
        <Clock
          deadline = { this.state.deadline }
        />
      {/* Form used for collecting the date should it change */}
        <Form inline>
          <FormControl
                className = "deadline-input"
                placeholder = "New Date"
                {/* Storing the potential new Deadline in the state for future use */}
                onChange = { event => this.setState({ newDeadline: event.target.value }) }/>
              {/* Copying over the stored information from newDeadline to Deadline */}
          <Button onClick={ () => this.changeDeadline() }>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default App;
