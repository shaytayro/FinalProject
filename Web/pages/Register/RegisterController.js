
angular.module("myApp")
.controller("RegisterController", function ($location,$scope,$http) {
    $scope.submit = function(){
        const user = {
            username: $scope.uname,
            password: $scope.password,
            FirstName: $scope.FirstName,
            LastName: $scope.LastName,
            City: $scope.City,
            Country: $scope.Country,
            Email:$scope.Email,
            question1: $scope.ques1,
            answer1: $scope.ans1,
            question2: $scope.ques2,
            answer2: $scope.ans2,

        };


        $http.post('http://localhost:3000/users/Registration/JsonRegister',user)
        .then(function(response){

         $scope.answer="Register sucessful";
         $rootScope.token = response.data;
         $rootScope.hello="hello "+$scope.uname; 
         alert("Register Successfull")

        })
        .catch(function (err) {

            $scope.answer="Register failed Please Try again The error is : "+ err.data.err;
  
        });
    

    };
    $scope.names = ["Australia", "Bolivia", "China", "Denemark", "Israel", "Latvia", "Monaco", "August", "Norway","Panama","Switzerland","USA"];
    $scope.q1=["Whats your mothers name?", "What is your fathers name?", "where do you live?", "Where did you go to elementary school?"]
    $scope.q2=["Whats your mothers name?", "What is your fathers name?", "where do you live?", "Where did you go to elementary school?"]
});