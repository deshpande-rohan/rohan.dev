import React from 'react'
import { ProjectsContainer, Title, ProjectsWrapper, ProjectCard, ProjectInfo, ProjectTitle, ProjectBio, ProjectDescription, ProjectStack, StackItem, ProjectLink, ProjectImage, Image } from './ProjectElements'
import projectImg from '../../Images/project-1.png'
import { BsCodeSlash, BsArrowUpRight } from 'react-icons/bs'
import { Data } from './Data'

const Projects = () => {
    const capetalizeSkill = skill => skill.charAt(0).toUpperCase() + skill.slice(1);

    return (
        <>
            <ProjectsContainer>
                <Title>Projects <BsCodeSlash style={{ transform: 'translateY(9px)', color: 'rgba(0,0,0,0.5)' }} /></Title>
                <ProjectsWrapper>
                    {
                        Data.map((item) => (
                            <ProjectCard>
                                <ProjectInfo className="info">
                                    <ProjectTitle className="red">{item.title}</ProjectTitle>
                                    <ProjectBio>{item.bio}</ProjectBio>
                                    <ProjectDescription>
                                        {item.description}
                                    </ProjectDescription>
                                    <ProjectStack>
                                        {
                                            item.stack.map((stackItem) => (
                                                <StackItem>{capetalizeSkill(stackItem)}</StackItem>
                                            ))
                                        }
                                    </ProjectStack>
                                    <ProjectLink href="#">Live Project <BsArrowUpRight style={{ transform: 'translateY(3px)', color: 'rgba(255, 0, 0, 0.75)' }} /></ProjectLink>
                                </ProjectInfo>
                                <ProjectImage>
                                    <Image src={`./images/${item.imageName}`} alt="Project Image" />
                                </ProjectImage>
                            </ProjectCard>
                        ))
                    }
                    {/* <ProjectCard>
                        <ProjectInfo>
                            <ProjectTitle className="red">Covid-19 Tracker</ProjectTitle>
                            <ProjectBio>A Covid-19 tracker which can be used to track Global Stats of Covid-19 for all Nations.</ProjectBio>
                            <ProjectDescription>
                                This web app uses a mini world map to illustrate which nation is most affected by covid-19 and each Nation represents the number of total, recovered cases and deaths in the form of colored circles. It uses chart to show the growth rate for total, recoverd cases and deaths and chages accordingly to the selected nation which is created using chart.js It also consist of a table which is sorted according to the highest number of cases according to the nation.
                            </ProjectDescription>
                            <ProjectStack>
                                <StackItem>React.js</StackItem>
                                <StackItem>Material UI</StackItem>
                                <StackItem>Chart.js</StackItem>
                            </ProjectStack>
                            <ProjectLink href="#">Live Project</ProjectLink>
                        </ProjectInfo>
                        <ProjectImage>
                            <Image src={projectImg} alt="Project Image" />
                        </ProjectImage>
                    </ProjectCard> */}
                </ProjectsWrapper>
            </ProjectsContainer>
        </>
    )
}

export default Projects
