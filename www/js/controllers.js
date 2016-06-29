angular.module('starter.controllers', [])
    
.controller("AuthCtrl", function ($scope, Items) {
    
    $scope.items = Items;

    $scope.addItem = function () {
        var name = prompt("What do you need to buy?");
        if (name) {
            $scope.items.$add({
                "name": name
            });
        }
    };

    $scope.googleLogin = function () {
        window.plugins.googleplus.login({
                'webApiKey': '750695814854-bdpl23blukhkljdf12g1nshthidvl07c.apps.googleusercontent.com'
            },
            function (authData) {
                console.log(JSON.stringify(authData));
                $scope.authData = authData;

                var credential = firebase.auth.GoogleAuthProvider.credential(authData.idToken);

                firebase.auth().signInWithCredential(credential).catch(function (error) {
                    console.error(JSON.stringify(error));
                });

                $scope.$digest();
            },
            function (msg) {
                console.error(msg);
            }
        );
    };

    $scope.googleLogout = function () {
        window.plugins.googleplus.logout(
            function (msg) {
                console.log(msg);
                $scope.authData = null;
                $scope.$digest();
            }
        );
    };


})

.controller('WatsonCtrl', function ($scope) {

})

.controller('AppCtrl', function ($scope) {
    
})

.controller('ProfileCtrl', function ($scope) {

})