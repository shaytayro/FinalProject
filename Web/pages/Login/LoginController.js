
angular.module("myApp")
.controller("LoginController", function ($rootScope,$scope,$http,$location) {


$scope.Login=function(){

    const user={
        username: $scope.uname ,
        password:  $scope.password
    }

    $http.post('http://localhost:3000/users/Login/JsonLogin',user)
    .then(function(response){
        $rootScope.token = response.data;
        $rootScope.hello="hello "+$scope.uname;
        $location.path('/ConnectedUser');
    })
    .catch(function (err) {
        $scope.answer=err.data.err;

    });





}

});