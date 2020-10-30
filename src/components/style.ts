import styled, { keyframes, StyledFunction } from "styled-components";

const moveGradient = keyframes`
    0% {
        background-position: 0% 0%;
    }
    100% {
        background-position: -200% 0%;
    }
`;

const MoveEnter = keyframes`
    0% { 
        transform:scaleX(0) 
    } 
    100% { 
        transform:scaleX(1) 
    }
`;

export interface IProgressBarProps {
    fadeOut: boolean;
    display: boolean;
    delay: number;
}

const styledDiv: StyledFunction<IProgressBarProps & React.HTMLProps<HTMLDivElement>> = styled.div;

export const ProgressBar = styledDiv`
    opacity: ${(props) => (props.fadeOut ? 0 : 1)};
    transition: opacity ${(props) => props.delay / 1000}s ease-in;
    display: ${(props) => props.display ? 'block' : 'none'};
    height: ${(props) => props.height};
    position: fixed;
    z-index: 99;
    left: 0;
    right: 0;
    background: linear-gradient(
        90deg,
        #1abc9c 15%,
        #2ecc71 15%,
        #3498db 12%,
        #9b59b6 32%,
        #34495e 35%,
        #f1c40f 55%,
        #e67e22 59%,
        #e74c3c 63%,
        #95a5a6 92%
    );
    background-size: 200%;
    transform-origin: left;
    animation: ${moveGradient} 3s linear infinite, ${MoveEnter} 0.3s   ease-in;
    &.top {
        top: 0;
    }
    &.bottom {
        bottom: 0;
    }
`;
