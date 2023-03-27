import { Message, User } from "../interfaces";

interface PropsMessageChat {
  message: Message;
}

export default function MessageChatModerator({ message }: PropsMessageChat) {
  return (
    <div className="row px-1">
      <div className="col-11 bg-white mb-2 py-1 px-4">
        <div className="d-flex flex-column justify-content-center align-items-start">
          <strong className="text-primary">
            {message.user
              ? "MODERADOR: " + message.user.name
              : "MODERADOR ID: " + message.user_id}
          </strong>
          <p className="m-0">{message.content}</p>
        </div>
      </div>
    </div>
  );
}
