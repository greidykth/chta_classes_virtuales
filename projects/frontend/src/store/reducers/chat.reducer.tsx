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
    login: false
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
      if(!state.messages.some( (message: Message) => message.id === action.payload.message.id)){
        return {
          ...state,
          messages: [...state.messages, action.payload.message] 
        };
      }
      return state;

    case Actions.LOGIN:
      return {
        ...state, user: {...state.user, login: true}
      }

    case Actions.LOGOUT:
      return {
        ...state, user: {...state.user, login: false}
      }
      
    default:
      return state;
  }
};

export default reducerClient;
