import { Message } from "../interfaces";

interface PropsMessageChat{
    message: Message
}

export default function MessageChat(props : PropsMessageChat) {
  return (
    <div className="d-flex align-items-center bg-white mb-2 p-1">
      <div className="d-flex flex-column justify-content-center align-items-start">
        <strong>{props.message.user_id}</strong>
        <p className="m-0">{props.message.content}</p>
      </div>
    </div>
  );
}
