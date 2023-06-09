import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { style, media } from "typestyle";
import useHttp from "../hooks/use-http";
import { Message, User } from "../interfaces";
import { set_messages } from "../store/actions";
import MessageChat from "./MessageChat";
import WriteMessage from "./WriteMessage";

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
  user: User;
}

export default function Chat({ user }: PropsChat) {
  const dispatch = useDispatch();
  const { active_class_id } = user;
  const messages = useSelector((state: any) => state.chat.messages);
  const userLogueado = useSelector((state: any) => state.chat.user);

  const {
    isSaving,
    isLoading,
    error,
    sendRequest: sendRequestGetMessages,
  } = useHttp();

  useEffect(() => {
    sendRequestGetMessages(
      {
        url: "http://localhost:3000/messages/index",
        method: "POST",
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
        body: { class_id: active_class_id },
      },
      loadMessages
    );
  }, [active_class_id]);

  const loadMessages = (data: any) => {
    dispatch(set_messages(data));
  };

  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);

  return (
    <div className="col-lg-4 col-md-5 bg-light">
      <div className="d-flex flex-column h-100">
        <div className="p-3 bg-white border-bottom">
          <h5>Chat</h5>
        </div>
        <div className="p-3 flex-grow-1 ">
          <div
            className={`mb-3 overflow-x-hidden overflow-y-auto ${chatContainer}`}
            ref={chatRef}
          >
            {messages &&
              messages.map((message: Message) => (
                <MessageChat
                  key={message.id}
                  message={message}
                  userLogueado={userLogueado}
                />
              ))}
          </div>
          <WriteMessage userLogueado={userLogueado} />
        </div>
      </div>
    </div>
  );
}
