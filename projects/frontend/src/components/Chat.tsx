import React from "react";
import { useSelector } from "react-redux";
import { style, media } from "typestyle";
import { Message } from "../interfaces";
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


export default function Chat() {

  const chat = useSelector((state: any) => state);
  console.log(chat);

  return (
    <div className="col-lg-4 col-md-5 bg-light">
      <div className="d-flex flex-column h-100">
        <div className="p-3 bg-white border-bottom">
          <h5>Chat</h5>
        </div>
        <div className="p-3 flex-grow-1 ">
          <div className={`mb-3 overflow-auto ${chatContainer}`}>
            <div className="d-flex align-items-center bg-white mb-2 p-1">
              <div className="d-flex flex-column justify-content-center align-items-start">
                <strong>Usuario 1</strong>
                <p className="m-0">Hola, ¿cómo estás?</p>
              </div>
            </div>
            {/* {chat.messages.map((message: Message) => (
              <MessageChat message={message} />
            ))} */}
            
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
