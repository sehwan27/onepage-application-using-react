import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faPuzzlePiece,
  faCrosshairs,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

import SkillsProgress from "./skillsProgress.js";

function Skills() {
  return (
    <div className="section black-section">
      <div className="inner-section">
        <div className="diamond-shape green-diamond">
          {/* <i className="fas fa-briefcase"></i> */}
          <FontAwesomeIcon icon={faBriefcase} />
        </div>

        <div className="section-title">
          <div className="what-we-offer">
            <span className="our-powerful">
              OUR POWERFUL
              <span className="offer" style={{backgroundColor:'transparent'}}>
                SKILLS
              </span>
            </span>
          </div>
        </div>

        <SkillsProgress></SkillsProgress>
      </div>
    </div>
  );
}

export default Skills;
