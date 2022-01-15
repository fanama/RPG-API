# Dockerfile References: https://docs.docker.com/engine/reference/builder/

# Start from golang:1.12-alpine base image
FROM golang:1.16-alpine

# The latest alpine images don't have some tools like (`git` and `bash`).
# Adding git, bash and openssh to the image
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh curl build-base

RUN PATH=$PATH:/usr/local/go/bin

RUN go version
# Add Maintainer Info

# Set the Current Working Directory inside the container
WORKDIR /app

RUN go install github.com/canthefason/go-watcher/cmd/watcher@latest

# Copy go mod and sum files
COPY go.mod go.sum ./

# Download all dependancies. Dependencies will be cached if the go.mod and go.sum files are not changed
RUN go mod download

# Copy the source from the current directory to the Working Directory inside the container
COPY . .

ENTRYPOINT /go/bin/watcher
