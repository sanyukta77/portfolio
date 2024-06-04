import { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./frame-component1.module.css";

const FrameComponent1 = forwardRef((props,ref) => {
  const {className} = props;
  return (
    <div ref = {ref}className={[styles.skillsHeaderParent, className].join(" ")}>
      <div className={styles.skillsHeader}>
        <h1 className={styles.skills}>SKILLS</h1>
      </div>
      <div className={styles.skillsContent}>
        <div className={styles.skillsVisuals}>
          <div className={styles.skillsIconsContainer}>
            <img
              className={styles.skillsIcons}
              loading="lazy"
              alt=""
              src="/rectangle-2@2x.png"
            />
            <img
              className={styles.skillsIcons1}
              loading="lazy"
              alt=""
              src="/rectangle-4@2x.png"
            />
            <img
              className={styles.skillsIcons2}
              loading="lazy"
              alt=""
              src="/rectangle-5@2x.png"
            />
            <img
              className={styles.skillsIcons3}
              loading="lazy"
              alt=""
              src="/rectangle-3@2x.png"
            />
            <img
              className={styles.skillsIcons4}
              alt=""
              src="/rectangle-5-1@2x.png"
            />
            <img
              className={styles.skillsIcons5}
              alt=""
              src="/rectangle-4-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.skillsList}>
          <div className={styles.skillsColumn}>
            <div className={styles.skillItem}>
              <div className={styles.skillName}>
                <b className={styles.html}>HTML</b>
              </div>
              <div className={styles.frame}>
                <div className={styles.cSSItems}>
                  <b className={styles.css}>CSS</b>
                  <b className={styles.css1}>CSS</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.skillItem1}>
            <div className={styles.skillName1}>
              <div className={styles.skillItem2}>
                <div className={styles.skillName2}>
                  <div className={styles.python}>PYTHON</div>
                </div>
                <div className={styles.javaScript}>
                  <p className={styles.java}>JAVA</p>
                  <p className={styles.script}>SCRIPT</p>
                </div>
              </div>
              <div className={styles.skillName3}>
                <div className={styles.react}>REACT</div>
              </div>
            </div>
            <div className={styles.skillName4}>
              <div className={styles.figma}>FIGMA</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.skillsVisuals1}>
        <div className={styles.visualsContainer}>
          <div className={styles.visualsRow}>
            <img
              className={styles.emptyVisualIcon}
              loading="lazy"
              alt=""
              src="/frame@2x.png"
            />
            <img
              className={styles.visualsRowChild}
              loading="lazy"
              alt=""
              src="/rectangle-6@2x.png"
            />
            <div className={styles.visualsPair}>
              <img
                className={styles.visualsPairItems}
                alt=""
                src="/rectangle-3-1@2x.png"
              />
              <img
                className={styles.visualsPairItems1}
                alt=""
                src="/rectangle-2-1@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.skillsColumn1}>
          <div className={styles.skillItems}>
            <b className={styles.c}>C++</b>
          </div>
          <div className={styles.skillItems1}>
            <b className={styles.sql}>SQL</b>
          </div>
          <b className={styles.git}>GIT</b>
          <div className={styles.adobeSkills}>
            <div className={styles.premierePro}>
              <p className={styles.premiere}>PREMIERE</p>
              <p className={styles.pro}>PRO</p>
            </div>
            <b className={styles.afterEffects}>
              <p className={styles.after}>AFTER</p>
              <p className={styles.effects}>EFFECTS</p>
            </b>
          </div>
        </div>
      </div>
    </div>
);
});

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
