import React, { useState, useEffect } from 'react';
import Name from '../../Images/name.svg';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavHeader, NameIcon, MobileIcon, NavMenu, NavItem, NavLink, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY > 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavHeader to="/">
                        <NameIcon src={Name} />
                    </NavHeader>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="skills">Skills</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="projects">Projects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="inspirations">Inspirations</NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="contact">Contact</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
