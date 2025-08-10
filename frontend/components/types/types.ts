export interface IUser {
  iconPath: string;
  name: string;
  chats: IChat[];
}

export interface IChat {
  text: string;
  timestamp: string;
  bound: ChatBound;
}

export enum ChatBound {
  incoming = 'incoming',
  outgoing = 'outgoing',
}