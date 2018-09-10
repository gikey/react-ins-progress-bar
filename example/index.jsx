import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import InsProgressBar from '../src/react-ins-progress-bar'

class App  extends Component {
    constructor() {
        super()
        this.state = {
            display: false
        }
    }
    handleStartProgress() {
        this.setState({
            display: true
        })
    }
    handleStopProgress() {
        this.setState({
            display: false
        })
    }
    render() {
        return (
            <div>
                <InsProgressBar display={this.state.display}/>
                <button onClick={this.handleStartProgress.bind(this)}>show</button>
                <button onClick={this.handleStopProgress.bind(this)}>hide</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))