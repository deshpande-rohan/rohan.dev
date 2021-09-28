import React from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH2,
  HeroText,
  HeroSpecial,
  HeroBtnWrapper,
  EarthIcon,
} from "./HeroElements";
import { Button } from "../../ButtonElement";
import Typewriter from "typewriter-effect";
import video from "../../Videos/back.mp4";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg loop muted autoPlay src={video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH2>Rohan Deshpande</HeroH2>
        <HeroText>
          I am a&nbsp;
          <HeroSpecial>
            <Typewriter
              options={{
                strings: [
                  "Front End Developer",
                  "UI UX Designer",
                  "Photographer",
                ],
                autoStart: true,
                loop: true,
                pauseFor: 2000,
                delay: 60,
                deleteSpeed: 15,
                cursor: "_",
              }}
            />
          </HeroSpecial>
        </HeroText>
        <HeroBtnWrapper>
          <Button
            to="about"
            black={true}
            dark={true}
            normal_font={true}
            normal_padding={true}
            animated={true}
            rounded={false}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={20}
          >
            Explore <EarthIcon className="earthIcon" />
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
