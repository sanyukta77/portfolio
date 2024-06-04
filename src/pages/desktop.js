import { useRef } from "react";
import FrameComponent1 from "../components/frame-component1";
import LaptopIcon from "../components/laptop-icon";
import FrameComponent from "../components/frame-component";
import ProjectCard from "../components/project-card";
import ContactIcons from "../components/contact-icons";
import styles from "./desktop.module.css";

const Desktop = () => {
  const Home = useRef(null)
  const aboutMe = useRef(null)
  const skills = useRef(null)
  const projects = useRef(null)
  const contact = useRef(null)

  const scrollToSection = (elementRef) => {
    if (elementRef.current) {
    window.scrollTo({
      top:elementRef.current.offsetTop,
      behavior: 'smooth'
    });
  }
  };



  return (
    <div className={styles.desktop2}>
      <img
        className={styles.planet82155321Icon}
        alt=""
        src="/planet8215532-1@2x.png"
      />
      <header className={styles.navigationContainer}>
        <div className={styles.navigation}>
          <a className={styles.home} onClick={() => scrollToSection(Home)}>HOME</a>
          <a className={styles.aboutMe}onClick={() => scrollToSection(aboutMe)}>{`ABOUT ME `}</a>
          <a className={styles.skills}onClick={() => scrollToSection(skills)}>SKILLS</a>
          <a className={styles.projects}onClick={() => scrollToSection(projects)}>PROJECTS</a>
          <a className={styles.contact}onClick={() => scrollToSection(contact)}>CONTACT</a>
        </div>
      </header>
      <section className={styles.mainContent}>
        <div className={styles.heroContentParent} ref={Home}>
          <div className={styles.heroContent}>
            <div className={styles.introduction}>
              <h2 className={styles.hiIm}>
                <span>Hi!</span>
                <span className={styles.im}> I’m</span>
              </h2>
            </div>
            <h1 className={styles.sanyuktaYelnare}>
              <p className={styles.sanyukta}>SANYUKTA</p>
              <p className={styles.yelnare}>YELNARE</p>
            </h1>
          </div>
          <div className={styles.frame}>
            <div className={styles.aFrontendDeveloper}>
              A FRONTEND DEVELOPER AND AI ENTHUSIAST
            </div>
            <div className={styles.resumeButtonContainer}>
            <a href="/Sanyukta Yelnare Resume.pdf"
             target="_blank" rel="noopener noreferrer" className={styles.viewResumeLink}>
              <b className={styles.viewResume}>VIEW RESUME</b>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.aboutContentWrapper}>
        <div className={styles.aboutContent} ref={aboutMe}>
          <div className={styles.aboutParagraph}>
            <h1 className={styles.aboutMe1}>
              <span>{`ABOUT `}</span>
              <span className={styles.me}>ME</span>
            </h1>
          </div>
          <p className={styles.describingOneselfIsContainer}>
            <span className={styles.describingOneselfIs}>
              Describing oneself is a challenging task, especially when their
              heart is as fluid as the wind. I like making websites look pretty
              and having fun with AI. I wear many hats, but one thing I know
              about myself is that I strive to be the hardest working person in
              the room. I’m addicted to growing in every aspect of my life.
            </span>
            <span className={styles.blankLine}>&nbsp;</span>
            <span className={styles.besidesDevelopmentYou}>
              Besides development, you might catch me secretly talking to a
              camera and filming YouTube videos. My days aren’t perfect, but
              doing what I love makes me the best version of myself.
            </span>
          </p>
        </div>
      </section>
      <FrameComponent1 ref={skills}/>
      <section className={styles.resumeMention}>
        <div className={styles.mentionedInResume}>MENTIONED IN RESUME</div>
      </section>
      <div className={styles.projectsPreview} ref = {projects}>
        <LaptopIcon />
        <FrameComponent />
      </div>
      <ProjectCard />
      <footer className={styles.contact1} ref={contact}>
        <div className={styles.contactContent}>
          <h1 className={styles.contact2}>CONTACT</h1>
          <ContactIcons />
        </div>
      </footer>
    </div>
  );
};

export default Desktop;
