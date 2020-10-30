import React, { Component, HTMLAttributes } from "react";
import eventManager from "../utils/eventManager";
import { ACTION } from "../utils/constant";
import { classnames } from '../utils/classnames';
import { ProgressBar } from "./style";

export type Position = "top" | "bottom";

export interface IInsProgressStart {
    position: Position;
    height: string | number;
}

export interface IInsProgressFinish {
    delay: number;
}

export type InsProgressBarProps = HTMLAttributes<HTMLDivElement> & Partial<
    IInsProgressStart &
    IInsProgressFinish
>

export interface IInsProgressBarState
    extends IInsProgressStart,
        IInsProgressFinish {
    display: boolean;
    fadeOut: boolean;
}

class InsProgressBar extends Component<
    InsProgressBarProps,
    IInsProgressBarState
> {
    constructor(props: InsProgressBarProps) {
        super(props);

        const { 
            height = '5px', 
            delay = 500,
            position = "top"
        } = props;

        this.state = {
            height,
            delay,
            position,
            fadeOut: false,
            display: false,
        };
    }

    componentDidMount() {
        eventManager
            .on(ACTION.SHOW, (options) => this.show(options))
            .on(ACTION.CLEAR, (options) => this.hide(options))
            .emit(ACTION.DID_MOUNT, this);
    }

    componentWillUnmount() {
        eventManager
            .off(ACTION.SHOW)
            .off(ACTION.CLEAR)
            .emit(ACTION.WILL_UNMOUNT);
    }

    render() {

        return (
            <div className={classnames(
                this.props.className,
                "ins-progress-bar"
            )}>
                <ProgressBar
                    height={this.state.height}
                    display={this.state.display}
                    fadeOut={this.state.fadeOut}
                    delay={this.state.delay}
                    className={this.state.position}
                />
            </div>
        );
    }

    show(options: IInsProgressStart) {
        this.setState({
            ...options,
            display: true,
            fadeOut: false,
        });
    }

    hide(options: IInsProgressFinish) {
        this.setState({
            ...options,
            fadeOut: true,
        });

        setTimeout(() => {
            this.setState({
                display: false,
            });
        }, options.delay || this.state.delay);
    }
}

export default InsProgressBar;
