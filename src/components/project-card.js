import PropTypes from "prop-types";
import styles from "./project-card.module.css";

const ProjectCard = ({ className = "" }) => {
  return (
    <section className={[styles.projectCard, className].join(" ")}>
      <div className={styles.projectCardContent}>
        <div className={styles.projectDetails}>
          <div className={styles.projectDescription}>
            <img
              className={styles.projectDescriptionChild}
              alt=""
              src="/group-4@2x.png"
            />
            <div className={styles.lemonBackground}>
              <img
                className={styles.subtractIcon}
                alt=""
                src="/subtract@2x.png"
              />
              <img
                className={styles.lemonBackgroundChild}
                loading="lazy"
                alt=""
                src="/rectangle-13@2x.png"
              />
              <img
                className={styles.lemonBackgroundItem}
                loading="lazy"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <img
                className={styles.lemonBackgroundInner}
                loading="lazy"
                alt=""
                src="/rectangle-11@2x.png"
              />
              <img
                className={styles.rectangleIcon}
                loading="lazy"
                alt=""
                src="/rectangle-10@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.projectTitles}>
          <div className={styles.websiteTitle}>
            <div className={styles.responsiveReactLittle}>
              RESPONSIVE REACT LITTLE LEMON WEBSITE
            </div>
          </div>
          <div className={styles.projectTitle}>
            <div className={styles.liscencePlateDetection}>
              LISCENCE PLATE DETECTION SYSTEM
            </div>
            <img
              className={styles.projectTitleChild}
              loading="lazy"
              alt=""
              src="/group-5@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

ProjectCard.propTypes = {
  className: PropTypes.string,
};

export default ProjectCard;
