(function(){
    var app = angular.module('store-directives', []);

    app.directive("descriptions", function() {
        return {
            restrict: "E",
            templateUrl: "descriptions.html"
        };
    });

    app.directive("specs", function() {
        return {
            restrict: "E",
            templateUrl: "specs.html"
        };
    });

    app.directive("reviews", function() {
        return {
            restrict: "E",
            templateUrl: "reviews.html"
        };
    });

    app.directive('productTitle', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-title.html'
        }
    });

    app.directive('productPanels', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-tabs.html',
            controller: function(){
                this.tab = 1; // tab initializer

                this.selectTab = function(setTab) {
                    this.tab = setTab;
                }
                this.isSelected = function(checkTab) {
                    return this.tab === checkTab;
                }
            },
            controllerAs: 'panel'
        }
    });

})();
