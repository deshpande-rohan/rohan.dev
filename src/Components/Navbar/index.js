import React, { useState, useEffect } from "react";
import Name from "../../Images/name.svg";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavHeader,
  NameIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
} from "./NavbarElements";
import { ButtonNavigate } from "../../ButtonElement";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY > 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavHeader to="/">
            <NameIcon src={Name} />
          </NavHeader>
          <MobileIcon onClick={toggle}>
            <FaBars style={{ opacity: "0.7" }} />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink
                to="about"
                smooth={true}
                duration={600}
                spy={true}
                exact="true"
                offset={20}
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="skills"
                smooth={true}
                duration={600}
                spy={true}
                exact="true"
                offset={20}
              >
                Skills
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="projects"
                smooth={true}
                duration={600}
                spy={true}
                exact="true"
                offset={20}
              >
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="contact"
                smooth={true}
                duration={600}
                spy={true}
                exact="true"
                offset={20}
              >
                Contact
              </NavLink>
            </NavItem>
          </NavMenu>

          <ButtonNavigate
            to="/contact"
            darkBg={true}
            rounded={true}
            bold={true}
            slightbig={true}
            mediaSupport={true}
          >
            Contact Me
          </ButtonNavigate>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
