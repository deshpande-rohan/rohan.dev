import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtn, SideBtn } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle} smooth={true} duration={500} spy={true} exact={true} offset={20}>
                        About
                    </SidebarLink>
                    <SidebarLink to="skills" onClick={toggle} smooth={true} duration={500} spy={true} exact={true} offset={20}>
                        Skills
                    </SidebarLink>
                    <SidebarLink to="projects" onClick={toggle} smooth={true} duration={500} spy={true} exact={true} offset={20}>
                        Projects
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle} smooth={true} duration={500} spy={true} exact={true} offset={20}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SidebarBtn>
                    <SideBtn to="/contact">Contact Me</SideBtn>
                </SidebarBtn>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
