import React from "react";
import { useSelector } from "react-redux";

export default function Video() {
  const user = useSelector((state: any) => state.chat.user);

  return (
    <div className="col-lg-8 col-md-7 p-0 d-flex flex-column align-items-center justify-content-center mt-4 h-100">
        <h1>Nombre de clase</h1>
      <video src={user.class?.url} width="100%" height="100%" controls></video>
    </div>
  );
}
