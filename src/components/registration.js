import React from "react";

function Registration() {
  return (
    <div className="section">
      <div className="inner-section">
        <div className="regTitle">Register Your Interest</div>

        <div className="reg-form">
          <div className="input-row">
            <div className="row w-100 p-0 m-0">
              <div className="col-md-6">
                <div className="input-col">
                  <input
                    className="form-control reg-input"
                    type="text"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-col">
                  <select className="custom-select reg-input">
                    <option disabled defaultValue>
                      Occupation
                    </option>
                    <option>Developer</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* second row */}
          <div className="input-row">
            <div className="row w-100 p-0 m-0">
              <div className="col-md-6">
                <div className="input-col">
                  <input
                    className="form-control reg-input"
                    type="email"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-col">
                  <input
                    className="form-control reg-input"
                    type="tel"
                    placeholder="Contact No"
                    pattern="[0-9]{3}-[0-9]{8}"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* message */}
          <div className="input-row">
            <div className="row w-100 p-0 m-0">
              <div className="col-md-6">
                <div className="input-col">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* //submit button */}
          <div className="input-row">
            <div className="row w-100 p-0 m-0">
              <div className="col-md-6">
                <div className="input-col">
                  <button className="submit-button" type="submit">
                    SUBMIT MESSAGE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
