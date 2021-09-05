import styled from 'styled-components';
import { Link } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom'

export const Button = styled(Link)`
    font-family: 'Josefin Sans', sans-serif;
    background: ${({ black }) => black ? '#101010' : 'linear-gradient(90.27deg, #61E87F 3.75%, rgba(132, 244, 177, 0.42) 99.77%)'};
    border-radius: ${({ rounded }) => rounded ? '50px' : '4px'};
    white-space: nowrap;
    color: ${({ dark }) => dark ? 'rgba(255, 255, 255, 0.7)' : '#FFFFFF'};
    font-size: ${({ normal_font }) => normal_font ? '22px' : '28px'};
    padding: ${({ normal_padding }) => normal_padding ? '12px 24px' : '15px 26px'};
    outline: none;
    border: none;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: ${({ animated }) => animated ? 'inset 0 0 0 0 rgba(255, 255, 255, 0.6)' : 'none'};
    -webkit-tap-highlight-color: transparent;
    transition: all .5s cubic-bezier(.05,.33,.56,.92);

    &:hover {
        box-shadow: ${({ animated }) => animated ? 'inset 400px 0 0 0 rgba(255, 255, 255, 0.6)' : 'none'};
        color: #101010;
    }
`;

export const ButtonNavigate = styled(LinkRouter)`
    background-image: ${({ darkBg }) => darkBg ? 'linear-gradient(to right, #232526 0%, #414345  51%, #232526  100%)' : 'linear-gradient(to right, #02AAB0 0%, #00CDAC  51%, #02AAB0  100%)'};
    display: block;    
    padding: 12px 20px;
    text-align: center;
    text-transform: uppercase;
    font-size: ${({ slightBigFont }) => slightBigFont ? '20px' : '18px'};
    font-weight: ${({ bold }) => bold ? '500' : '400'};
    transition: 0.5s;
    background-size: 200% auto;
    color: white; 
    text-decoration: none;
    border-radius: ${({ rounded }) => rounded ? '50px' : '8px'};

    &:hover {
        background-position: right center; /* change the direction of the change here */
    }

    &:active {
        transform: scale(0.95) translateY(5px);
    }

    @media only screen and (max-width: 768px) {
        display: ${({ mediaSupport }) => mediaSupport ? 'none' : 'block'};
    }
`;