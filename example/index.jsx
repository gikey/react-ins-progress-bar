import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {InsProgressBar, insProgress} from '../src/index.js'

class App  extends Component {
    handleStartProgress() {
        insProgress.start({
            position: insProgress.POSITION.TOP
        })
    }
    handleStopProgress() {
        insProgress.finish()
    }
    render() {
        return (
            <div>
                <InsProgressBar/>
                <button onClick={this.handleStartProgress.bind(this)}>show</button>
                <button onClick={this.handleStopProgress.bind(this)}>hide</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))