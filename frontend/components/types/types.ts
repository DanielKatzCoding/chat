export interface IUser {
  iconPath: string;
  name: string;
  chat: IMsg[];
}

export interface IMsg {
  text: string;
  timestamp: string;
  bound: ChatBound;
}

export enum ChatBound {
  incoming = 'incoming',
  outgoing = 'outgoing',
}