import { Message, User } from "../interfaces";

interface PropsMessageChat {
  message: Message;
}

export default function MessageChatOthers({ message }: PropsMessageChat) {
  return (
    <div className="row px-1 ">
      <div className="bg-white mb-2 py-1 px-4 col-11">
        <div className="d-flex flex-column justify-content-center align-items-start">
          <strong className="text-warning">
            {message.user
              ? message.user.name
              : "Usuario id: " + message.user_id}
          </strong>
          <p className="m-0">{message.content}</p>
        </div>
      </div>
    </div>
  );
}
