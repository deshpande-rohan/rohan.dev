import React from "react";
import {
  StackContainer,
  StackWrapper,
  StackInfo,
  StackHeading,
  StackHouse,
  StackCard,
  StackIcon,
  Icon,
  StackName,
  StackImage,
  LaptopImage,
} from "./StackElements";
import { Data } from "./Data";
import LaptopSVG from "../../Images/workLife.svg";

const StackSection = () => {
  return (
    <>
      <StackContainer id="skills">
        <StackWrapper>
          <StackInfo>
            <StackHeading>My Skills / Stack</StackHeading>
            <StackHouse>
              {Data.map((item) => (
                <StackCard key={Math.floor(Math.random() * 1000000)}>
                  <StackIcon className={item.isLearning}>
                    <Icon
                      src={`./images/${item.iconPath}.svg`}
                      alt={item.skillName}
                      className="icon"
                    />
                  </StackIcon>
                  <StackName>{item.skillName}</StackName>
                </StackCard>
              ))}
            </StackHouse>
          </StackInfo>
          <StackImage>
            <LaptopImage src={LaptopSVG} alt="Work Life" />
          </StackImage>
        </StackWrapper>
      </StackContainer>
    </>
  );
};

export default StackSection;
