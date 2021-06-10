import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faPuzzlePiece,
  faCrosshairs,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

function SkillsProgress() {
  return (
    <div>
      <div className="section-description">
        We're good and experienced at different things and areas and we promise
        about qulity of our works
      </div>
      {/* START PROGRESS CIRCLE */}
      <div className="container p-0">
        <div className="row">
          {/* //START WEB DESIGN */}
          <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 py-2">
            <div className="progress web-design-progress">
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value">75%</div>
            </div>
            <div className="progress-label">WEB DESIGN</div>
          </div>
          {/* //END WEB DESIGN */}

          {/* //START WEB DEVELOPMENT */}
          <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 py-2">
            <div className="progress web-development-progress">
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value">92%</div>
            </div>
            <div className="progress-label">WEB DEVELOPMENT</div>
          </div>
          {/* //END WEB DEVELOPMENT */}

          {/* //START SPEED OPTIMIZATION */}
          <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 py-2">
            <div className="progress speed-optimization-progress">
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value">68%</div>
            </div>
            <div className="progress-label">SPEED OPTIMIZATION</div>
          </div>
          {/* //END SPEED OPTIMIZATION */}

          {/* //START CUSTOMER SUPPORT */}
          <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 py-2">
            <div className="progress customer-support-progress">
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value">100%</div>
            </div>
            <div className="progress-label">WEB DEVELOPMENT</div>
          </div>
          {/* //END CUSTOMER SUPPORT */}

          {/* //START MARKETING */}
          <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 py-2">
            <div className="progress marketing-progress">
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value">83%</div>
            </div>
            <div className="progress-label">WEB DEVELOPMENT</div>
          </div>
          {/* //END MARKETING */}

          {/* //START ADVERTISEMENT */}
          <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 py-2">
            <div className="progress advertisement-progress">
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value">50%</div>
            </div>
            <div className="progress-label">WEB DEVELOPMENT</div>
          </div>
          {/* //END ADVERTISEMENT */}
        </div>
      </div>
    </div>
  );
}

export default SkillsProgress;
