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
    } else if(message.user?.type_user === "MODERATOR") {
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

