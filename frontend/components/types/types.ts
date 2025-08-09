export interface IUser {
  iconPath: string;
  name: string;
  comments: Array<{ text: string; timestamp: string }>;
}