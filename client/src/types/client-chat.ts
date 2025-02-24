import type { Chat } from "@/types/chat";
import type { User } from "@/types/user";

export type ClientChat = Chat & {
  sender: User | null;
}