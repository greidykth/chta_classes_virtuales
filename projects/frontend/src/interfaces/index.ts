export interface Message {
    id?: number;
    content: string;
    user_id: number;
    class_id: number;
    user?: User;
}

export interface User {
    id: number;
    name: string;
    username: string;
    type_user: string;
    active_class_id: number;
}

export interface State {
    user: User;
    messages: Message[];
}