import React from "react";

function Profile() {
  return (
    <div className="section black-section">
      <div className="inner-section">
        <img
          src="./src/components/images/profile.png"
          width="100%"
          className="all-profile"
        ></img>
        <div className="profile-button">
          <button className="view-all-works">VIEW ALL WORKS</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
