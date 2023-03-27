import { Message, User } from "../interfaces";
import MessageChatModerator from "./MessageChatModerator";
import MessageChatOthers from "./MessageChatOthers";
import MessageChatOwn from "./MessageChatOwn";

interface PropsMessageChat{
    message: Message;
    userLogueado: User;
}

export default function MessageChat({userLogueado, message} : PropsMessageChat) {

  const typeMessage = (() => {
    if(userLogueado.id === message.user_id){
      return "OWN";
    } else if(userLogueado.type_user === "MODERATOR") {
      return "MODERATOR";
    } else {
      return "OTHERS";
    }
  })()
  return (
    <>
      {
        typeMessage === "OWN" ? 
          <MessageChatOwn message={message} /> : 
          (
            typeMessage === "MODERATOR" ? 
              <MessageChatModerator message={message} /> : 
              <MessageChatOthers message={message} />
          )
      }
    </>
  );
}

{/* <div className="d-flex align-items-center bg-white mb-2 p-1">
      <div className="d-flex flex-column justify-content-center align-items-start">
        <strong className="">{props.message.user ? props.message.user.name : "Usuario id: " + props.message.user_id}</strong>
        <p className="m-0">{props.message.content}</p>
      </div>
    </div> */}
