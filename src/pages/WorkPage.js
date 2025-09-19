import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import Section from "../components/Section";

// Import images
import photo1 from "../assets/images/s1.png";
import photo2 from "../assets/images/s2.png";
import photo3 from "../assets/images/lamp.png";
import photo4 from "../assets/images/heli.png";
import amazonBadge from "../assets/images/Amazon_bage.jpg";
import amazonStats from "../assets/images/Amazon_stat.jpg";
import amazonReward from "../assets/images/Amazon_reward.jpg";
import amazonContribution from "../assets/images/overall_contribution.PNG";

const WorkContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} 0;
  margin-top: 70px; /* Account for fixed header */
`;

const WorkItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing["4xl"]};
  padding: ${({ theme }) => theme.spacing["2xl"]};
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  /* Modern glass-morphism effect */
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.95);

  /* Subtle gradient border */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary} 0%,
      ${({ theme }) => theme.colors.accent} 50%,
      ${({ theme }) => theme.colors.primary} 100%
    );
    border-radius: ${({ theme }) => theme.borderRadius.xl}
      ${({ theme }) => theme.borderRadius.xl} 0 0;
  }

  /* Hover effect for modern feel */
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  /* Fallback animation */
  animation: fadeInUp 0.6s ease-out forwards;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const WorkHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const WorkTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const WorkCompany = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const WorkDuration = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: 500;
  margin: 0;
`;

const WorkDescription = styled.div`
  p {
    font-size: ${({ theme }) => theme.fontSizes.base};
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

const WorkImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.spacing.xl} 0;
  width: 100%;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({ theme }) => theme.colors.surface};
    padding: ${({ theme }) => theme.spacing.lg};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    box-shadow: ${({ theme }) => theme.shadows.md};
    border: 1px solid ${({ theme }) => theme.colors.border};
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    /* Subtle hover effect */
    &:hover {
      transform: translateY(-1px);
      box-shadow: ${({ theme }) => theme.shadows.lg};
      border-color: ${({ theme }) => theme.colors.primary};
    }

    /* Modern subtle background pattern */
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        135deg,
        rgba(37, 99, 235, 0.01) 0%,
        rgba(14, 165, 233, 0.005) 100%
      );
      pointer-events: none;
    }
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: 100%;

    &:hover {
      transform: translateY(-4px);
      box-shadow: ${({ theme }) => theme.shadows.lg};
    }
  }

  img {
    width: 100%;
    object-fit: contain;
    object-position: center;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.02);
    }
  }

  /* Badge image - square format, centered */
  > div:first-child img {
    height: 200px;
    max-width: 300px;
  }

  /* Rectangular images - full width */
  > div:not(:first-child) img {
    height: 200px;
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    > div {
      padding: ${({ theme }) => theme.spacing.md};
    }

    > div:first-child img {
      height: 150px;
    }

    > div:not(:first-child) img {
      height: 150px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    > div:first-child img {
      height: 120px;
    }

    > div:not(:first-child) img {
      height: 120px;
    }
  }
`;

const ImageCaption = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textLight};
  font-style: italic;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
