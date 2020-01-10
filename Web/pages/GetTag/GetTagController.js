angular.module("myApp")
    .controller("GetTagController", function ($rootScope,$scope,$http,$location) {
        $scope.input=""
        $scope.out=""

        $scope.submit=function() {
           t=  $scope.input.split(" ")
            const tokens={
                tokens:t
            }
            $http.post('http://localhost:3000/Tags/GetTagFromTheAlgorithm',tokens)
                .then(function (response) {
                    output =""

                    for(i=0;i<response.data.length;i++){
                        output= output+ t[i]+"-" + response.data[i]+" "

                    }
                    $scope.out=output

                })
                .catch(function (err) {
                    console.log(err.data.err);

                });

        }

        });