# API

-   Go to Api

-   > cd ./Api

## Test

### - test de tous les modules

-   > go test -v ./...

### - test du main package

-   > go test -v .

### - test d'un package'

-   > go test -v ./path/to/package

###  - test d'une fonction

-   > go test -v ./path/to/package  -run function

### - clean cache

-   > go clean -testcache

## Develop

1. run the API

-   > go run main.go

## Production

1. Build the executable

-   > go build main.go

1. execute the build file

-   > ./main
