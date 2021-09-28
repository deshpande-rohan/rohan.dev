import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

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
    margin: 2px 12px 2px 0;
    cursor: pointer;

    @media only screen and (max-width: 520px) {
      width: 34px;
      height: 34px;
      transform: translateY(-6px);
      margin: 2px 6px 2px 0;
    }
  }

  @media only screen and (max-width: 520px) {
    margin-top: 1rem;
    margin-bottom: 1.8rem;
  }
`;

export const Name = styled.h2`
  font-family: "Josefin Sans", sans-serif;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.8px;
  white-space: nowrap;
  color: rgba(255, 255, 255, 0.65);
  transform: translateY(10px);

  @media only screen and (max-width: 520px) {
    font-size: 1.2rem;
    transform: translateY(5px);
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
    grid-template-columns: repeat(2, minmax(140px, 220px));
    grid-template-rows: repeat(2, 230px);
    grid-row-gap: 0.5rem;
    grid-column-gap: 0rem;
  }
`;

export const LinkSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 8px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  white-space: nowrap;
  margin-bottom: 16px;
  transition: 0.3s;

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
  color: rgba(255, 255, 255, 0.6);
  white-space: nowrap;
  cursor: pointer;

  &:after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: rgb(22, 213, 188);
    background: linear-gradient(
      90deg,
      rgba(22, 213, 188, 0.5326505602240896) 0%,
      rgba(148, 205, 233, 0.8687850140056023) 100%
    );
    transition: width 0.3s;
  }

  &:hover:after {
    width: 100%;
    transition: width 0.3s;
  }
`;

export const LinkRoute = styled(LinkRouter)`
  display: inline-block;
  padding: 4px 0;
  font-size: 1rem;
  text-decoration: none;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  white-space: nowrap;
  cursor: pointer;

  &:after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: rgb(123, 133, 235);
    background: linear-gradient(
      90deg,
      rgba(123, 133, 235, 0.6895133053221288) 0%,
      rgba(146, 113, 222, 0.4318102240896359) 100%
    );
    transition: width 0.3s;
  }

  &:hover:after {
    width: 100%;
    transition: width 0.3s;
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
    padding: 2px 0;
    border-radius: 2px;
    white-space: nowrap;
    background: rgb(122, 233, 114);
    background: linear-gradient(
      90deg,
      rgba(122, 233, 114, 0.711922268907563) 0%,
      rgba(69, 213, 224, 0.7511379551820728) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    & > .handIcon {
      font-size: 1.2rem;
      transform: translateY(3px);
      color: #d8860d;
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
