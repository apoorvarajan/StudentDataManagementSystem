#!/bin/bash

PROTO_DIR=../../client/src/proto

mkdir ${PROTO_DIR}

# Generate Types
npx proto-loader-gen-types --longs=String --enums=String --defaults --oneofs --grpcLib=@grpc/grpc-js --outDir=${PROTO_DIR} ../protos/frontend.proto

# Generate JS and TS code
protoc -I=../protos ../protos/frontend.proto \
  --js_out=import_style=commonjs:${PROTO_DIR} \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:${PROTO_DIR}