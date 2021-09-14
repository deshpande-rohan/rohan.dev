import React from "react";
import {
  ProjectsContainer,
  Title,
  ProjectsWrapper,
  ProjectCard,
  ProjectInfo,
  ProjectTitle,
  ProjectBio,
  ProjectDescription,
  ProjectStack,
  StackItem,
  ProjectLink,
  ProjectImage,
  Image,
  Text,
} from "./ProjectElements";
import { BsCodeSlash, BsArrowUpRight } from "react-icons/bs";
import { Data } from "./Data";

const Projects = () => {
  const capetalizeSkill = (skill) =>
    skill.charAt(0).toUpperCase() + skill.slice(1);

  return (
    <>
      <ProjectsContainer id="projects">
        <Title>
          Projects{" "}
          <BsCodeSlash
            style={{ transform: "translateY(9px)", color: "rgba(0,0,0,0.5)" }}
          />
        </Title>
        <ProjectsWrapper>
          {Data.map((item) => (
            <ProjectCard key={Math.floor(Math.random() * 100)}>
              <ProjectInfo className="info">
                <ProjectTitle className="red">{item.title}</ProjectTitle>
                <ProjectBio>{item.bio}</ProjectBio>
                <ProjectDescription>{item.description}</ProjectDescription>
                <ProjectStack>
                  {item.stack.map((stackItem) => (
                    <StackItem key={stackItem}>
                      {capetalizeSkill(stackItem)}
                    </StackItem>
                  ))}
                </ProjectStack>
                <ProjectLink href="#">
                  Live Project{" "}
                  <BsArrowUpRight
                    style={{
                      transform: "translateY(3px)",
                      color: "rgba(255, 0, 0, 0.75)",
                    }}
                  />
                </ProjectLink>
              </ProjectInfo>
              <ProjectImage>
                <Image src={`./images/${item.imageName}`} alt="Project Image" />
              </ProjectImage>
            </ProjectCard>
          ))}
        </ProjectsWrapper>
        <Text>More Coming Up</Text>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
