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

angular.module('starter', ['ionic', 'firebase'])

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

    .factory("Items", function ($firebaseArray) {
        var itemsRef = firebase.database().ref("/items");
        return $firebaseArray(itemsRef);
    })

    .factory("Auth", function ($firebaseAuth) {
        return $firebaseAuth(firebase.auth());
    })

    .controller("ListCtrl", function ($scope, Items, Auth) {

        $scope.items = Items;

        $scope.addItem = function () {
            var name = prompt("What do you need to buy?");
            if (name) {
                $scope.items.$add({
                    "name": name
                });
            }
        };

        $scope.login = function () {
            Auth.$signInWithPopup("google").then(function (authData) {
                console.log(authData);
                $scope.authData = authData;
            }).catch(function (error) {
                console.error("Authentication failed:");
                console.error(error);
                console.error(error.code);

                if (error.code === "TRANSPORT_UNAVAILABLE") {
                    Auth.$signInWithRedirect("google").then(function (authData) {
                        console.log(authData);
                        $scope.authData = authData;
                    }).catch(function (error) {
                        console.error("Authentication failed:");
                        console.error(error);
                        console.error(error.code);
                    });
                }
            });
        };
    });