export MGO_URL=mongodb://mongo:123456@127.0.0.1:27017/admin
export LOGISTICS_DATABASE=logistics

cd $GOPATH/src/github.com/liuhong1happy/logistics-workflow/api
go clean -i
go build

bee run watchall