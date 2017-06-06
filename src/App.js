import React, {Component} from 'react';
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Deadline: "January 20, 2018"
        }
    }

    render() {
        return (
        <div className = "App">
            <div className="App-title">Countdown to {this.state.Deadline}</div><br/>
            <div>
                <div className="Clock-days">14 days</div>
                <div className="Clock-hours">10 hours</div>
                <div className="Clock-minutes">23 minutes</div>
                <div className="Clock-seconds">21 seconds</div>
            </div>
            <div>
                <input placeholder="new date" />
                <button>Submit</button>
            </div>
        </div>

        );
    }
}

export default App;