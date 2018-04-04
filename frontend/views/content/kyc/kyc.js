myApp.controller('KYCCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/kyc/kyc.html");
    TemplateService.title = "KYC"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
})