import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Chat from "../components/Chat";
import Video from "../components/Video";


export default function Home() {
  const user = useSelector((state: any) => state.chat.user);

  // const {id, name, username, type_user} = user;

  return (
    <div className="container-fluid h-100">
      <div className="row">
        <Video />
        <Chat user={user} />
      </div>
    </div>
  );
}
