import React from "react";
import {
  FooterContainer,
  Wrapper,
  FooterHead,
  Name,
  LinksWrapper,
  LinkSection,
  SectionTitle,
  Link,
  LinkRoute,
  Tip,
} from "./FooterElements";
import { FaRegHandPeace } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Wrapper>
          <FooterHead>
            <img src="./myLogo.svg" alt="Logo" />
            <Name>Rohan Deshpande</Name>
          </FooterHead>
          <LinksWrapper>
            <LinkSection>
              <SectionTitle>About</SectionTitle>
              <Link
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={20}
              >
                About Me
              </Link>
              <LinkRoute to="/contact">Contact</LinkRoute>
            </LinkSection>
            <LinkSection>
              <SectionTitle>Made With</SectionTitle>
              <Link to="#">React</Link>
              <Link to="#">Styled Components</Link>
              <Link to="#">React Router</Link>
              <Link to="#">React Scroll</Link>
              <Link to="#">Vercel</Link>
            </LinkSection>
            <LinkSection>
              <SectionTitle>Resources</SectionTitle>
              <Link to="#">Figma</Link>
              <Link to="#">React Icons</Link>
              <Link to="#">React Typing</Link>
              <Link to="#">cssgradient.io</Link>
            </LinkSection>
            <LinkSection>
              <SectionTitle>Note</SectionTitle>
              <Tip>
                This website is still in Development. I spend my spare time
                updating this website to make it{" "}
                <span>
                  More Awesome <FaRegHandPeace className="handIcon" />
                </span>
              </Tip>
            </LinkSection>
          </LinksWrapper>
        </Wrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
