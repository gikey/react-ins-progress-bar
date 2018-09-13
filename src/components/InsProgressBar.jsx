import React, { Component } from 'react'
import eventManager from '../utils/eventManager'
import { ACTION, POSITION } from '../utils/constant'
import { ProgressBar } from './style'
import PropTypes from 'prop-types'

class InsProgressBar extends Component {
    state = {
        display: 'none',
        fadeOut: false,
        position: POSITION.TOP
    }
    static propTypes = {
        height: PropTypes.string,
        delay: PropTypes.number
    }
    static defaultProps = {
        height: '5px',
        delay: 500
    }
    componentWillMount() {
        this.setState({
            ...this.props,
            ...this.state
        })
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
            ...options,
            display: 'block',
            fadeOut: false,
        })
    }
    hide(options) {
        this.setState({
            ...options,
            fadeOut: true
        })

        setTimeout(() => {
            this.setState({
                display: 'none'
            })
        }, (options.delay || this.props.delay))
    }
    render() {
        return (
            <div className="ins-progress-bar">
               <ProgressBar
                   height={this.state.height}
                   display={this.state.display}
                   fadeOut={this.state.fadeOut}
                   delay={this.state.delay}
                   className={this.state.position}
                />
            </div>
        )
    }
}

export default InsProgressBar