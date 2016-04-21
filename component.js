'use strict';

angular.module('StandardLife.angular-component', []).directive('slComponent', [function() {

    var items = [
        { name: 'Basic living costs', value: 9500, checked: true },
        { name: '2 weeks holiday each year', value: 2500, checked: false },
        { name: '4 weeks in the sun each winter', value: 5125, checked: false },
        { name: 'A car + 5 yearly upgrade', value: 7087.50, checked: true },
        { name: 'Health club membership', value: 600, checked: false },
        { name: 'A concert or play once a month', value: 1200, checked: false },
        { name: 'Weekly dinner or drinks with friends', value: 1875, checked: false },
        { name: 'Shopping trips with you + family', value: 1500, checked: false },
        { name: 'Home improvements', value: 3375, checked: false }
    ];

    function itemsTotal(items) {
        var total = 0;
        for (var i = 0, len = items.length; i < len; i++) {
            if (items[i].checked) {
                total = total + items[i].value;
            }
        }
        return total;
    }

    return {
        restrict: 'EA',
        replace: false,
        scope: {},

        // replace: true,
        templateUrl: '/component.html',
        link: function(scope, element, attrs) {
            window.s = scope;
            scope.total = 0;
            scope.items = items;
            scope.total = itemsTotal(items);

            scope.refresh = function() {
                scope.itemsTotal = itemsTotal(items);
            };

            scope.refresh();

        },

        controller: function($scope, $element, $attrs) {}
    };
}]);
