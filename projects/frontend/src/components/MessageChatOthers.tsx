import { style } from "typestyle";
import { Message, User } from "../interfaces";

interface PropsMessageChat {
  message: Message;
}

const bgDivMessage = style(
  {
    backgroundColor: "#f7f1e6",
  },
);

export default function MessageChatOthers({ message }: PropsMessageChat) {
  return (
    <div className="row px-1 ">
      <div className={`mb-2 py-1 px-4 col-11 rounded-end ${bgDivMessage}`}>
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
