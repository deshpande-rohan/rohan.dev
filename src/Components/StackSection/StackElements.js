import styled, { keyframes } from 'styled-components';

const blinkAnimation = keyframes`
    0% { background-color: #101010; }
    50% { background-color: rgba(255, 255, 255, 0.21); }
    100% { background-color: #101010; }
`;

export const StackContainer = styled.div`
    width: 100%;
    height: 860px;
    background-color: #101010;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 900px) {
        align-items: flex-start;
    }

    @media only screen and (max-width: 600px) {
        align-items: center;
    }
`;

export const StackWrapper = styled.div`
    width: 90%;
    height: 660px;
    max-width: 1200px;
    display: grid;
    align-items: center;
    grid-template-columns: minmax(max-content, 1fr) 1fr;
    grid-column-gap: 60px;
    padding: 20px 15px;
    color: #fff;
    
    @media only screen and (max-width: 900px) {
        height: 760px;
        grid-template-columns: 1fr;
        grid-template-rows: minmax(max-content, 1fr) 1fr;
        grid-row-gap: 20px;
        justify-items: center;
    }

    @media only screen and (max-width: 600px) {
        height: 820px;
        grid-row-gap: 30px;
    }
`;

export const StackInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 500px;

    @media only screen and (max-width: 900px) {
        align-items: center;
        margin-top: 30px;
    }

    @media only screen and (max-width: 600px) {
        align-items: flex-start;
        margin-top: 10px;
    }
`;

export const StackHeading = styled.h2`
    color: #D1D1D1;
    display: block;
    font-size: 32px;
    font-weight: 500;
    letter-spacing: 3px;
    margin-bottom: 36px;
    margin-left: 14px;

    @media only screen and (max-width: 600px) {
        margin-bottom: 26px;
        font-size: 28px;
    }
`;

export const StackHouse = styled.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(100px, 1fr));
    grid-template-rows: repeat(4, minmax(120px, 1fr));
    grid-gap: 12px;
    padding: 10px 6px;

    @media only screen and (max-width: 900px) {
        grid-gap: 8px;
    }

    @media only screen and (max-width: 600px) {
        grid-template-columns: repeat(4, minmax(80px, 1fr));
        grid-template-rows: repeat(5, minmax(100px, 1fr));
        grid-gap: 10px;
    }
`;

export const StackCard = styled.div`
    display: grid;
    grid-template-rows: 1fr max-content;
    justify-items: center;
    align-items: center;
    padding: 4px;
    transition: all 3s linear;
`;

export const StackIcon = styled.div`
    position: relative;
    width: 70px;
    max-width: 90px;
    min-height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 14px;
    color: #FB5E06;
    background: #101010;
    border-radius: 100%;
    box-shadow: 4px 2px 11px 1px #000000, -5px -4px 10px rgba(255, 255, 255, 0.08);
    cursor: pointer;
    transition: transform 0.3s cubic-bezier(.17,.67,.49,.98);

    &:hover {
        transform: scale(1.05);
    }

    &.true {
        background: rgba(255,255,255,0.09);
        animation-name: ${blinkAnimation};
        animation-duration: 4s;
        animation-iteration-count: infinite;
    }

    &.true::after {
        content: 'Learning 💻';
        position: absolute;
        width: 140px;
        left: calc(50% - 70px);
        bottom: 125%;
        font-size: 16px;
        font-weight: 500;
        text-align: center;
        color: black;
        background: #fff;
        padding: 8px;
        border-radius: 20px;
        transform: translateY(10px);
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s, transform 0.2s;
    }

    &.true:hover::after {
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
    }

    @media only screen and (max-width: 900px) {
        width: 60px;
        min-height: 60px;
        margin-bottom: 12px;
    }

    @media only screen and (max-width: 600px) {
        width: 55px;
        min-height: 55px;
        margin-bottom: 10px;
    }
`;

export const Icon = styled.img`
    width: 38px;
    height: 38px;
    background-size: cover;
    transition: all .3s ease-in;

    @media only screen and (max-width: 600px) {
        width: 36px;
        height: 36px;
    }
`;

export const StackName = styled.p`
    font-size: 13px;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 500;

    @media only screen and (max-width: 600px) {
        font-size: 11px;
    }
`;

export const StackImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LaptopImage = styled.img`
    width: 100%;
    height: 100%;
    background-size: cover;

    @media only screen and (max-width: 900px) {
        width: 50%;
        height: 50%;
    }

    @media only screen and (max-width: 600px) {
        width: 75%;
        height: 75%;
    }
`;