interface User {
  userId: number | null;
  name: string;
  username: string;
}

export interface Chat {
  chatId: number;
  participants: User[];
  lastMessage: string;
  timestamp: number;
}