import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Nav = styled.div`
    background: ${({ scrollNav }) => scrollNav ? 'rgba(16, 16, 16, 0.75)' : 'transparent'};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -80px;
    position: sticky;
    top: 0;
    z-index: 10;
    -webkit-backdrop-filter: ${({ scrollNav }) => scrollNav ? 'blur(10px) saturate(300%)' : 'none'};
    backdrop-filter: ${({ scrollNav }) => scrollNav ? 'blur(10px) saturate(300%)' : 'none'};

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 0 24px;
    width: 100%;
    color: #fff;
`;

export const NavHeader = styled.p`
    display: block;
    font-size: 1.5rem;
    justify-self: flex-start;
    font-weight: 400;
    margin-left: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 2px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    @media only screen and (max-width: 768px) {
        margin-left: 16px;
    }
`;

export const NameIcon = styled.img`
    width: 110px;
    max-width: 115px;
    backface-visibility: hidden;
    transition: all .2s ease-out;

    &:hover {
        transform: scale(1.1);
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media only screen and (max-width: 760px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.6rem;
        cursor: pointer;
        color: #fff;
        -webkit-tap-highlight-color: transparent;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    text-decoration: none;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 1.1rem;
    font-weight: 400;
    letter-spacing: 0.02em;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: all .2s ease-out;

    &:active {
        border-bottom: 2px solid red;
    }

    &:hover {
        color: cyan;
        border-bottom: 4px solid red;
        background-color: rgba(255, 255, 255, .03);
    }
`;

export const NavBtn = styled.div`
    width: 150px;
    max-width: 160px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #101010;
    border-radius: 50px;
    transition: all .3s ease-in-out;
    cursor: pointer;

    &:hover {
        box-shadow: -4px -5px 30px rgba(18, 158, 133, 0.64), 8px 4px 13px #101010;
    }

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    color: rgba(255, 255, 255, 0.72);
    font-weight: 500;
    font-size: 1.3rem;
    transition: color .2s ease-in;

    &:hover {
        color: rgba(255, 255, 255, 0.80);
    }
`;

