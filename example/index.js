import React, { Component } from "react";
import ReactDOM from "react-dom";
import { InsProgressBar, insProgress } from "../src/index";
import { Title } from "./style";
import Switch from "./components/switch";

class App extends Component {
    componentWillMount() {
        insProgress.start({
            position: insProgress.POSITION.BOTTOM
        });
    }
    handleStartProgress() {
        insProgress.start();
    }
    handleStopProgress() {
        insProgress.finish();
    }
    render() {
        return (
            <div className="container">
                <InsProgressBar />
                <Title>react-ins-progress-bar</Title>
                
                <Switch
                    handleStartProgress={this.handleStartProgress.bind(this)}
                    handleStopProgress={this.handleStopProgress.bind(this)}
                />
                <a className="github" href="https://github.com/gikey/react-ins-progress-bar/">
                <img src={require("./github.svg")} alt=""/></a>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
