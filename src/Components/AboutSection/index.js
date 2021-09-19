import React from "react";
import {
  AboutContainer,
  AboutWrapper,
  ImageSection,
  ImageWrapper,
  Image,
  AboutSection,
  H2,
  Info,
  P,
  SocialSection,
} from "./AboutElements";
import myImage from "../../Images/student.jpg";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SocialIconBox } from "../../SocialIconBox";

const About = () => {
  return (
    <>
      <AboutContainer id="about">
        <AboutWrapper>
          <ImageSection>
            <ImageWrapper>
              <Image src={myImage} />
            </ImageWrapper>
          </ImageSection>
          <AboutSection>
            <H2>About me !</H2>
            <Info>
              <P>
                Hi, I’m Rohan, a 21 years young self-taught Frontend Developer,
                UI/UX Designer, Photographer from Maharashtra, India. I enjoy
                creating and building clean, modern & user-friendly Websites and
                Web-Applications.
              </P>
              <P>
                Have a look at my projects, skills or just connect with me on
                Social Media. I am always excited to build some amazing projects
                and working together as a team !
              </P>
            </Info>
            <SocialSection>
              <SocialIconBox to="#" fill="blue" rounded={false} dark={false}>
                <FaFacebookF />
              </SocialIconBox>
              <SocialIconBox to="#" fill="#4AA7EA" rounded={false} dark={false}>
                <FaLinkedinIn />
              </SocialIconBox>
              <SocialIconBox
                to="/contact"
                fill="red"
                rounded={false}
                dark={false}
              >
                <HiOutlineMail />
              </SocialIconBox>
            </SocialSection>
          </AboutSection>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
