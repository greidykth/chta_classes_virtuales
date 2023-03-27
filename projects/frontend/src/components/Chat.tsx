import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { style, media } from "typestyle";
import useHttp from "../hooks/use-http";
import { Message, User } from "../interfaces";
import { set_messages } from "../store/actions";
import MessageChat from "./MessageChat";

const chatContainer = style(
  {
    height: "55vh",
  },
  media(
    { maxWidth: 768 },
    {
      height: "20vh",
    }
  )
);

interface PropsChat {
  user: User
}

export default function Chat({user}: PropsChat) {

  const dispatch = useDispatch();
  const { active_class_id } = user;
  
  const {
    isSaving,
    isLoading,
    error,
    sendRequest: sendRequestGetMessages,
  } = useHttp();

  useEffect(() => {
    console.log("USEEFFECT");
    
    sendRequestGetMessages(
      {
        url: "http://localhost:8000/messages/index",
        method: "POST",
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
        body: {class_id: active_class_id},
      },
      loadMessages
    );
  }, [active_class_id]);

const loadMessages = (data: any) => {
  dispatch(set_messages(data));
}

const messages = useSelector((state: any) => state.chat.messages);
const userLogueado = useSelector((state: any) => state.chat.user);

  
  return (
    <div className="col-lg-4 col-md-5 bg-light">
      <div className="d-flex flex-column h-100">
        <div className="p-3 bg-white border-bottom">
          <h5>Chat</h5>
        </div>
        <div className="p-3 flex-grow-1 ">
          <div className={`mb-3 overflow-x-hidden overflow-y-auto ${chatContainer}`}>
            
            {messages && messages.map((message: Message) => (
              <MessageChat message={message} userLogueado={userLogueado} />
            ))}
            
          </div>
          <form>
            <div className="row">
              <div className="mb-3 col-md-12 col-8">
                <label htmlFor="mensaje" className="form-label">
                  Escribe un mensaje
                </label>
                <textarea
                  className="form-control"
                  id="mensaje"
                  rows={2}
                ></textarea>
              </div>
              <div className="col-md-12 col-4 d-flex flex-column justify-content-center align-items-center">
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
