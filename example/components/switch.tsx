import React, { Component } from "react";
import "./style.css";

interface ISwitchProps {
    onChange: (checked: boolean) => void;
}

interface ISwitchState {
    checked: boolean;
}

class Switch extends Component<ISwitchProps, ISwitchState> {
    constructor(props: ISwitchProps) {
        super(props);
        this.state = {
            checked: true
        };
    }

    handleChange = () => {
        const { checked } = this.state;
        this.setState({ checked: !checked }, () => {
            this.props.onChange(!checked);
        });
    }

    render() {
        return (
            <div className="btn">
            Press
                <label className="switch">
                    
                    <input
                        type="checkbox"
                        checked={this.state.checked}
                        onChange={this.handleChange}
                    />
                    <div className="slider">
                        {this.state.checked ? (
                            <p className="l-info">Loading</p>
                        ) : (
                            <p className="r-info">Finished</p>
                        )}
                    </div>
                </label>
                {this.state.checked ? <p className="state">to start</p> : <p className="state">to finish</p>
                }
                
            </div>
        );
    }
}

export default Switch;
