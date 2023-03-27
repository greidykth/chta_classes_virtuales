import { Message, User } from "../interfaces";

interface PropsMessageChat {
  message: Message;
}

export default function MessageChatOwn({ message }: PropsMessageChat) {
  return (
    <div className="d-flex align-items-center bg-white mb-2 p-1">
      <div className="d-flex flex-column justify-content-center align-items-start">
        <strong className="text-success">
          {message.user
            ? message.user.name
            : "Usuario id: " + message.user_id}
        </strong>
        <p className="m-0">{message.content}</p>
      </div>
    </div>
  );
}
