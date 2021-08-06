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
                    <SidebarLink to="about">
                        About
                    </SidebarLink>
                    <SidebarLink to="skills">
                        Skills
                    </SidebarLink>
                    <SidebarLink to="projects">
                        Projects
                    </SidebarLink>
                    <SidebarLink to="inspiration">
                        Inspiration
                    </SidebarLink>
                </SidebarMenu>
                <SidebarBtn>
                    <SideBtn to="contact">Contact</SideBtn>
                </SidebarBtn>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
