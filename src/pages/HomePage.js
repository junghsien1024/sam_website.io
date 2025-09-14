import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";

// Import images
import selfImage from "../assets/images/self.jpg";
import work1 from "../assets/images/tusimple.png";
import work2 from "../assets/images/Amazon_logo.png";
import work3 from "../assets/images/research.JPG";
import project1 from "../assets/images/overall.JPG";
import project2 from "../assets/images/ant.png";
import project3 from "../assets/images/AMR.png";
import logo1 from "../assets/images/DayLife_logo.png";
import logo2 from "../assets/images/Meowow_logo.png";
import logo3 from "../assets/images/BeBetterMe_logo.jpeg";

const HeroSection = styled(Section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 50%, #1e40af 100%);
  color: white;
  position: relative;
  overflow: hidden;
  padding-top: 70px; /* Account for fixed header */

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.05"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  width: 100%;
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: ${({ theme }) => theme.spacing["4xl"]};
  align-items: start;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: ${({ theme }) => theme.spacing["2xl"]};
  }
`;

const HeroImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;

  img {
    width: 100%;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    border: 4px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    max-height: 300px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 250px;

    img {
      height: 250px;
      max-width: 250px;
      max-height: 250px;
    }
  }
`;

const HeroText = styled.div`
  h1 {
    font-size: ${({ theme }) => theme.fontSizes["5xl"]};
    font-weight: 700;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    background: linear-gradient(45deg, #fff, #e0e7ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSizes["4xl"]};
    }
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: 1.8;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    opacity: 0.9;
  }
`;

const IntroSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const IntroTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: 600;
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  opacity: 0.95;
`;

const IntroText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: 1.7;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  opacity: 0.9;
`;

