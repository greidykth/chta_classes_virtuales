import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chat from "../components/Chat";
import Video from "../components/Video";
import { SocketContext } from "../context/socket";
import { Message } from "../interfaces";
import { set_message, set_messages } from "../store/actions";


export default function Home() {
  const user = useSelector((state: any) => state.chat.user);
  const messages = useSelector((state: any) => state.chat.messages);

  const socket = useContext(SocketContext); 
  const dispatch = useDispatch()

    useEffect(() => {
        // here we can use socket events and listeners
        socket.on('created_message', (args: any) => {

          if(!messages.some( (message: Message) => message.id === args.id)){
            dispatch(set_message(args));
          }
        });
        return () => socket.off();
    }, [])

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
