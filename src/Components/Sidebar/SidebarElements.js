import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

export const SidebarContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #101010;
    display: grid;
    align-items: center;
    z-index: 100;
    transition: all 0.3s cubic-bezier(.63,.15,.19,1.19);

    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    -webkit-tap-highlight-color: transparent;
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
    transition: all .3s ease-out;

    &:hover {
        transform: rotate(90deg);
        color: red;
    }
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 70px);
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px) {
        grid-template-rows: repeat(5, 60px);
    }
`;

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: cyan;
    }
`;

export const SidebarBtn = styled.div`
    display: flex;
    justify-content: center;
    -webkit-tap-highlight-color: transparent;
`;

export const SideBtn = styled(Link)`
    color: rgba(255,255,255,0.72);
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: 3px;
    background-color: #101010;
    padding: 12px 24px;
    border-radius: 50px;
    border: none;
    outline: none;
    cursor: pointer;  
    box-shadow: -4px -4px 12px rgba(255, 255, 255, 0.11), 8px 8px 15px #000000;
    transition: all .3s ease-in-out;

    &:hover {
        color: rgba(255,255,255,0.92);  
    }

    &:active {
        transform: translateY(10px);
    }
`;