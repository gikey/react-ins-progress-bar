import styled, { keyframes } from 'styled-components'

const moveGradient = keyframes`
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -200% 0%;
    }
`

export const Title = styled.h1`
    background: linear-gradient(90deg, #1abc9c 15%, #2ecc71 15%, #3498db 12%, #9b59b6 32%, #34495e 35%, #f1c40f 55%, #e67e22 59%, #e74c3c 63%, #95a5a6 92%);
    -webkit-background-clip: text;
    background-clip: text;
    background-size: 200%;
    color: transparent;
    font-size: 60px;
    margin: 0;
    margin-top: -100px;
    transform-origin: left;
    font-style: italic;
    animation: ${moveGradient} 8s linear infinite;
`
