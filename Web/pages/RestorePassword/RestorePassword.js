
angular.module("myApp")
.controller("RestorePassword", function ($scope,$http) {

    $scope.Getques=function(){
        $http.get('http://127.0.0.1:3000/users/getQuestions/'+$scope.uname)
        .then(function(response){
            $scope.quest1=response.data.question1;
            $scope.quest2=response.data.question2;

        })  
        .catch(function (err) {
            $scope.quest1=err.data.err;
            $scope.quest2=err.data.err;
        });
    
    

    };


    $scope.getPass=function(){

        const restorepass={

            username:$scope.uname,
            answer1:$scope.ans1,
            answer2:$scope.ans2,

        }


        $http.post('http://localhost:3000/users/restorePassword',restorepass)
        .then(function(response){

         $scope.pass=response.data.password;
        })
        .catch(function (err) {
            $scope.pass=err.data.err;
  
        });


    }

});