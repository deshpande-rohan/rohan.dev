import React from 'react';
import { AboutContainer, AboutWrapper, ImageSection, ImageWrapper, Image, AboutSection, H2, Info, P, SocialSection } from './AboutElements';
import myImage from '../../Images/me.jpg';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { SocialIconBox } from '../../SocialIconBox';

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
                                Hi, I’m Rohan Deshpande, a 21 years old Front end developer, UI/UX Designer, Photographer living in Maharashtra, India. I’m a BCA  Graduate currently looking for a Job.
                            </P>
                            <P>
                                Have a look at my projects, skills or just connect with me on Social Media. I am always excited to build some amazing projects !
                            </P>
                        </Info>
                        <SocialSection>
                            <SocialIconBox fill="blue" rounded={false} dark={false}>
                                <FaFacebookF />
                            </SocialIconBox>
                            <SocialIconBox fill="#4AA7EA" rounded={false} dark={false}>
                                <FaLinkedinIn />
                            </SocialIconBox>
                            <SocialIconBox fill="red" rounded={false} dark={false}>
                                <HiOutlineMail />
                            </SocialIconBox>
                        </SocialSection>
                    </AboutSection>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}

export default About
