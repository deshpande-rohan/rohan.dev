import React from 'react'
import { ContactSection, ContactWrapper, ImageContainer, ContactImage, ContactText, HeadPrimary, HeadSecondary } from './ContactElements'
import workTogether from '../../Images/workTogether.svg'
import { VscTools } from 'react-icons/vsc';
import { ButtonNavigate } from '../../ButtonElement';

const Contact = () => {
    return (
        <>
            <ContactSection id="contact">
                <ContactWrapper>
                    <ImageContainer>
                        <ContactImage src={workTogether} alt="Work Together" />
                    </ImageContainer>
                    <ContactText>
                        <HeadPrimary>
                            I’m always excited to work on Amazing Projects and Ideas
                        </HeadPrimary>
                        <HeadSecondary>
                            Send me an Email and let’s work together <VscTools className="tools" />
                        </HeadSecondary>
                        <ButtonNavigate to="/contact" darkBg={false} rounded={false} bold={false} slighBigFont={false} >Let's build Together !</ButtonNavigate>
                    </ContactText>
                </ContactWrapper>
            </ContactSection>
        </>
    )
}

export default Contact