const HighlightText = styled.span`
  color: #fbbf24;
  font-weight: 600;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

const TechTag = styled.span`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const HeroButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
`;

const HeroButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing["2xl"]}`};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  min-width: 160px;

  ${({ variant }) => {
    if (variant === "primary") {
      return `
        background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
        color: #1f2937;
        border: 2px solid #fbbf24;
        box-shadow: 0 4px 15px rgba(251, 191, 36, 0.3);
        
        &:hover {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          border-color: #f59e0b;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(251, 191, 36, 0.4);
        }
      `;
    } else {
      return `
        background: rgba(255, 255, 255, 0.1);
        color: white;
        border: 2px solid rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(10px);
        
        &:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
        }
      `;
    }
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing["2xl"]};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const SectionButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing["2xl"]};
`;

const HomePage = () => {
  const workExperience = [
    {
      image: work1,
      title: "Sensor Application Engineer",
      description:
        "Develop testing and truck bring-up applications for the internal team at TuSimple.",
    },
    {
      image: work2,
      title: "Software Development Engineer",
      description:
        "Building scalable QA platforms and AI-driven test automation at Amazon Game Studios, reducing query times by 99%.",
    },
    {
      image: work3,
      title: "Research Assistant",
      description:
        "Conducted research in flexible electronics and mechanical design at Penn State.",
    },
  ];

  const projects = [
    {
      image: logo1,
      title: "DayLife",
      description:
        "A location-based social media platform that allows people to place 3D objects in AR world and share their daily lives.",
    },
    {
      image: logo2,
      title: "Meowow",
      description:
        "AI-powered iOS app that translates cat behaviors and sounds, featuring custom ML models and automated video generation.",
    },
    {
      image: logo3,
      title: "BeBetterMe",
      description:
        "Mood journaling iOS app with AI companion, offering emotional wellness tracking and personalized insights.",
    },
  ];

  const robotics = [
    {
      image: project1,
      title: "Dynamic Autonomous Robots",
      description:
        "Converted RC cars into autonomous robots with distance sensors, microprocessors, and Bluetooth.",
    },
    {
      image: project2,
      title: "Ant Subtractors",
      description:
        "Explored merging robotic and biological fabrication systems for biological advantages.",
    },
    {
      image: project3,
      title: "Autonomous Mobile Robots",
      description:
        "Designed localization algorithms for virtual robots to map environments and avoid obstacles.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Sam Wei - Electrical Engineer & Software Developer</title>
        <meta
          name="description"
          content="Sam Wei is an Electrical and Computer Engineer with experience in sensor applications, software development, and AR/VR technologies."
        />
      </Helmet>

      <HeroSection padding="0">
        <SectionContent>
          <HeroContent>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <HeroImage>
                <img src={selfImage} alt="Sam Wei" />
              </HeroImage>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <HeroText>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Hi, I'm Sam Wei
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <IntroSection>
                    <IntroTitle>Software Engineer & AI Enthusiast</IntroTitle>
                    <IntroText>
                      I hold a Master's degree in Electrical and Computer
                      Engineering from Cornell University. Currently at{" "}
                      <HighlightText>Amazon Game Studios</HighlightText>, I
                      design and build scalable internal platforms that
                      streamline QA and testing workflows.
                    </IntroText>
                  </IntroSection>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <IntroSection>
                    <IntroTitle>Key Achievements</IntroTitle>
                    <IntroText>
                      • <HighlightText>75% reduction</HighlightText> in QA
                      preparation time through AI-driven test automation
                      <br />• <HighlightText>99%+ improvement</HighlightText> in
                      query latency with real-time data pipelines
                      <br />• Built internal certification services improving
                      operational efficiency across teams
                    </IntroText>
                  </IntroSection>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <IntroSection>
                    <IntroTitle>Technical Skills</IntroTitle>
                    <TechStack>
                      <TechTag>Python</TechTag>
                      <TechTag>C#</TechTag>
                      <TechTag>TypeScript</TechTag>
                      <TechTag>React</TechTag>
                      <TechTag>AI/ML</TechTag>
                      <TechTag>System Design</TechTag>
                      <TechTag>iOS Development</TechTag>
                      <TechTag>Full-Stack</TechTag>
                    </TechStack>
                  </IntroSection>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <IntroSection>
                    <IntroTitle>Personal Projects</IntroTitle>
                    <IntroText>
                      Creator of <HighlightText>Meowow</HighlightText> (cat
                      behavior translator with custom ML models) and{" "}
                      <HighlightText>BeBetterMe</HighlightText> (AI-powered mood
                      journal). Passionate about building user-focused software
                      that delivers real value.
                    </IntroText>
                  </IntroSection>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "10px",
                    paddingBottom: "20px",
                  }}
                >
                  <HeroButtons>
                    <HeroButton
                      as={Link}
                      to="/work"
                      variant="primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View My Work
                    </HeroButton>
                    <HeroButton
                      as={Link}
                      to="/portfolio"
                      variant="secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      See Projects
                    </HeroButton>
                  </HeroButtons>
                </motion.div>
              </HeroText>
            </motion.div>
          </HeroContent>
        </SectionContent>
      </HeroSection>

      <Section
        title="Work Experience"
        subtitle="Professional roles where I've made an impact"
      >
        <CardsGrid>
          {workExperience.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                image={work.image}
                title={work.title}
                description={work.description}
              />
            </motion.div>
          ))}
        </CardsGrid>
        <SectionButtons>
          <Button as={Link} to="/work" variant="primary" size="lg">
            Learn More About My Experience
          </Button>
        </SectionButtons>
      </Section>

      <Section
        title="Personal Projects"
        subtitle="Full-stack applications and web platforms I've built"
        background="#f8fafc"
      >
        <CardsGrid>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                image={project.image}
                title={project.title}
                description={project.description}
              />
            </motion.div>
          ))}
        </CardsGrid>
        <SectionButtons>
          <Button as={Link} to="/portfolio" variant="primary" size="lg">
            Explore All Projects
          </Button>
        </SectionButtons>
      </Section>

      <Section
        title="Robotics & Electronics"
        subtitle="Hardware projects and embedded systems I've developed"
      >
        <CardsGrid>
          {robotics.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                image={project.image}
                title={project.title}
                description={project.description}
              />
            </motion.div>
          ))}
        </CardsGrid>
        <SectionButtons>
          <Button as={Link} to="/portfolio" variant="primary" size="lg">
            View All Technical Projects
          </Button>
        </SectionButtons>
      </Section>
    </>
  );
};

export default HomePage;
