import React from 'react'
import { FooterContainer, Wrapper, FooterHead, Name, LinksWrapper, LinkSection, SectionTitle, Link, LinkRoute, Tip } from './FooterElements';
import { FaRegHandPeace } from 'react-icons/fa';

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
                            <Link to="about" smooth={true} duration={500} spy={true} exact='true' offset={20}>About Me</Link>
                            <LinkRoute to="/contact">Contact</LinkRoute>
                        </LinkSection>
                        <LinkSection>
                            <SectionTitle>This Website uses</SectionTitle>
                            <Link>React</Link>
                            <Link>Styled Components</Link>
                            <Link>React Router</Link>
                            <Link>React Scroll</Link>
                            <Link>Vercel</Link>
                        </LinkSection>
                        <LinkSection>
                            <SectionTitle>Resources</SectionTitle>
                            <Link>Figma</Link>
                            <Link>React Icons</Link>
                            <Link>React Typing</Link>
                        </LinkSection>
                        <LinkSection>
                            <SectionTitle>Note</SectionTitle>
                            <Tip>This website is still in Development. I spend my spare time updating this website and making it <span>More Awesome <FaRegHandPeace className="handIcon" /></span></Tip>
                        </LinkSection>
                    </LinksWrapper>
                </Wrapper>
            </FooterContainer>
        </>
    )
}

export default Footer
