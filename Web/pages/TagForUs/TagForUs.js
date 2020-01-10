angular.module("myApp")
    .controller("TagForUsctroller", function ($rootScope,$scope,$http,$location) {

        $scope.Labels = ["Software or Service","Version","Operating System","Network Protocol","Port","Means","Impact","Hardware","Privilege","Attack Vector","Attack Technique","none"]
        $scope.Tokens=[]
        $scope.labels=[]
        $scope.init=function(){

            $http.get('http://127.0.0.1:3000/Tags/GetUnTaggedCve')
                .then(function(response){
                    $scope.CVEID=response.data.CveId;
                    $scope.CVEDescription=response.data.CVEDescription;
                    $scope.Tokens=$scope.CVEDescription.split(" ")
                })
                .catch(function (err) {
                    $scope.CVEID=err.data.err;
                    $scope.CVEDescription=err.data.err;
                });



        }

        $scope.submit=function(){
            const Tag = {
                ID:$scope.CVEID,
                WordsList:$scope.Tokens,
                LabelList:$scope.labels
            }
            $http.post('http://localhost:3000/Tags/SubmitTag',Tag)
                .then(function(response){
                    console.log(response.data)
                    location.reload()
                })
                .catch(function (err) {
                    console.log(err.data.err);

                });



            }
        /*
                $scope.select=function selection(){
                    var selection = window.getSelection();
                    var start = selection.anchorOffset;
                    var end = selection.focusOffset;
                    if (start >= 0 && end >= 0){
                        console.log(start);
                        console.log(end);

                    }
                }
        */

        });