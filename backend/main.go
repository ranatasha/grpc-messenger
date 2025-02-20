package main

import (
	"context"
	"log"
	"net"
	"time"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
	"google.golang.org/protobuf/types/known/timestamppb"

	"github.com/ranatasha/grpc-messenger/chat"
	"github.com/ranatasha/grpc-messenger/message"
	"github.com/ranatasha/grpc-messenger/user"
)

// Mock database
var (
	users = []user.User{
		{UserId: 1, Username: "john_doe", Name: "John Doe"},
		{UserId: 2, Username: "jane_smith", Name: "Jane Smith"},
	}

	chats = []chat.Chat{
		{ChatId: 1, LastMessage: "Hello!", Timestamp: timestamppb.New(time.Now()), Participants: []*user.User{&users[0], &users[1]}},
	}

	messages = []message.Message{
		{ChatId: 1, SenderId: 1, Text: "Hello, Jane!", Timestamp: timestamppb.New(time.Now())},
		{ChatId: 1, SenderId: 2, Text: "Hi, John!", Timestamp: timestamppb.New(time.Now())},
	}
)

func convertToUserPointers(users []user.User) []*user.User {
    userPointers := make([]*user.User, len(users))
    for i := range users {
        userPointers[i] = &users[i]
    }
    return userPointers
}

func convertToMessagePointers(messages []message.Message) []*message.Message {
    messagePointers := make([]*message.Message, len(messages))
    for i := range messages {
        messagePointers[i] = &messages[i]
    }
    return messagePointers
}

func convertToChatPointers(chats []chat.Chat) []*chat.Chat {
    chatPointers := make([]*chat.Chat, len(chats))
    for i := range chats {
        chatPointers[i] = &chats[i]
    }
    return chatPointers
}

// UserService implementation
type UserService struct {
	user.UnimplementedUserServiceServer
}

func (s *UserService) GetUsers(ctx context.Context, req *user.GetUsersRequest) (*user.GetUsersResponse, error) {
	return &user.GetUsersResponse{Users: convertToUserPointers(users)}, nil
}

// ChatService implementation
type ChatService struct {
	chat.UnimplementedChatServiceServer
}

func (s *ChatService) GetChats(ctx context.Context, req *chat.GetChatsRequest) (*chat.GetChatsResponse, error) {
	var userChats []chat.Chat
	for _, c := range chats {
		for _, participant := range c.Participants {
			if participant.UserId == req.UserId {
				userChats = append(userChats, c)
				break
			}
		}
	}
	return &chat.GetChatsResponse{Chats: convertToChatPointers(userChats)}, nil
}

// MessageService implementation
type MessageService struct {
	message.UnimplementedMessageServiceServer
}

func (s *MessageService) GetMessages(ctx context.Context, req *message.GetMessagesRequest) (*message.GetMessagesResponse, error) {
	var chatMessages []message.Message
	for _, m := range messages {
		if m.ChatId == req.ChatId {
			chatMessages = append(chatMessages, m)
		}
	}
	return &message.GetMessagesResponse{Messages: convertToMessagePointers(chatMessages)}, nil
}

func main() {
	grpcServer := grpc.NewServer()

	// Register reflection for debugging tools
	reflection.Register(grpcServer)

	// Register services
	user.RegisterUserServiceServer(grpcServer, &UserService{})
	chat.RegisterChatServiceServer(grpcServer, &ChatService{})
	message.RegisterMessageServiceServer(grpcServer, &MessageService{})

	// Start gRPC server
	listener, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatalf("Failed to listen on port 50051: %v", err)
	}
	log.Println("gRPC server is running on port 50051")

	if err := grpcServer.Serve(listener); err != nil {
		log.Fatalf("Failed to serve gRPC server: %v", err)
	}
}
