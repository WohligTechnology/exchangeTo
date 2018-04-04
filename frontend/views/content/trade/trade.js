myApp.controller('TradeCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/trade/trade.html");
    TemplateService.title = "Trade"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
})