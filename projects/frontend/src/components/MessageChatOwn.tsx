import { Message, User } from "../interfaces";

interface PropsMessageChat {
  message: Message;
}

export default function MessageChatOwn({ message }: PropsMessageChat) {
  return (
    <div className="row px-1">
      <div className="bg-white mb-2 py-1 px-4 offset-1 col-11">
        <div className="d-flex flex-column align-items-end">
          <strong className="text-success">
            {message.user
              ? message.user.name
              : "Usuario id: " + message.user_id}
          </strong>
          <p className="m-0 text-end">{message.content}</p>
        </div>
      </div>
    </div>
  );
}