`;

const ModalCaption = styled.p`
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
  margin-top: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const WorkPage = () => {
  const [modalImage, setModalImage] = useState(null);
  const [modalCaption, setModalCaption] = useState("");

  const openImageModal = (imageSrc, caption) => {
    setModalImage(imageSrc);
    setModalCaption(caption);
  };

  const closeImageModal = () => {
    setModalImage(null);
    setModalCaption("");
  };

  const workExperiences = [
    {
      title: "Software Development Engineer",
      company: "Amazon",
      duration: "Sep 2022 - Current",
      description: (
        <div>
          <p>
            As a Software Development Engineer at Amazon, I design, own, and
            launch internal services that revolutionize QA workflows and
            leadership visibility. My work focuses on AI-driven automation,
            scalable dashboards, and infrastructure modernization that delivers
            measurable business impact.
          </p>
          <p>
            <strong>Key Achievements:</strong>
          </p>
          <ul>
            <li>
              <strong>AI-Driven Test Automation Platform:</strong> Implemented
              Generative AI solutions for automated test recommendations and
              change analysis, reducing QA preparation time by 75% while
              ensuring safe adoption across Legal, QA, and BI teams.
            </li>
            <li>
              <strong>Test Insights Dashboard:</strong> Developed scalable
              dashboards with C# and MudBlazor, enabling customizable queries,
              data visualizations, and reducing operational costs by 31%.
            </li>
            <li>
              <strong>Infrastructure Modernization:</strong> Led TestRail
              infrastructure upgrade (v5.4 to v7.5) with API and webhook-based
              real-time updates, modernizing QA tools and improving reliability
              across Amazon Games QA teams.
            </li>
            <li>
              <strong>Performance Optimization:</strong> Reduced data query
              latency by 99% (10 minutes to 5 seconds) through S3-optimized
              incremental loading pipelines.
            </li>
            <li>
              <strong>Cross-functional Collaboration:</strong> Worked with users
              and 3+ teams to align on requirements, anticipate evolving
              business needs, and create technical roadmaps.
            </li>
          </ul>
          <p>
            My work combines full-stack development (C#/Blazor), cloud
            technologies (AWS, S3, Lambda), and AI integration (Generative AI,
            RAG, AWS Bedrock) to deliver business-critical tools that
            significantly improve QA productivity and operational efficiency.
          </p>
          <WorkImages>
            <div>
              <img
                src={amazonBadge}
                alt="Amazon Badge"
                onClick={() =>
                  openImageModal(amazonBadge, "Amazon Recognition Badge")
                }
              />
              <ImageCaption>Amazon Recognition Badge</ImageCaption>
            </div>
            <div>
              <img
                src={amazonStats}
                alt="Code Statistics"
                onClick={() =>
                  openImageModal(amazonStats, "My Code Statistics This Year")
                }
              />
              <ImageCaption>My Code Statistics This Year</ImageCaption>
            </div>
            <div>
              <img
                src={amazonReward}
                alt="Peer Shout-out Reward"
                onClick={() =>
                  openImageModal(amazonReward, "Peer Shout-out Recognition")
                }
              />
              <ImageCaption>Peer Shout-out Recognition</ImageCaption>
            </div>
            <div>
              <img
                src={amazonContribution}
                alt="Overall Code Contribution"
                onClick={() =>
                  openImageModal(
                    amazonContribution,
                    "Overall Code Contribution at Amazon"
                  )
                }
              />
              <ImageCaption>Overall Code Contribution at Amazon</ImageCaption>
            </div>
          </WorkImages>
        </div>
      ),
    },
    {
      title: "Sensor Software Application Engineer",
      company: "TuSimple",
      duration: "March 2021 - Aug 2022",
      description: (
        <div>
          <p>
            As a Sensor Software Application Engineer at TuSimple, I
            collaborated with 8+ cross-functional teams to develop internal
            automated and multiprocessing Python applications, accelerating
            configuration and verification processes by 600%.
          </p>
          <p>
            <strong>Key Achievements:</strong>
          </p>
          <ul>
            <li>
              <strong>Process Automation:</strong> Created black-box testing
              automation scripts to monitor and analyze data remotely, reducing
              12+ hours of manual effort weekly for the development team.
            </li>
            <li>
              <strong>API Development:</strong> Designed sensor verification and
              configuration APIs to support the onboard infrastructure team.
            </li>
            <li>
              <strong>Documentation & Quality:</strong> Authored over 100
              detailed testing reports and 15 comprehensive application tool
              documents to support QA efforts.
            </li>
            <li>
              <strong>Issue Resolution:</strong> Resolved 50+ reported
              functionality issues by collaborating with the QA team, ensuring
              product reliability and performance.
            </li>
            <li>
              <strong>Team Leadership:</strong> Mentored three engineers,
              delivering software and hardware solutions for the truck testing
              team, fostering team growth.
            </li>
          </ul>
          <p>
            This experience provided me with deep expertise in Python
            automation, cross-functional collaboration, and mentoring, while
            delivering measurable improvements in operational efficiency and
            team productivity.
          </p>
        </div>
      ),
    },
    {
      title: "Undergraduate Research Assistant",
      company: "Penn State",
      duration: "08/2017 - 05/2019",
      description: (
        <div>
          <p>
            I spent two years in Dr. Cheng's laboratory working on flexible
            electronics. My first research topic was "Improvement of serpentine
            networks for crack resistance". Serpentine-shaped structure offers
            great flexibility in turning their stiffness through changing the
            characteristic unit.
          </p>
          <WorkImages>
            <div>
              <img src={photo1} alt="Serpentine networks with holes" />
              <ImageCaption>Serpentine networks with holes</ImageCaption>
            </div>
            <div>
              <img src={photo2} alt="Serpentine networks without holes" />
              <ImageCaption>Serpentine networks without holes</ImageCaption>
            </div>
          </WorkImages>
          <p>
            My second research was my senior thesis "The design of a
            multi-sensing flexible system used for real-time monitoring". I
            developed a mobile health monitor that only cost $11 and the device
            can simultaneously collect and send multiple data packets to the
            mobile application. More details can be seen in the Portfolio
            section.
          </p>
        </div>
      ),
    },
    {
      title: "Lab Assistant",
      company: "Penn State",
      duration: "01/2016 - 05/2016",
      description: (
        <div>
          <p>
            I learned how to use SolidWorks in my freshman year and utilized
            those skills as a Laboratory Assistant. I assisted students with
            design projects, modeling software, and other activities. I had
            excellent interpersonal communication while teaching.
          </p>
          <WorkImages>
            <div>
              <img src={photo3} alt="Lamp CAD model" />
              <ImageCaption>Lamp SolidWorks model</ImageCaption>
            </div>
            <div>
              <img src={photo4} alt="Helicopter CAD model" />
              <ImageCaption>Helicopter SolidWorks model</ImageCaption>
            </div>
          </WorkImages>
          <p>
            I made two CAD models during my spare time, which can be seen above.
            This experience helped me develop strong technical communication
            skills and a deep understanding of 3D modeling principles.
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>Work Experience - Sam Wei</title>
        <meta
          name="description"
          content="Sam Wei's professional work experience including roles at TuSimple, Omnicell, and Penn State University."
        />
      </Helmet>

      <Section
        title="Work Experience"
        subtitle="My professional journey in engineering and technology"
      >
        <WorkContainer>
          {workExperiences.map((work, index) => (
            <WorkItem key={work.title}>
              <WorkHeader>
                <WorkTitle>{work.title}</WorkTitle>
                <WorkCompany>{work.company}</WorkCompany>
                <WorkDuration>{work.duration}</WorkDuration>
              </WorkHeader>
              <WorkDescription>{work.description}</WorkDescription>
            </WorkItem>
          ))}
        </WorkContainer>
      </Section>

      <AnimatePresence>
        {modalImage && (
          <ModalOverlay onClick={closeImageModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={closeImageModal}>×</CloseButton>
              <ModalImage src={modalImage} alt={modalCaption} />
              <ModalCaption>{modalCaption}</ModalCaption>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default WorkPage;
