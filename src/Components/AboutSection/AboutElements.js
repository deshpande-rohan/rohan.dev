import styled from 'styled-components';

export const AboutContainer = styled.div`
    background: #DBDBDB;
    height: 830px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 20px;

    @media only screen and (max-width: 660px) {
        padding: 20px 15px;
    }
`;

export const AboutWrapper = styled.div`
    width: 920px;
    max-width: 1100px;
    height: 80%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 50px;

    @media only screen and (max-width: 890px) {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        align-items: start;
    }
`;

export const ImageSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const ImageWrapper = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 100%;
    padding: 12px;
    overflow: hidden;
    box-shadow: -15px -15px 30px rgba(255, 255, 255, 0.51), 7px 6px 20px rgba(0, 0, 0, 0.1);

    @media only screen and (max-width: 660px) {
        width: 250px;
        height: 250px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background-size: cover;
    background-position: bottom;
`;

export const AboutSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 16px;
`;

export const H2 = styled.h2`
    font-size: 40px;
    font-weight: 400;
    color: #101010;
    margin: 4px 2px; 
    margin-bottom: 18px;

    @media only screen and (max-width: 890px) {
        text-align: center;
    }

    @media only screen and (max-width: 660px) {
        font-size: 32px;
        margin-bottom: 16px;
    }
`;

export const Info = styled.div`
    width: 100%;
    margin-bottom: 22px;
`;

export const P = styled.p`
    font-size: 18px;
    font-weight: 300;
    line-height: 38px;
    letter-spacing: .8px;
    color: #000000;
    margin-bottom: 8px;

    @media only screen and (max-width: 890px) {
        text-align: center;
    }

    @media only screen and (max-width: 660px) {
        font-size: 16px;
        line-height: 30px;
    }

    @media only screen and (max-width: 440px) {
        font-size: 15px;
        line-height: 26px;
    }
`;

export const SocialSection = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 890px) {
        justify-content: center;
    }
`;
