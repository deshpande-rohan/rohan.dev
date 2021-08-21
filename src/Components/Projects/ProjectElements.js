import styled from 'styled-components'

export const ProjectsContainer = styled.div`
    background: #DBDBDB;
    min-height: 860px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 70px 0;
    -webkit-tap-highlight-color: transparent;
`;

export const Title = styled.h2`
    display: inline-block;
    font-size: 46px;
    font-weight: 600;
    letter-spacing: 2px;
    margin: 14px 0 28px 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(70, 70, 70, 0.38));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media only screen and (max-width: 480px) {
        font-size: 44px;
        margin: 12px 0 28px 0;
    }
`;

export const ProjectsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    padding: 20px 18px;

    @media screen and (max-width: 860px) {
        padding: 22px 20px;
    }
`;

export const ProjectCard = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1.5rem;
    padding: 20px 26px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 8px;

    &:not(:last-child) {
        margin-bottom: 54px;

        @media only screen and (max-width: 480px) {
            margin-bottom: 48px;
        }
    }

    &:nth-child(even) > .info {
        order: 2;

        @media screen and (max-width: 860px) {
            order: unset;
        }
    }

    @media only screen and (max-width: 860px) {
        width: 100%;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, minmax(1fr, max-content));
        grid-row-gap: 1rem;
        padding: 22px 24px;
    }
`;

export const ProjectInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media only screen and (max-width: 860px) {
        margin-bottom: 20px;
    }
`;

export const ProjectTitle = styled.h2`
    display: inline-block;
    font-size: 1.7rem;
    font-weight: 600;
    margin-bottom: 22px;
    background: linear-gradient(to right bottom, rgba(167, 119, 245, 0.81), rgba(146, 88, 240, 0.88));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media only screen and (max-width: 480px) {
        font-size: 1.6rem;
    }
`;

export const ProjectBio = styled.p`
    font-size: 18px;
    padding: 3px 6px;
    font-weight: 400;
    color: rgb(62, 62, 62);
    margin-bottom: 6px;

    @media only screen and (max-width: 480px) {
        font-size: 16px;
        margin-bottom: 4px;
    }
`;

export const ProjectDescription = styled.p`
    font-size: 18px;
    padding: 3px 6px;
    font-weight: 400;
    color: rgb(62, 62, 62);

    @media only screen and (max-width: 480px) {
        font-size: 16px;
    }
`;

export const ProjectStack = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 8px 0;
    margin-bottom: 15px;
    text-decoration: none;
    list-style: none;
`;

export const StackItem = styled.li`
    display: inline-block;
    text-align: center;
    font-size: 20px;
    backface-visibility: hidden;
    font-weight: 500;
    padding: 2px 8px;
    margin-bottom: 6px;
    color: rgba(69, 102, 220, 0.76);
    background: rgba(217, 120, 251, 0.15);
    border-radius: 8px;
    cursor: pointer;
    transition: box-shadow .3s, transform .2s ease-in;

    &:not(:last-child) {
        margin-right: 6px;
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: -3px -3px 4px rgba(255, 255, 255, 0.19), 2px 2px 4px rgba(0, 0, 0, 0.15);
    }

    @media only screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const ProjectLink = styled.a`
    display: inline-block;
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 6px 18px;
    color: rgba(255, 255, 255, 0.65);
    text-decoration: none;
    background: #000;
    text-align: center;
    border-radius: 100px;

    @media only screen and (max-width: 480px) {
        font-size: 1.1rem;
    }
`;

export const ProjectImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
    width: 480px;
    height: 320px;
    object-fit: cover;
    border-radius: 10px;
    overflow: hidden;
    backdrop-filter: blur(20px);
    transition: 0.2s linear;
    cursor: pointer;

    &:hover {
        transform: scale(1.02);
    }

    @media only screen and (max-width: 560px) {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

