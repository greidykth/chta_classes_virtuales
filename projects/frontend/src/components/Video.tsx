import React from "react";

export default function Video() {
  return (
    <div className="col-lg-8 col-md-7 p-0 d-flex flex-column align-items-center justify-content-center mt-4 h-100">
        <h1>Nombre de clase</h1>
      <video src="tu_video.mp4" width="100%" height="100%" controls></video>
    </div>
  );
}
