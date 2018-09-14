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
        delay: PropTypes.number,
        position: PropTypes.string
    }
    static defaultProps = {
        height: '5px',
        delay: 500,
        position: POSITION.TOP
    }
    componentWillMount() {
        this.initState = {
            ...this.props,
            ...this.state
        }
        delete this.initState.display
        this.setState(this.initState)
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
            ...this.initState,
            ...options,
            display: 'block',
            fadeOut: false,
        })
    }
    hide(options) {
        this.setState({
            ...this.state,
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