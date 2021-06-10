import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faQuoteRight,
  faCaretSquareLeft,
  faCaretSquareRight,
} from "@fortawesome/free-solid-svg-icons";

function Quotes() {
  return (
    <div className="section green-section">
      <div className="inner-section  quotes-section">
        <div className="diamond-shape black-diamond">
          <FontAwesomeIcon className="trapezium-icon" icon={faQuoteLeft} />
        </div>
        <div className="quote">
          <div className="person">
            <div className="person-name">alexis simpson</div>
            <div className="person-position">&nbsp;-CEO & Developer</div>
          </div>
          <div className="person-description">
            <FontAwesomeIcon className="trapezium-icon" icon={faQuoteRight} />
            Lorem ipsum dolor sit amet, laudantium, totam rem. Morbi sagittis,
            sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum
            mi sapien ut justo consequat magna, id molestie ipsum volutpat quis.
            <FontAwesomeIcon className="trapezium-icon" icon={faQuoteLeft} />
          </div>
        </div>

        <div className="slideshow-button">
          <FontAwesomeIcon
            className="trapezium-icon"
            icon={faCaretSquareRight}
          />
          <FontAwesomeIcon
            className="trapezium-icon"
            icon={faCaretSquareLeft}
          />
        </div>
      </div>
    </div>
  );
}

export default Quotes;
