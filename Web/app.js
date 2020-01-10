let app = angular.module('myApp', ["ngRoute"]);
app.run(function($rootScope,$http){
    $rootScope.token = "";
    $rootScope.hello="hello guest";
    $rootScope.addtofavorite=function(POI){

        const poi={
            POIname:POI,
        };
        $http.put('http://127.0.0.1:3000/users/addToFavoritePOISaved/',poi,{ headers:{'x-auth-token': $rootScope.token}})
        .then(function(response){
            alert("Saved succsesfuly")
        })
        .catch(function(err){
            alert("You already have this POI in favorite");
        })

        
    }

    $rootScope.removefavorite=function(POI){

        $http.delete('http://127.0.0.1:3000/users/removeFromSavedFavoritePOI/'+POI,{ headers: {'x-auth-token': $rootScope.token}})
           
        .then(function(response){
            alert("delete succsesfuly")
        })
        .catch(function(err){
            alert(err.data.err)
        })

        
    }


  });
  
// config routes
app.config(function($routeProvider)  {
    $routeProvider
         // homepage
        .when('/', {
            // this is a template
            templateUrl: 'pages/Home/Home.html',
            controller : 'HomeController as homeCtrl'

        })
        // about
        .when('/about', {
            // this is a template url
            templateUrl: 'pages/about/about.html',
            controller : 'aboutController as abtCtrl'
        })
        // poi
        .when('/httpRequest', {
            templateUrl: 'pages/http/request.html',
            controller : 'httpController as httpCtrl'
        })

        .when('/Register', {
            templateUrl: 'pages/Register/Register.html',
            controller : 'RegisterController as RegisterCtrl'
        })
        .when('/Login', {
            templateUrl: 'pages/Login/Login.html',
            controller : 'LoginController as LoginCtrl'
  
        })
        .when('/RestorePassword', {
            templateUrl: 'pages/RestorePassword/RestorePassword.html',
            controller : 'RestorePassword as RestoreCtrl'
        })

        .when('/TagForUs', {
            templateUrl: 'pages/TagForUs/TagForUs.html',
            controller : 'TagForUsctroller as TagForUsctrl'
        })

        .when('/GetTag', {
            templateUrl: 'pages/GetTag/GetTag.html',
            controller : 'GetTagController as GetTagctrl'
        })

        // other
        .otherwise({ redirectTo: '/' });
});