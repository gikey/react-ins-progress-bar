import React, { Component } from 'react'
import eventManager from '../utils/eventManager'
import { ACTION } from '../utils/constant'
import { ProgressBar } from '../style'
import PropTypes from 'prop-types'

class InsProgressBar extends Component {
    state = {
        display: 'none',
        fadeOut: false
    }
    static propTypes = {
        height: PropTypes.string,
        duration: PropTypes.number
    }
    static defaultProps = {
        height: '5px',
        duration: 300
    }
    componentDidMount() {
        eventManager
            .on(ACTION.SHOW, options => this.show(options))
            .on(ACTION.CLEAR, options => this.hide(options))
            .emit(ACTION.DID_MOUNT, this)
    }
    componentWillUnmount() {
        eventManager
            .off(ACTION.SHOW)
            .off(ACTION.CLEAR)
            .emit(ACTION.WILL_UNMOUNT)
    }
    show(options) {
        this.setState({
            display: 'block',
            fadeOut: false
        })
    }
    hide(options) {
        this.setState({
            fadeOut: true
        })
        setTimeout(() => {
            this.setState({
                display: 'none'
            })
        }, this.props.duration)
    }
    render() {
        return (
            <div className="ins-progress-bar">
               <ProgressBar
                   height={this.props.height}
                   display={this.state.display}
                   fadeOut={this.state.fadeOut}
                   duration={this.props.duration}
                />
            </div>
        )
    }
}

export default InsProgressBar