import styled from 'styled-components';
import { Link } from 'react-scroll';

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
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: ${({ animated }) => animated ? 'inset 0 0 0 0 rgba(255, 255, 255, 0.6)' : 'none'};
    transition: all .5s cubic-bezier(.05,.33,.56,.92);

    &:hover {
        box-shadow: ${({ animated }) => animated ? 'inset 400px 0 0 0 rgba(255, 255, 255, 0.6)' : 'none'};
        color: #101010;
    }
`;

