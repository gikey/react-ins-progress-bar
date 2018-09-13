import React, { Component } from "react";
import "./switch.css";

class Switch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: true
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange() {
        this.state.isChecked
            ? this.props.handleStopProgress()
            : this.props.handleStartProgress();
        this.setState({ isChecked: !this.state.isChecked });
    }
    render() {
        return (
            <div className="btn">
            Press
                <label className="switch">
                    
                    <input
                        type="checkbox"
                        checked={this.state.isChecked}
                        onChange={this.handleChange}
                    />
                    <div className="slider">
                        {this.state.isChecked ? (
                            <p className="l-info">Loading</p>
                        ) : (
                            <p className="r-info">Finished</p>
                        )}
                    </div>
                </label>
                {this.state.isChecked ? <p className="state">to start</p> : <p className="state">to finish</p>
                }
                
            </div>
        );
    }
}

export default Switch;
