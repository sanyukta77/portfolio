import PropTypes from "prop-types";
import styles from "./frame-component.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.projectsContentParent, className].join(" ")}>
      <div className={styles.projectsContent}>
        <img className={styles.unionIcon} alt="" src="/union.svg" />
        <div className={styles.projectsHeader}>
          <div className={styles.projectsTitle}>
            <h1 className={styles.projects}>PROJECTS</h1>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.projectCardChild} />
            <div className={styles.pixel4Xl}>
              <div className={styles.deviceParent}>
                <img className={styles.deviceIcon} alt="" src="/device.svg" />
                <img className={styles.depthIcon} alt="" src="/depth.svg" />
              </div>
              <img className={styles.portsIcon} alt="" src="/ports.svg" />
              <div className={styles.topElementsParent}>
                <div className={styles.topElements}>
                  <div className={styles.top}>
                    <img
                      className={styles.polyline158Icon}
                      alt=""
                      src="/polyline-158.svg"
                    />
                    <img
                      className={styles.polyline157Icon}
                      alt=""
                      src="/polyline-157.svg"
                    />
                  </div>
                </div>
                <div className={styles.dimensionsLabelsParent}>
                  <div className={styles.dimensionsLabels}>
                    <img
                      className={styles.dimensionsIcon}
                      loading="lazy"
                      alt=""
                      src="/dimensions.svg"
                    />
                    <img
                      className={styles.screenIcon}
                      alt=""
                      src="/screen@2x.png"
                    />
                  </div>
                  <div className={styles.buttonsWrapper}>
                    <div className={styles.buttons}>
                      <img
                        className={styles.polyline160Icon}
                        alt=""
                        src="/polyline-160.svg"
                      />
                      <img
                        className={styles.polyline159Icon}
                        loading="lazy"
                        alt=""
                        src="/polyline-159.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.pixel4Xl1}>
              <div className={styles.deviceGroup}>
                <img className={styles.deviceIcon1} alt="" src="/device.svg" />
                <img className={styles.depthIcon1} alt="" src="/depth.svg" />
              </div>
              <img className={styles.portsIcon1} alt="" src="/ports.svg" />
              <div className={styles.frameParent}>
                <div className={styles.topWrapper}>
                  <div className={styles.top1}>
                    <img
                      className={styles.polyline158Icon1}
                      alt=""
                      src="/polyline-158.svg"
                    />
                    <img
                      className={styles.polyline157Icon1}
                      alt=""
                      src="/polyline-157.svg"
                    />
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.dimensionsParent}>
                    <img
                      className={styles.dimensionsIcon1}
                      alt=""
                      src="/dimensions.svg"
                    />
                    <img
                      className={styles.screenIcon1}
                      alt=""
                      src="/screen-1@2x.png"
                    />
                  </div>
                  <div className={styles.buttonsContainer}>
                    <div className={styles.buttons1}>
                      <img
                        className={styles.polyline160Icon1}
                        alt=""
                        src="/polyline-160.svg"
                      />
                      <img
                        className={styles.polyline159Icon1}
                        alt=""
                        src="/polyline-159.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.projectTitleContainer}>
        <div className={styles.littleLemonApp}>LITTLE LEMON APP PROTOTYPE</div>
      </div>
      <div className={styles.projectMockup}>
        <div className={styles.pixel4Xl2}>
          <div className={styles.deviceComponents}>
            <img className={styles.deviceIcon2} alt="" src="/device.svg" />
            <img className={styles.depthIcon2} alt="" src="/depth.svg" />
          </div>
          <img className={styles.portsIcon2} alt="" src="/ports.svg" />
          <div className={styles.topComponents}>
            <div className={styles.topElements1}>
              <div className={styles.top2}>
                <img
                  className={styles.polyline158Icon2}
                  alt=""
                  src="/polyline-158.svg"
                />
                <img
                  className={styles.polyline157Icon2}
                  alt=""
                  src="/polyline-157.svg"
                />
              </div>
            </div>
            <div className={styles.dimensionsComponents}>
              <div className={styles.screenDimensions}>
                <img
                  className={styles.dimensionsIcon2}
                  alt=""
                  src="/dimensions.svg"
                />
                <img
                  className={styles.screenIcon2}
                  alt=""
                  src="/screen-2@2x.png"
                />
              </div>
              <div className={styles.screenButtons}>
                <div className={styles.buttons2}>
                  <img
                    className={styles.polyline160Icon2}
                    alt=""
                    src="/polyline-160.svg"
                  />
                  <img
                    className={styles.polyline159Icon2}
                    alt=""
                    src="/polyline-159.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.prototypeSpacingIcon}
          alt=""
          src="/frame-1.svg"
        />
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
