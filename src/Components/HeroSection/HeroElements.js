import styled, { css, keyframes } from 'styled-components';
import { ImEarth } from 'react-icons/im';

const spin = keyframes`
    0% { transform: rotate(0deg); }
    50% { opacity: 0.8; }
    55% { opacity: 1; }
    100% { transform: rotate(360deg); }
`;

const spinAnimate = props => css`${spin} 8s infinite`;

export const HeroContainer = styled.div`
    background: #101010;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 6px 20px;
    margin-top: -20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const HeroH2 = styled.h2`
    font-size: 50px;
    font-family: 'Josefin Sans', sans-serif;
    color: rgba(255,255,255,0.78);
    font-weight: 300;
    letter-spacing: 0.01em;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const HeroText = styled.p`
    display: flex;
    align-items: center;
    font-size: 51px;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 300;
    margin-top: 30px;
    color: rgba(255,255,255,0.78);

    @media screen and (max-width: 970px) {
        flex-direction: column;
        font-size: 41px;
    }

    @media screen and (max-width: 580px) {
        font-size: 28px;
    }
`;

export const HeroSpecial = styled.p`
    display: inline-block;
    font-family: 'Josefin Sans', sans-serif;
    white-space: nowrap;
    padding: 6px 10px;
    font-weight: 400;
    background: linear-gradient(90deg, rgba(56, 224, 235, 0.35) 0%, rgba(31, 234, 234, 0.3) 100%);
    border-radius: 8px;
    cursor: pointer;

    @media screen and (max-width: 970px) {
        margin-top: 20px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 52px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const EarthIcon = styled(ImEarth)`
    margin-left: 8px;
    font-size: 20px;
    color: #fff;

    animation: ${spinAnimate};
    animation-timing-function: cubic-bezier(.48,.49,.5,.49);
`;