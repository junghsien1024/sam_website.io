import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import Section from "../components/Section";

// Import images
import photo1 from "../assets/images/ant_result.png";
import photo2 from "../assets/images/AMR_1.png";
import photo3 from "../assets/images/AMR.png";
import photo4 from "../assets/images/success.PNG";
import photo5 from "../assets/images/fail.PNG";
import photo6 from "../assets/images/thesis_block.png";

// Import PDFs
import file1 from "../assets/images/EE411 lab final report.pdf";
import file2 from "../assets/images/CAD_Sam Wei.pdf";
import file3 from "../assets/images/research report.pdf";
import file4 from "../assets/images/ZeroEnergyHomeReport.pdf";
import file5 from "../assets/images/Op_anp.pdf";
import file6 from "../assets/images/Laboratory 3 – Embedded Systems.pdf";
import file7 from "../assets/images/GEFinalReport.pdf";
import file8 from "../assets/images/Amp7_DesignReview_Sec3.pdf";
import file9 from "../assets/images/thesis_report.pdf";

const PortfolioContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} 0;
  margin-top: 70px; /* Account for fixed header */

  /* Ensure content is visible even if animations fail */
  opacity: 1 !important;

  /* Fallback for reduced motion */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
    }
  }
`;

const ProjectSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing["4xl"]};
  padding: ${({ theme }) => theme.spacing["2xl"]};
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.base};
  border: 1px solid ${({ theme }) => theme.colors.border};
  opacity: 1;
  transform: translateY(0);

  /* Simple fade-in animation */
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

const ProjectTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ProjectDescription = styled.div`
  p {
    font-size: ${({ theme }) => theme.fontSizes.base};
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primaryDark};
      text-decoration: underline;
    }
  }
`;

const ProjectImages = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  margin: ${({ theme }) => theme.spacing.xl} 0;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  img {
    max-width: 400px;
    width: 100%;
    height: auto;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    box-shadow: ${({ theme }) => theme.shadows.base};
    transition: transform 0.3s ease;
    object-fit: contain;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;

    img {
      max-width: 100%;
    }
  }
`;

const VideoContainer = styled.div`
  text-align: center;
  margin: ${({ theme }) => theme.spacing.xl} 0;

  iframe {
    max-width: 100%;
    height: 315px;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    box-shadow: ${({ theme }) => theme.shadows.base};
  }
`;

const VideoCaption = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textLight};
  font-style: italic;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const ImageCaption = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textLight};
  font-style: italic;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const UndergraduateProjects = styled.div`
  margin-top: ${({ theme }) => theme.spacing["4xl"]};
  padding: ${({ theme }) => theme.spacing["2xl"]};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const ProjectItem = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.2s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
    transform: translateY(-2px);
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primaryDark};
      text-decoration: underline;
    }
  }
`;

