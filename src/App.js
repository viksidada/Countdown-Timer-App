import React, {Component} from 'react';
import "./App.css";
import Clock from "./Clock.js";
import {Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: "January 20, 2018",
            newDeadLine: ""
        }
    }

    changeDeadline() {
        this.setState({deadline: this.state.newDeadLine});
    }

    render() {
        return (
        <div className = "App">
            <div className="App-title">Countdown to {this.state.deadline}</div><br/>
            <Clock deadline = {this.state.deadline} />
            <Form inline = {true}>
                <FormControl
                    className = "DeadLine-input"
                    placeholder="new date"
                    onChange={event => this.setState({newDeadLine: event.target.value}) }
                />
                <Button className = "btn btn-danger" onClick={() => this.changeDeadline()}>Submit</Button>
            </Form>
        </div>

        );
    }
}

export default App;