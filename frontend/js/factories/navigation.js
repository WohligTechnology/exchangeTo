myApp.factory('NavigationService', function () {
    var navigation = [{
        // name: "Home",
        // classis: "active",
        // anchor: "home",
        // subnav: [{
        //     name: "Subnav1",
        //     classis: "active",
        //     anchor: "home"
        // }]
    }, {
        name: "Trade",
        classis: "active",
        anchor: "trade",
        subnav: []
    },
    {
        name: "Account",
        classis: "active",
        anchor: "profile",
        subnav: []
    },{
        name: "Wallet",
        classis: "active",
        anchor: "wallet",
        subnav: []
    },{
        name: "Report",
        classis: "active",
        anchor: "report",
        subnav: []
    }];

    return {
        getNavigation: function () {
            return navigation;
        },
    };
});