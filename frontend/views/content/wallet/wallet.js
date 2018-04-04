myApp.controller('WalletCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/wallet/wallet.html");
    TemplateService.title = "Wallet"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
})