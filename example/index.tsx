import React, { Component } from "react";
import ReactDOM from "react-dom";
import { InsProgressBar, insProgress } from "../src/index";
import { Title } from "./style";
import Switch from "./components/switch";

class App extends Component {
    componentDidMount() {
        insProgress.start();
    }

    handleChange = (checked: boolean) => {
        if (checked) {
            insProgress.start({
                height: '5px',
                position: 'top'
            });
        } else {
            insProgress.finish();
        }
    }

    render() {
        return (
            <div className="container">
                <InsProgressBar />
                <Title>react-ins-progress-bar</Title>
                <Switch
                    onChange={this.handleChange}
                />
                <a className="github" href="https://github.com/gikey/react-ins-progress-bar/">
                <img src={require("./github.svg")} alt=""/></a>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
