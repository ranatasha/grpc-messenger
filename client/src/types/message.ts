export interface Message {
  messageId: number;
  chatId: number;
  senderId: number;
  text: string;
  timestamp: Date;
}