import styled from 'styled-components'

export const ContactSection = styled.div`
    width: 100%;
    min-height: 860px;
    background: #101010;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-tap-highlight-color: transparent;
`;

export const ContactWrapper = styled.div`
    width: 85%;
    display: grid;
    height: 520px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.2rem;

    @media only screen and (max-width: 920px) {
        width: 80%;
        height: 600px;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 1fr);
        grid-row-gap: 8px;
    }
`;

export const ImageContainer = styled.div`
    padding: 10px 12px;
    overflow: hidden;
`;

export const ContactImage = styled.img`
    width: 100%;
    height: 100%;
    background-size: cover;
`;

export const ContactText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 24px 18px;

    @media only screen and (max-width: 920px) {
        align-items: center;
    }
`;

export const HeadPrimary = styled.h2`
    font-size: 44px;
    font-weight: 600;
    line-height: 52px;
    letter-spacing: 1.04px;
    margin-bottom: 23px;
    background: linear-gradient(to right, rgba(123, 218, 172, 0.78), rgba(32, 141, 89, 1));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media only screen and (max-width: 920px) {
        font-size: 38px;
        line-height: 48px;
        text-align: center; 
    }

    @media only screen and (max-width: 680px) {
        font-size: 32px;
        line-height: 43px;
    }

    @media only screen and (max-width: 490px) {
        font-size: 28px;
        line-height: 42px;
    }
`;

export const HeadSecondary = styled.h4`
    display: inline-block;
    font-size: 24px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.75);
    margin-bottom: 42px;
    letter-spacing: 1.02px;

    & .tools {
        transform: translateY(4px);
    }

    @media only screen and (max-width: 920px) {
        font-size: 22px;
        text-align: center;
    }

    @media only screen and (max-width: 680px) {
        font-size: 20px;
    }

    @media only screen and (max-width: 490px) {
        font-size: 18px;
    }
`;