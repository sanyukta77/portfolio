import PropTypes from "prop-types";
import styles from "./contact-icons.module.css";

const ContactIcons = ({ className = "" }) => {
  return (
    <div className={[styles.contactIcons, className].join(" ")}>
      <a href="mailto:sanyuktayelnare@gmail.com">
      <div className={styles.gmail}>
        <div className={styles.images1} />
        <div className={styles.gmailLabel}>
          <div className={styles.gmail1}>GMAIL</div>
        </div>
      </div>
      </a>
      <div className={styles.github}>
      <a href="https://github.com/sanyukta77" target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
        <div className={styles.githubLink}>
          <div className={styles.githubIcon}>
            <div className={styles.githubLogoGitHubIconWith} />
          </div>
          <b className={styles.github1}>GITHUB</b>
        </div>
        </a>
      </div>
      <div className={styles.linkedin}>
      <a href="https://www.linkedin.com/in/sanyukta-yelnare-7333b2239/" target="_blank" rel="noopener noreferrer" className={styles.linkedinLink}>
        <div className={styles.linkedinLink}>
          <div className={styles.linkedinIcon}>
            <div className={styles.images11} />
          </div>
          <div className={styles.linkedin1}>LINKEDIN</div>
        </div>
        </a>
      </div>
    </div>
  );
};

ContactIcons.propTypes = {
  className: PropTypes.string,
};

export default ContactIcons;
