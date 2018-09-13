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
        delay: 300
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
            fadeOut: false,
            position: options.position || POSITION.TOP
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
        }, this.props.delay)
    }
    render() {
        return (
            <div className="ins-progress-bar">
               <ProgressBar
                   height={this.props.height}
                   display={this.state.display}
                   fadeOut={this.state.fadeOut}
                   delay={this.props.delay}
                   className={this.state.position}
                />
            </div>
        )
    }
}

export default InsProgressBar