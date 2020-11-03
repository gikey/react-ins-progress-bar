import { Component, HTMLAttributes } from "react";

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

declare class InsProgressBar extends Component<InsProgressBarProps> {}

declare const insProgress: {
    show(options: IInsProgressStart): void;
    finish(options: IInsProgressFinish): void;
}