const PortfolioPage = () => {
  const projects = [
    {
      title: "Change Insights – Generative AI for Test Recommendations",
      content: (
        <ProjectDescription>
          <p>
            <strong>Amazon | Mar 2024 – Sep 2024</strong>
          </p>
          <p>
            Developed an AI-driven platform that automated test recommendations
            by analyzing Perforce changelists and TestRail data. Built a
            conversational interface for querying project status, summarizing
            changelists, and providing prioritized test recommendations.
          </p>
          <p>
            <strong>Technical Implementation:</strong>
          </p>
          <ul>
            <li>
              Integrated LLMs + RAG (via AWS Bedrock) with vector embeddings
            </li>
            <li>Fine-tuned prompt strategies and real-time data sync</li>
            <li>Developed UI dashboard in C#/Blazor</li>
            <li>Implemented backend/frontend AI capabilities</li>
          </ul>
          <p>
            <strong>Impact:</strong> Improved accuracy and usability of test
            recommendations, streamlined QA workflows, and reduced test
            preparation time.
          </p>
        </ProjectDescription>
      ),
    },
    {
      title: "TAP Notification System – Automated Test Failure Notification",
      content: (
        <ProjectDescription>
          <p>
            <strong>Amazon | May 2025 – Present</strong>
          </p>
          <p>
            Designed and implemented a scalable notification system automating
            the creation and routing of test failure reports for 600+ daily test
            runs and 1,800–3,000 notifications/day with &lt;5 min latency.
          </p>
          <p>
            <strong>Technical Implementation:</strong>
          </p>
          <ul>
            <li>
              Developed Jira integration for automated issue creation and
              updates
            </li>
            <li>Multi-channel alerting via email and Slack</li>
            <li>
              Architected multi-layered deduplication system (key-based,
              payload-based, status-based, dependency-tracking)
            </li>
            <li>
              Explored Generative AI summarization for consolidating test
              failures
            </li>
          </ul>
          <p>
            <strong>Impact:</strong> Unified fragmented QA workflows, minimized
            redundant alerts, accelerated issue resolution, and established a
            scalable foundation for automated test notifications. Reduced test
            failure documentation time from 24 hours to 30 minutes.
          </p>
        </ProjectDescription>
      ),
    },
    {
      title: "Meowow – Cat Behavior & Sound Translator",
      content: (
        <ProjectDescription>
          <p>
            <strong>Personal Project | iOS App | Sep 2024 – Present</strong>
          </p>
          <p>
            Designed and trained a custom ML model with TensorFlow and
            scikit-learn, achieving 75.6% accuracy in classifying cat sounds and
            behaviors. Developed a playful iOS app with SwiftUI and AWS backend,
            integrating AI-powered sound and image analysis to translate cat
            moods.
          </p>
          <p>
            <strong>Technical Implementation:</strong>
          </p>
          <ul>
            <li>
              Custom ML model with TensorFlow and scikit-learn (75.6% accuracy)
            </li>
            <li>iOS app built with SwiftUI and AWS backend integration</li>
            <li>
              AI-powered sound and image analysis for cat mood translation
            </li>
            <li>Automated data pipelines supporting 70+ new weekly users</li>
            <li>FFmpeg and AI prompting for automated video generation</li>
          </ul>
          <p>
            <strong>Impact:</strong> Showcased ability to bring an ML-powered
            consumer product to market end-to-end, blending AI, mobile
            development, and user growth strategies. Scaled to 4,000+ total
            downloads while maintaining high engagement and community
            interaction.
          </p>
          <p>
            <strong>App Store:</strong>{" "}
            <a
              href="https://apps.apple.com/us/app/meowow-cat-diary-ai-clips/id6737744844"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on App Store
            </a>
          </p>
        </ProjectDescription>
      ),
    },
    {
      title: "BeBetterMe – Mood Journal & AI Companion",
      content: (
        <ProjectDescription>
          <p>
            <strong>Personal Project | iOS App | Apr 2025 – Present</strong>
          </p>
          <p>
            Designed and developed a mood-tracking and journaling app with an
            AI-powered chat companion. Built modular front-end architecture with
            React Native (Expo) and integrated AWS Amplify for authentication,
            APIs, and data storage.
          </p>
          <p>
            <strong>Technical Implementation:</strong>
          </p>
          <ul>
            <li>React Native (Expo) for cross-platform mobile development</li>
            <li>AWS Amplify integration for authentication and data storage</li>
            <li>AI-powered chat companion for emotional support</li>
            <li>Modular front-end architecture for scalability</li>
            <li>Clean, user-friendly mobile experience design</li>
          </ul>
          <p>
            <strong>Impact:</strong> Demonstrated capability to design and ship
            a full-stack AI-driven mobile app, combining cloud integration with
            user-focused design for mental wellness. Delivered conversational AI
            workflows for emotional support and personal growth.
          </p>
          <p>
            <strong>App Store:</strong>{" "}
            <a
              href="https://apps.apple.com/us/app/bebetterme-mood-journal/id6744045793"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on App Store
            </a>
          </p>
        </ProjectDescription>
      ),
    },
    {
      title: "DayLife",
      content: (
        <ProjectDescription>
          <p>
            DayLife is a startup accelerator project that I am currently working
            on. It is a location-based social media platform that allows people
            to share their lives and place 3D objects in the AR world. I used
            AR.js and React to implement my idea into reality. Besides, I
            learned the knowledge of webGL and canvas while implementing 3D
            objects with three.js and A-frame.js.
          </p>
          <p>
            You can visit the website{" "}
            <a href="https://d4m.io" target="_blank" rel="noopener noreferrer">
              here
            </a>
            . There are about 100 users so far!!
          </p>
        </ProjectDescription>
      ),
    },
    {
      title: "NoMenu",
      content: (
        <ProjectDescription>
          <p>
            I found the market gap of weekday meals for office workers and
            stressed students. People who are very busy but have daily life
            routines such as WFH workers, students, and people whose
            organizations did not provide catering services often worry about
            "what we need to eat every day", but there is no ideal service
            satisfying fast-paced diets in an economical and fresh way.
          </p>
          <p>
            With this idea, I started building this website with ReactJS. I
            learned how to use websocket to design an online customer service
            and also used Stripe API to build a self-checkout system. I have
            asked about 50 test users to test my website and they all gave me
            positive feedback. With their feedback, I optimized the website and
            developed my own delivery system with Google Map API and integrated
            the website into a mobile application by using CapacitorJS.
          </p>
          <VideoContainer>
            <iframe
              title="nomenu"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/lWqS7ItfgP4"
              frameBorder="0"
              allowFullScreen
            />
            <VideoCaption>
              Video: The demonstration of the NoMenu website.
            </VideoCaption>
          </VideoContainer>
        </ProjectDescription>
      ),
    },
    {
      title: "Polyball",
      content: (
        <ProjectDescription>
          <p>
            In this project, I learned how to use web3JS to design an NFT mint
            website. My friend and I developed a web3 project called Polyball,
            which allows people to connect their NFT with real-world business.
            The website is connected with Polygon and we had about 1000 people
            in our discord community. You can check the website{" "}
            <a
              href="https://polyball.win"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
        </ProjectDescription>
      ),
    },
    {
      title: "Dynamic Autonomous Robots",
      content: (
        <ProjectDescription>
          <p>
            In this project, we will use Artemis Nano as our core processor.
            Besides, we will have ToF (time of flight) sensor and the IMU chip
            to combine precise acceleration and angular rate measurement in
            order to implement the dynamic behavior on the robot. The project is
            still in progress. Please see more detail on this{" "}
            <a
              href="https://junghsien1024.github.io/ECE4960.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              website
            </a>
            .
          </p>
        </ProjectDescription>
      ),
    },
    {
      title: "Ant Subtractors",
      content: (
        <ProjectDescription>
          <p>
            We learned that harvester ants are attracted to close range UV light
            and repelled by infrared wavelengths which can be used to modify the
            group behavior. Our project aims to show the ability to influence
            ant tunneling behavior in the nutrient gel by controlling UV light
            location using a static jig and a dynamic 6-axis robotic arm.
          </p>
          <p>
            We ran 8 experiments over the span of 2 months, with each test
            lasting between 3-7 days. Our control showed that the ants once
            acclimated to the arena, dug tunnels at 2mm per hour, although the
            digging rate was highly episodic, with periods of no digging
            interspersed with periods of rapid digging.
          </p>
          <ProjectImages>
            <div>
              <img src={photo1} alt="Ant experiment setup" />
              <ImageCaption>
                Figure: From Left to Right: Control, Robot Arm, Stationary
                Setups.
              </ImageCaption>
            </div>
          </ProjectImages>
        </ProjectDescription>
      ),
    },
    {
      title: "Autonomous Mobile Robots",
      content: (
        <ProjectDescription>
          <p>
            The project is to design a localization algorithm to make the
            virtual robot be able to detect the optional walls in the
            environment and pass through all the targets without hitting any
            obstacles. For the localization algorithm, we decided to use the
            particle filter at the initial searching.
          </p>
          <p>
            The robot will keep rotating until it finds the maximum depth
            direction from the start point, so it can consider more measurements
            and identify the location more precisely. Besides, we used the EKF
            beacon to support the particle filter localization. Once the robot
            detects the beacon, it will take the estimation pose and calculate
            the particle filter position, so the localization will not lose
            easily.
          </p>
          <ProjectImages>
            <div>
              <img src={photo2} alt="PRM result" />
              <img src={photo3} alt="Final competition test" />
              <ImageCaption>
                Figure: From Left to Right: The PRM result, and the final
                competition test.
              </ImageCaption>
            </div>
          </ProjectImages>
        </ProjectDescription>
      ),
    },
    {
      title: "The Smart-Cap Embedded System",
      content: (
        <ProjectDescription>
          <p>
            This is a Hack-a-Thon project which is to develop hardware and
            software prototypes that can improve our daily life. Our target
            customers are pedestrians, bikers, and disabilities. We developed
            the SmartCap system under the Linux environment with the Raspberry
            Pi 3+, a Pi camera, and buzzer sensors.
          </p>
          <p>
            We used OpenCV to train the dataset and design our "danger
            algorithm" that is able to detect an object and its speed. If the
            object's speed increases in an area of the screen, the system will
            determine as a dangerous situation. Then, LED lights and buzzers
            will adjust the flashing speed and beeping rate according to the
            speed of an object approaching behind. When the object reduces its
            speed, the lights, and buzzer stops.
          </p>
          <VideoContainer>
            <iframe
              title="smartcap"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/k0-3nVWgOy8"
              frameBorder="0"
              allowFullScreen
            />
            <VideoCaption>
              Video: The demonstration of the SmartCap.
            </VideoCaption>
          </VideoContainer>
        </ProjectDescription>
      ),
    },
    {
      title: "Lighter-Than-Air Robot Swarm",
      content: (
        <ProjectDescription>
          <p>
            The prototype is currently capable of manually-controlled flight. It
            uses a Raspberry Pi Zero W for computation, AprilTags detected
            through a Raspberry Pi camera for localization, and time-of-flight
            sensors for obstacle avoidance. This sensor data is sent over a WiFi
            connection to a base station program running on a PC, where a human
            operator can view it and send flight commands back to the drone.
          </p>
          <p>
            I designed a PCB for the prototype in order to improve its weight
            and performance. I also modified the flight-sensor program,
            Apriltags detection program, and the server control program of the
            system. Then, I tested the program performance of the system and
            assembled all the parts on the PCB. Last, I designed the projector
            and the motor chassis for the prototype.
          </p>
          <VideoContainer>
            <iframe
              title="lta"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/cP0ze7umuZ0"
              frameBorder="0"
              allowFullScreen
            />
            <VideoCaption>
              Video: The demonstration of the LTA robot.
            </VideoCaption>
          </VideoContainer>
        </ProjectDescription>
      ),
    },
    {
      title: "The Automatic Gain Control System",
      content: (
        <ProjectDescription>
          <p>
            The objective of the project is to develop an automatic gain control
            system, which includes a Raspberry pi model 3, an audio amplifier,
            an analog to digital converter (ADC), a digital to analog converter
            (DAC), and a speaker. Our primary goal is to build a system that can
            protect speakers by reducing the gain on the audio amplifier when
            distortion is detected, and increasing gain once it is safe to do
            so.
          </p>
          <p>
            The second goal is to create an automated DJ that is able to detect
            people and the temperature in the room so that we can determine what
            type of music we should play. We view this project as an embedded
            system that could be added onto a more powerful amplifier in order
            to protect expensive passive speakers. The detail could be seen in
            this{" "}
            <a
              href="https://courses.ece.cornell.edu/ece5990/ECE5725_Fall2019_Projects/Dec_13_Demo/Auto%20Gain%20Control/dap263_jw2597_Monday/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              website
            </a>
            .
          </p>
        </ProjectDescription>
      ),
    },
    {
      title: "Capital Letter Recognition with Harris Corner",
      content: (
        <ProjectDescription>
          <p>
            Harris corner detection is a corner detection operator that is often
            used within computer vision systems to extract certain kinds of
            features of an image. It is often used in image registration, 3D
            reconstruction, and object recognition. Our project is a letter
            recognition system using the harris corner algorithm on an FPGA.
          </p>
          <p>
            Our goal is to utilize the characteristics of the DE1-Soc board to
            implement the image processing parallelization. We use M10K blocks
            instead of normal registers to store pixel information to prevent
            exceeding the usage of the logic and the number of registers on the
            board.
          </p>
          <ProjectImages>
            <div>
              <img src={photo4} alt="Image recognition succeeds" />
              <img src={photo5} alt="Image recognition failed" />
              <ImageCaption>
                Figure: Image recognition succeeds. (left) Image recognition
                failed. (right).
              </ImageCaption>
            </div>
          </ProjectImages>
          <VideoContainer>
            <iframe
              title="harris"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/vaEQ_IAY9V8"
              frameBorder="0"
              allowFullScreen
            />
            <VideoCaption>
              Video: The Harris Corner Letter Recognition system Presentation.
            </VideoCaption>
          </VideoContainer>
        </ProjectDescription>
      ),
    },
    {
      title: "Multi-sensing flexible system used for real-time monitoring",
      content: (
        <ProjectDescription>
          <p>
            In my thesis, I used an instrument amplifier (AD623) to combine two
            signal inputs into one signal output. The input signal is applied to
            PNP transistors, acting as voltage buffers and providing a
            common-mode signal to the input amplifiers. An absolute value of 50
            kΩ resistors in each amplifier feedback assures gain
            programmability.
          </p>
          <p>
            Then, I used a passive second-order high pass filter and an active
            second order low pass filter to control the frequency range between
            0.5 Hz and 150 Hz. I also used a notch filter with a cutoff
            frequency at 60 Hz to reduce the impact of the noise. Last, I did
            several tests of the ECG sensor and it worked properly.
          </p>
          <ProjectImages>
            <div>
              <img src={photo6} alt="System block diagram" />
              <ImageCaption>Figure: System block diagram.</ImageCaption>
            </div>
          </ProjectImages>
          <p>
            If you are still interested, please click{" "}
            <a href={file9} target="_blank" rel="noreferrer">
              here
            </a>{" "}
            to see the complete thesis.
          </p>
        </ProjectDescription>
      ),
    },
  ];

  const undergraduateProjects = [
    { title: "Advanced silicon ICs fabrication", file: file1 },
    { title: "Boeing AH-64 Apache CAD model", file: file2 },
    {
      title: "Improvement of serpentine networks in crack resistance",
      file: file3,
    },
    { title: "Zero Energy Home", file: file4 },
    { title: "Op-Amp Design", file: file5 },
    { title: "Embedded Systems-Keypad Subsystem", file: file6 },
    { title: "Optimized Locomotive Alternative (GE)", file: file7 },
    { title: "Optical Theremin Design process", file: file8 },
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio - Sam Wei</title>
        <meta
          name="description"
          content="Sam Wei's portfolio showcasing web projects, robotics, embedded systems, and research work."
        />
      </Helmet>

      <Section
        title="Portfolio"
        subtitle="Projects and research work that showcase my technical skills and creativity"
      >
        <PortfolioContainer>
          {projects.map((project, index) => (
            <ProjectSection
              key={project.title}
              data-project-section
              style={{
                opacity: 1,
                transform: "translateY(0)",
                animation: "fadeInUp 0.6s ease-out forwards",
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <ProjectTitle>{project.title}</ProjectTitle>
              {project.content}
            </ProjectSection>
          ))}

          <UndergraduateProjects>
            <h3>Undergraduate Small Projects</h3>
            <ProjectList>
              {undergraduateProjects.map((project, index) => (
                <ProjectItem key={project.title}>
                  <a href={project.file} target="_blank" rel="noreferrer">
                    {project.title}
                  </a>
                </ProjectItem>
              ))}
            </ProjectList>
          </UndergraduateProjects>
        </PortfolioContainer>
      </Section>
    </>
  );
};

export default PortfolioPage;
