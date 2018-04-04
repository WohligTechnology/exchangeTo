// Link all the JS Docs here
var myApp = angular.module('myApp', [
    'ui.router',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'ui.bootstrap',
    'ngAnimate',
    'ngSanitize',
    'angularPromiseButtons',
    'toastr'
]);

// Define all the routes below
myApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    var tempateURL = "views/template/template.html"; //Default Template URL

    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: tempateURL,
            controller: 'HomeCtrl'
        })
        .state('kyc', {
            url: "/kyc",
            templateUrl: tempateURL,
            controller: 'KYCCtrl'
        })
        .state('profile', {
            url: "/profile",
            templateUrl: tempateURL,
            controller: 'ProfileCtrl'
        })
        .state('report', {
            url: "/report",
            templateUrl: tempateURL,
            controller: 'ReportCtrl'
        })
        .state('trade', {
            url: "/trade",
            templateUrl: tempateURL,
            controller: 'TradeCtrl'
        })
        .state('wallet', {
            url: "/wallet",
            templateUrl: tempateURL,
            controller: 'WalletCtrl'
        })
        .state('links', {
            url: "/links",
            templateUrl: tempateURL,
            controller: 'LinksCtrl'
        });
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});

// For Language JS
myApp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});