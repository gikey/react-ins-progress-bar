import React, { Component, HTMLAttributes } from "react";
import eventManager from "../utils/eventManager";
import { ACTION } from "../utils/constant";
import { classnames } from "../utils/classnames";
import { ProgressBar } from "./style";

export type Position = "top" | "bottom";

export interface IInsProgressStart {
    position?: Position;
    height?: string;
    duration?: number;
    colors?: string;
}

export interface IInsProgressFinish {
    delay?: number;
}

export type InsProgressBarProps = HTMLAttributes<HTMLDivElement> &
    IInsProgressStart &
    IInsProgressFinish;

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
            height = "5px",
            delay = 300,
            position = "top",
            duration = 3000,
            colors = "",
        } = props;

        this.state = {
            height,
            delay,
            position,
            duration,
            fadeOut: false,
            display: false,
            colors,
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
        const { position, ...extra } = this.state;
        return (
            <div
                className={classnames(this.props.className, "ins-progress-bar")}
            >
                <ProgressBar
                    {...(extra as Required<IInsProgressBarState>)}
                    className={position}
                />
            </div>
        );
    }

    show(options: IInsProgressStart = {}) {
        this.setState({
            ...options,
            display: true,
            fadeOut: false,
        });
    }

    hide(options: IInsProgressFinish = {}) {
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
