import React from 'react'
import { ContactSection, ContactWrapper, ImageContainer, ContactImage, ContactText, HeadPrimary, HeadSecondary, ContactButton } from './ContactElements'
import workTogether from '../../Images/workTogether.svg'
import { VscTools } from 'react-icons/vsc'

const Contact = () => {
    return (
        <>
            <ContactSection>
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
                        <ContactButton>Let's build Together !</ContactButton>
                    </ContactText>
                </ContactWrapper>
            </ContactSection>
        </>
    )
}

export default Contact
