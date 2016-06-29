// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var firebaseConfig = {
    apiKey: "AIzaSyAtpDK8kXZ4R1_PF7Sn09lNgYsuQE3gFQM",
    authDomain: "ionic-app-940d2.firebaseapp.com",
    databaseURL: "https://ionic-app-940d2.firebaseio.com",
    storageBucket: "ionic-app-940d2.appspot.com"
};
firebase.initializeApp(firebaseConfig);

angular.module('starter', ['ionic', 'firebase', 'starter.controllers'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
            })
        
            .state('app.login', {
                url: '/login',
                views : {
                    'menuContent' : {
                        templateUrl : 'templates/login.html',
                        controller: 'AuthCtrl'
                    }
                }
            })

            .state('app.watson-api', {
                url: '/watson-api',
                views: {
                    'menuContent' : {
                        templateUrl : 'templates/watson-api.html',
                        controller : 'WatsonCtrl'
                    }
                }
            });
        
        $urlRouterProvider.otherwise('/app/watson-api');
    })

    .factory("Items", function ($firebaseArray) {
        var itemsRef = firebase.database().ref("/items");
        return $firebaseArray(itemsRef);
    })

    .factory("Auth", function ($firebaseAuth) {
        return $firebaseAuth(firebase.auth());
    });