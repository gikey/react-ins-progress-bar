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
    opacity: ${props => props.fadeOut ? 0 : 1};
    transition: opacity ${props => props.duration / 1000 }s ease-in;
    display: ${props => props.display};
    width: 100%;
    height: ${props => props.height};
    position: fixed;
    top: 0;
    left: 0;
    background: linear-gradient(90deg, #1abc9c 15%, #2ecc71 15%, #3498db 12%, #9b59b6 32%, #34495e 35%, #f1c40f 55%, #e67e22 59%, #e74c3c 63%, #95a5a6 92%);
    //background: linear-gradient(90deg, #1abc9c 15%, #2ecc71 15%, #2ecc71 12%, #3498db 12%, #3498db 32%, #9b59b6 32%, #9b59b6 35%, #34495e 35%, #34495e 55%, #f1c40f 55%, #e67e22 59%, #e67e22 63%, #e74c3c 63%, #e74c3c 82%, #95a5a6 92%);
    background-size: 200%;
    transform-origin: left;
    animation: ${moveGradient} 3s linear infinite, .5s ${MoveEnter} ease-in;
`

'background: linear-gradient(90deg, red 0%, yellow 15%, lime 30%, cyan 50%, blue 65%, magenta 80%, red 100%);'


