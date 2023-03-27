import { Message, User } from "../../interfaces";


export const SET_USER = "[USER] SET USER";
export const set_user = (user: User) => ({
  type: SET_USER,
  payload: { user },
});



export const SET_MESSAGE = "[MESSAGE] SET MESSAGE";
export const set_message = (message: Message) => ({
  type: SET_MESSAGE,
  payload: { message },
});
