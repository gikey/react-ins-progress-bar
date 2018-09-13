import React, { Component } from "react";
import ReactDOM from "react-dom";
import { InsProgressBar, insProgress } from "../src/index.js";
import { Title } from "./style";
import Switch from "./components/switch";

class App extends Component {
    componentWillMount() {
        insProgress.start();
    }
    handleStartProgress() {
        insProgress.start();
    }
    handleStopProgress() {
        insProgress.finish();
    }
    render() {
        return (
            <div>
                <InsProgressBar />
                <Title>react-ins-progress-bar</Title>
                <Switch
                    handleStartProgress={this.handleStartProgress.bind(this)}
                    handleStopProgress={this.handleStopProgress.bind(this)}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
