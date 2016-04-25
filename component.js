'use strict';

angular.module('StandardLife.angular-component', []).directive('slComponent', [function() {

    var items = [
        { name: 'Basic living costs', value: 9500, checked: true, 'image': 'https://www.standardlife.co.uk/resources/tools/retirement-tool/images/icon_basicliving_on.png' },
        { name: '2 weeks holiday each year', value: 2500, checked: false, 'image': 'https://www.standardlife.co.uk/resources/tools/retirement-tool/images/icon_2weekholiday_on.png' },
        { name: '4 weeks in the sun each winter', value: 5125, checked: false, 'image': 'https://www.standardlife.co.uk/resources/tools/retirement-tool/images/icon_4weekholiday_on.png' },
        { name: 'A car + 5 yearly upgrade', value: 7087.50, checked: true, 'image': 'https://www.standardlife.co.uk/resources/tools/retirement-tool/images/icon_Acar_on.png' },
        { name: 'Health club membership', value: 600, checked: false, 'image': 'https://www.standardlife.co.uk/resources/tools/retirement-tool/images/icon_healthclub_on.png' },
        { name: 'A concert or play once a month', value: 1200, checked: false, 'image': 'https://www.standardlife.co.uk/resources/tools/retirement-tool/images/icon_concert_on.png' },
        { name: 'Weekly dinner or drinks with friends', value: 1875, checked: false, 'image': 'https://www.standardlife.co.uk/resources/tools/retirement-tool/images/icon_dinner_on.png' },
        { name: 'Shopping trips with you + family', value: 1500, checked: false, 'image': 'https://www.standardlife.co.uk/resources/tools/retirement-tool/images/icon_shopping_on.png' },
        { name: 'Home improvements', value: 3375, checked: false, 'image': 'https://www.standardlife.co.uk/resources/tools/retirement-tool/images/icon_homeimprovement_on.png' }
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
        template: '<!-- TODO: place directive call here --> <ion-content has-header padding scroll="true"> <h1>Retirement tool</h1> <p> What kind of life would you like to lead when you\'ve said goodbye to the 9-to-5? Create a vision of your ideal retirement and we\'ll give you an idea of how much money you\'ll need to fund it. </p> <div class="list"> <div class="item energized-bg" style="text-align: center;"> <p class="subdued italic">To fund the lifestyle you\'ve just chosen, you\'ll need:</p> <h1 class="light">{{itemsTotal | currency : \'£\' : 0}}</h1> <p style="color:white;">per year before tax</p> </div> <ul class="list item-text-wrap"> <li class="item stable-bg item-checkbox" ng-repeat="item in items" ng-click="refresh();"> <label class="checkbox"> <input type="checkbox" ng-model=item.checked> </label> {{item.name}} </li> </ul> </ion-content>',
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
