import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import useHttp from "../hooks/use-http";
import { User } from "../interfaces";
import { set_message } from "../store/actions";

interface PropsMessageChat {
  userLogueado: User;
}

export default function WriteMessage({ userLogueado }: PropsMessageChat) {
  const dispatch = useDispatch();

  const {
    isSaving,
    isLoading,
    error,
    sendRequest: sendRequestStoreMessage,
  } = useHttp();

  const [content, setContent] = useState("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (content != "") {
      sendRequestStoreMessage(
        {
          url: "http://localhost:8000/messages",
          method: "POST",
          headers: {
            "Content-type": "application/json;charset=UTF-8",
          },
          body: {
            content: content,
            user_id: userLogueado.id,
            class_id: userLogueado.active_class_id,
          },
        },
        onStoreMessage
      );
    }
  };

  const onStoreMessage = (resultado: any) => {
    setContent("");
    dispatch(set_message(resultado));
    console.log(resultado);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="row">
        <div className="mb-3 col-md-12 col-8">
          <label htmlFor="content" className="form-label">
            Escribe un mensaje
          </label>
          <textarea
            className="form-control"
            id="content"
            onChange={handleChange}
            name="content"
            value={content}
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
  );
}
