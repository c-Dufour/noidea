angular.module('app',['ngRoute']).config(['$routeProvider',
function config($routeProvider) {
  $routeProvider.
    when('/home', {
      templateUrl: 'app/views/header.html',
      controller: 'headerCtrl'
    })
}
]);