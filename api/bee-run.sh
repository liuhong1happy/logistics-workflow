export MGO_HOSTS=127.0.0.1
export MGO_DATABASE=admin
export MGO_USERNAME=mongo
export MGO_PASSWORD=123456
export LOGISTICS_DATABASE=logistics

cd $GOPATH/src/github.com/liuhong1happy/logistics-workflow/api
go clean -i
go build

bee run watchall