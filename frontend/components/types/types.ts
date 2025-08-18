

export interface IUser {
  id: string;
  iconPath: string;
  name: string;
}

export interface IChat {
  id: string;
  msgs: IMsg[]
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