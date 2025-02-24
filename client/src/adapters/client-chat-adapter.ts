import type { ClientChat } from "@/types/client-chat";
import type { Chat } from "@/types/chat";

export const formatToClientChat = (chats: Chat[], currentUserId: number | null): ClientChat[] => {
  return chats.map(ch => Object.assign({
    ...ch,
    sender:
      ch.participants.find(p => p.userId !== currentUserId) ||
      ch.participants.find(p => p.userId === currentUserId) ||
      null,
  }));
}