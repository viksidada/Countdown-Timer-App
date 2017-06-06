import React, {Component} from 'react';
import "./App.css";

class App extends Component {
    render() {
        return (
        <div className = "App">
            <div className="App-title">My countdown application</div>
            <div>
                <div>14 days</div>
                <div>10 hours</div>
                <div>23 minutes</div>
                <div>21 seconds</div>
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