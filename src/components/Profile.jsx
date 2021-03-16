import React from "react";

function Profile() {
  return (
    <div className="col-md-3 profile">
      <div className="icon_profile"> </div>
      <h5 className="fio">ФИО</h5>
      <p className="nik_name">@</p>
      <div className="icon_awesome">
        <i className="fa fa-phone" aria-hidden="true">
          {" "}
        </i>
        <i className="fa fa-video-camera" aria-hidden="true">
          {" "}
        </i>
        <i className="fa fa-envelope" aria-hidden="true">
          {" "}
        </i>
      </div>
      <h5 className="h5_social">Social</h5>
      <div className="social">
        <a href="#"> </a>
        <a href="#"> </a>
        <a href="#"> </a>
      </div>
      <h5 className="h5_media">Media</h5>
      <div className="media"> </div>
    </div>
  );
}

export default Profile;
