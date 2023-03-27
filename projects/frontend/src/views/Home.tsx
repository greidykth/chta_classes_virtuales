import React from "react";
import { useSelector } from "react-redux";
import Chat from "../components/Chat";
import Video from "../components/Video";

const initialUser = {
  id: 0,
  name: "",
  username: "",
  type_user: "",
  active_class_id: 0,
};

export default function Home() {
  const chat = useSelector((state: any) => state);
  const user = chat.user ? chat.user : initialUser;

  console.log(chat);

  const {id, name, username, type_user} = user;

  return (
    <div className="container-fluid h-100">
      <div className="row">
        <Video />
        <Chat />
      </div>
    </div>
  );
}
