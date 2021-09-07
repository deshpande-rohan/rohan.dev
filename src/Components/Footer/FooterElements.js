import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 420px;
    background: #020202;
    padding: 22px 30px;
    -webkit-tap-highlight-color: transparent;

    @media only screen and (max-width: 860px) {
        height: 620px;
        padding: 20px 22px;
    }

    @media only screen and (max-width: 520px) {
        padding: 16px;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 8px 10px;

    @media only screen and (max-width: 520px) {
        width: 90%;
    }
`;

export const FooterHead = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    aligh-items: center;
    margin-bottom: 2rem;

    & > img {
        width: 44px;
        height: 44px;
        margin: 2px 10px 2px 0;
        cursor: pointer;

        @media only screen and (max-width: 520px) {
            width: 34px;
            height: 34px;
            transform: translateY(-4px);
            margin: 2px 6px 2px 0;
        }
    }

    @media only screen and (max-width: 520px) {
        margin-bottom: 1.6rem;
    } 
`;

export const Name = styled.h2`
    font-size: 1.75rem;
    font-weight: 500;
    letter-spacing: 1.01px;
    white-space: nowrap;
    color: rgba(255, 255, 255, 0.65);

    @media only screen and (max-width: 520px) {
        font-size: 1.20rem;
    }
`;

export const LinksWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, minmax(180px, 220px));
    grid-gap: 2.2rem;
    justify-content: center;
    padding: 10px;

    @media only screen and (max-width: 860px) {
        grid-template-columns: repeat(2, minmax(180px, 210px));
        grid-template-rows: repeat(2, 220px);
        grid-gap: 1.5rem;
    }

    @media only screen and (max-width: 520px) {
        grid-template-columns: repeat(2, minmax(140px, 180px));
        grid-template-rows: repeat(2, 230px);
        grid-row-gap: 0.5rem;
        grid-column-gap: 0;
    }
`;

export const LinkSection = styled.div`
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 8px;
`;

export const SectionTitle = styled.h2`
    font-size: 1.2rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.70);
    cursor: pointer;
    white-space: nowrap;
    margin-bottom: 16px;
    transition: .3s;

    &:hover {
        transform: translateY(-3px);
    }

    @media only screen and (max-width: 520px) {
        font-size: 1rem;
        margin-bottom: 12px;
    }
`;

export const Link = styled(LinkScroll)`
    display: inline-block;
    padding: 2px 0;
    font-size: 1rem;
    text-decoration: none;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.60);
    white-space: nowrap;
    cursor: pointer;

    &:after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: rgb(199,86,215);
        background: linear-gradient(135deg, rgba(199,86,215,0.5606617647058824) 0%, rgba(0,28,230,0.6727065826330532) 100%);        
        transition: width .3s;
    }

    &:hover:after {
        width: 100%;
        transition: width .3s;
    }
`;

export const LinkRoute = styled(LinkRouter)`
    display: inline-block;
    padding: 4px 0;
    font-size: 1rem;
    text-decoration: none;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.60);
    white-space: nowrap;
    cursor: pointer;

    &:after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: rgb(86,215,101);
        background: linear-gradient(90deg, rgba(86,215,101,0.908000700280112) 0%, rgba(70,230,0,0.10688025210084029) 100%);
        transition: width .3s;
    }

    &:hover:after {
        width: 100%;
        transition: width .3s;
    }
`;

export const Tip = styled.p`
    font-size: 1.04rem;
    font-weight: 500;
    line-height: 26px;
    word-wrap: break-word;
    color: rgba(255, 255, 255, 0.65);

    & span {
        display: inline-block;
        font-size: 1.1rem;
        padding: 4px 6px;
        border-radius: 2px;
        white-space: nowrap;
        background: rgb(215,108,238);
        background: linear-gradient(135deg, rgba(215,108,238,0.60) 0%, rgba(0,66,230,0.42) 100%);

        & > .handIcon {
            font-size: 1.2rem;
            transform: translateY(3px);
            color: #D8860D;
        }

        @media only screen and (max-width: 520px) {
            font-size: 1rem;
            padding: 3px;
        }
    }

    @media only screen and (max-width: 520px) {
        font-size: 1rem;
        line-height: 24px;
        font-weight: 400;
    }
`;