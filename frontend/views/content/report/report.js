myApp.controller('ReportCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/report/report.html");
    TemplateService.title = "Report"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
})