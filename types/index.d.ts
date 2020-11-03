import { Component, HTMLAttributes } from "react";

type Position = "top" | "bottom";

interface IInsProgressStart {
    position?: Position;
    height?: string;
    duration?: number;
    colors?: string;
}

interface IInsProgressFinish {
    delay?: number;
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
