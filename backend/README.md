### Запуск сервера
В корне проекта выполнить
```
go run main.go
```

### Компиляция protobuf в Go
При отсутствии папок `proto/chat`, `proto/message`, `proto/user` со сгенерированным Go-кодом, **перед запуском сервера** необходимо выполнить следующие команды:
```bash
cd proto
mkdir chat message user
protoc \
       --go_out=message --go-grpc_out=message \
       --go_opt=paths=source_relative \
       --go-grpc_opt=paths=source_relative \
      message.proto
      
protoc \
       --go_out=user --go-grpc_out=user \
       --go_opt=paths=source_relative \
       --go-grpc_opt=paths=source_relative \
      user.proto


protoc \
       --go_out=chat --go-grpc_out=chat \
       --go_opt=paths=source_relative \
       --go-grpc_opt=paths=source_relative \
      chat.proto
```