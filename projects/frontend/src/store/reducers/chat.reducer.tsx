import { Message, State, User } from "../../interfaces";
import * as Actions from "../actions";

interface Action{
  type: string,
  payload: any
}

const initialState = {
  user: {
    id: 0,
    name: "",
    username: "",
    type_user: "",
    active_class_id: 0,
  },
  messages: []
};

const reducerClient = (state : State = initialState, action: Action) => {
  switch (action.type) {
    case Actions.SET_USER:
      return {
        ...state,
        user: action.payload.user
      };
    case Actions.SET_MESSAGES:
      return {
        ...state,
        messages: action.payload.messages
      };
    case Actions.SET_MESSAGE:
      if(!state.messages.find( (message: Message) => message.id === action.payload.id)){
        return {
          ...state,
          messages: [...state.messages, action.payload.message] 
        };
      }
      return state;
      
    default:
      return state;
  }
};

export default reducerClient;
