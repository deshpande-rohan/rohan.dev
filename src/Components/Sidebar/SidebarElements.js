import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #101010;
  display: grid;
  align-items: center;
  z-index: 100;
  transition: all 0.3s cubic-bezier(0.63, 0.15, 0.19, 1.19);

  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  -webkit-tap-highlight-color: transparent;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
  transition: all 0.3s ease-out;

  &:hover {
    transform: rotate(90deg);
    color: red;
  }
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 70px);
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(5, 60px);
  }
`;

export const SidebarLink = styled(LinkScroll)`
  display: inline-block;
  text-align: center;
  margin: 0 auto;
  padding: 10px 16px;
  font-size: 1.5rem;
  text-decoration: none;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: cyan;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const SidebarBtn = styled.div`
  display: flex;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
`;

export const SideBtn = styled(LinkRouter)`
  color: rgba(255, 255, 255, 0.72);
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 3px;
  background-color: #101010;
  padding: 12px 24px;
  border-radius: 50px;
  text-decoration: none;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: -6px -6px 8px -1px rgba(255, 255, 255, 0.06),
    4px 4px 8px rgba(0, 0, 0, 0.5), inset -3px -3px 2px rgba(0, 0, 0, 0.3),
    inset 2px 2px 2px rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease-in-out;

  &:hover {
    color: rgba(255, 255, 255, 0.92);
  }

  &:active {
    transform: translateY(10px);
  }
`;
