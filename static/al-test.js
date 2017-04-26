"use strict";

var ITEM_COUNT = 10;
var MANUFACTURE_COUNT = 2;

function shop_init() {
    var items = [];
    var manufactures = [];

    // создание товаров
    var i;
    var categories = ["1", "2", "3", "4", "5"];
    for (i = 1; i <= ITEM_COUNT; i++){
        var item = Object();
        item.id = i;
        item.name = "item_" + i;
        item.price = i * 10;
        item.available = 5;
        item.category = categories[(i % 5) - 1];
        item.available_time = "?";
        item.good_until = i * 2.5;
        item.manufacture_id = (i % MANUFACTURE_COUNT) + 1;
        items.push(item);
    }

    // создание производителей
    var descriptions = ["First description", "Second description"];
    for (i = 1; i <= MANUFACTURE_COUNT; i++){
        var manufacture = Object();
        manufacture.id = i;
        manufacture.name = "manufacture_" + i;
        manufacture.description = descriptions[i-1];
        manufactures.push(manufacture);
    }

    var db = Object.create(null);
    db.items = items;
    db.manufactures = manufactures;
    return db;
}

$(document).ready(function () {
    console.log("run.");

    /*
    <body id="main_app">
    var main_scope = alight.Scope();
    main_scope.name = 'Super shop';
    // привязать к элементу
    alight.applyBindings(main_scope, $('#main_app')[0]);
    */

    alight.controllers.main_app = function (scope) {
        scope.shop = "Super shop";

        scope.user = "Nobody";
        scope.$watch('user', function (value) {console.log("user changed to: " + value)});

        scope.db = shop_init();
        console.log(scope.db);

        scope.activeItem = null;

        scope.set_active = function(item) {
            console.log("set active:" + item.id);
            scope.activeItem = item;
        };
    }


});