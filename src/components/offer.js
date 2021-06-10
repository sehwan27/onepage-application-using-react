import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faPuzzlePiece,
  faCrosshairs,
} from "@fortawesome/free-solid-svg-icons";

function Offer() {
  return (
    <div className="section">
      <div className="inner-section">
        <div className="section-title">
          <div className="line"></div>
          <div className="what-we-offer">
            <span className="what-we">
              WHAT WE&nbsp;
              <span className="offer">OFFER</span>
            </span>
          </div>
        </div>
        <div className="section-description">
          We offer our customers the best service & solutions, this is our main
          services list
        </div>
        <div className="icon-group row w-100 m-0">
          {/* START RESPONSIVE AND MULTIPURPOSE */}
          <div className="each-icon col-md-4 p-0">
            <div className="each-icon-container">
              <div className="icon">
                <FontAwesomeIcon icon={faDesktop} />
              </div>
            </div>
            <div className="icon-description">
              <div className="icon-title">RESPONSIVE & MULTIPURPOSE</div>
              <div className="icon-text">
                Proin in magna a ipsum viverra scelerisq enec turp, Nunc
                vestibulum fringilla accumsan ornare quis.
              </div>
            </div>
            <div className="button-container">
              <button className="read-more">READ MORE</button>
            </div>
          </div>
          {/* END RESPONSIVE AND MULTIPURPOSE */}

          {/* START EASY CUSTOMIZATION */}
          <div className="each-icon col-md-4 p-0">
            <div className="each-icon-container">
              <div className="icon icon-green">
                <FontAwesomeIcon icon={faPuzzlePiece} />
              </div>
            </div>
            <div className="icon-description">
              <div className="icon-title">EASY CUSTOMIZATION</div>
              <div className="icon-text">
                Proin in magna a ipsum viverra scelerisq enec turp, Nunc
                vestibulum fringilla accumsan ornare quis.
              </div>
            </div>
            <div className="button-container">
              <button className="read-more-green read-more ">READ MORE</button>
            </div>
          </div>
          {/* END EASY CUSTOMIZATION */}

          <div className="each-icon col-md-4 p-0">
            <div className="each-icon-container">
              <div className="icon">
                <FontAwesomeIcon icon={faCrosshairs} />
              </div>
            </div>
            <div className="icon-description">
              <div className="icon-title">AWESOME FRIENDLY SUPPORT</div>
              <div className="icon-text">
                Proin in magna a ipsum viverra scelerisq enec turp, Nunc
                vestibulum fringilla accumsan ornare quis.
              </div>
            </div>
            <div className="button-container">
              <button className="read-more">READ MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Offer;
