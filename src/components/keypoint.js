import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faPuzzlePiece,
  faCrosshairs,
} from "@fortawesome/free-solid-svg-icons";

function Keypoint() {
  return (
    <div className="">
      {/* <div className="keypoint-logo">
        <div className="trapezium">
          <div className="trapeziumTwo"></div>
        </div>
        <div className="trapezium">
          <div className="trapeziumTwo"></div>
        </div>
      </div> */}

      <div className="each-keypoint inner-section">
        <div className="row m-0 ">
          {/* START RESPONSIVE & MULTIPURPOSE */}
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 d-inline-flex p-0">
            <div className="trapezium">
              <div className="trapeziumTwo">
                <i className="trapezium-icon fas fa-briefcase"></i>
              </div>
            </div>
            <div className="keypoint">
              <div className="keypoint-title">RESPONSIVE & MULTIPURPOSE</div>
              <div className="keypoint-description">
                Desktops, Tablets & Phones
              </div>
              <div className="keypoint-details">
                Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc
                vestibulum fringilla accumsan. Praesent arcu turpis.
              </div>
            </div>
          </div>
          {/* END RESPONSIVE & MULTIPURPOSE */}

          {/* START EASY CUSTOMIZATION */}
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 d-inline-flex p-0">
            <div className="trapezium">
              <div className="trapeziumTwo">
                <i className="trapezium-icon fas fa-puzzle-piece"></i>
              </div>
            </div>
            <div className="keypoint">
              <div className="keypoint-title">EASY CUSTOMIZATION</div>
              <div className="keypoint-description">
                One Click Demo Content Installation
              </div>
              <div className="keypoint-details">
                Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc
                vestibulum fringilla accumsan. Praesent arcu turpis.
              </div>
            </div>
          </div>
          {/* END EASY CUSTOMIZATION */}

          {/* START UNLIMITED FEATURES */}
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 d-inline-flex p-0">
            <div className="trapezium">
              <div className="trapeziumTwo">
                <i className="trapezium-icon fas fa-star"></i>
              </div>
            </div>
            <div className="keypoint">
              <div className="keypoint-title">UNLIMITED FEATURES</div>
              <div className="keypoint-description">
                Shortcodes, Typography & Different Layouts
              </div>
              <div className="keypoint-details">
                Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc
                vestibulum fringilla accumsan. Praesent arcu turpis.
              </div>
            </div>
          </div>
          {/* END UNLIMITED FEATURES */}

          {/* START CLEAN & MODULAR CODING */}
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 d-inline-flex p-0">
            <div className="trapezium">
              <div className="trapeziumTwo">
                <i className="trapezium-icon fas fa-file-alt"></i>
              </div>
            </div>
            <div className="keypoint">
              <div className="keypoint-title">CLEAN & MODULAR CODING</div>
              <div className="keypoint-description">
                100% Clean, Valid & Well-Commented Coding
              </div>
              <div className="keypoint-details">
                Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc
                vestibulum fringilla accumsan. Praesent arcu turpis.
              </div>
            </div>
          </div>
          {/* END CLEAN & MODULAR CODING */}

          {/* START THE BEST E-COMMERCE SOLUTIONS */}
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 d-inline-flex p-0">
            <div className="trapezium">
              <div className="trapeziumTwo">
                <i className="trapezium-icon fas fa-shopping-cart"></i>
              </div>
            </div>
            <div className="keypoint">
              <div className="keypoint-title">
                THE BEST E-COMMERCE SOLUTIONS
              </div>
              <div className="keypoint-description">
                WooCommerce Fully Integration
              </div>
              <div className="keypoint-details">
                Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc
                vestibulum fringilla accumsan. Praesent arcu turpis.
              </div>
            </div>
          </div>
          {/* END THE BEST E-COMMERCE SOLUTIONS */}
          {/* START AWESOME FRIENDLY SUPPORT */}
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 d-inline-flex p-0">
            <div className="trapezium">
              <div className="trapeziumTwo">
                <i className="trapezium-icon fas fa-crosshairs"></i>
              </div>
            </div>
            <div className="keypoint">
              <div className="keypoint-title">AWESOME FRIENDLY SUPPORT</div>
              <div className="keypoint-description">
                Free Lifetime Support & Updates
              </div>
              <div className="keypoint-details">
                Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc
                vestibulum fringilla accumsan. Praesent arcu turpis.
              </div>
            </div>
          </div>
          {/* END AWESOME FRIENDLY SUPPORT */}
        </div>
      </div>
    </div>
  );
}
export default Keypoint;
