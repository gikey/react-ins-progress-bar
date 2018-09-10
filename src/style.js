import styled, { keyframes } from 'styled-components'

const moveGradient = keyframes`
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -200% 0%;
    }
`

const MoveEnter = keyframes`
    0% { transform:scaleX(0) } 
    100% { transform:scaleX(1) }
`

export const ProgressBar = styled.div`
    display: ${props => props.display ? 'block' : 'none'};
    width: 100%;
    height: ${props => props.height};
    position: fixed;
    top: 0;
    left: 0;
    background: linear-gradient(90deg, red 0%, yellow 15%, lime 30%, cyan 50%, blue 65%, magenta 80%, red 100%);
    background-size: 200%;
    transform-origin: left;
    animation: ${moveGradient} 5s linear infinite, .5s ${MoveEnter} ease-in;
`


