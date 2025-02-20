import { User } from "@/components/chat-list/model/User";

export interface Chat {
  chatId: number;
  participants: User[];
  lastMessage: string;
  timestamp: Date;
}