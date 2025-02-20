### Компиляция protobuf в Go
```shell
protoc --proto_path=proto \
       --go_out=gen \
       --go_opt=Mproto/chat.proto=gen/proto/api/chat \
       --go_opt=Mproto/message.proto=gen/proto/api/message \
       --go_opt=Mproto/user.proto=gen/proto/api/user \
      chat.proto message.proto user.proto
```