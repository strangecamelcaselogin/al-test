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

    return {"items": items, "manufactures": manufactures}
}

$(document).ready(function () {
    console.log("run.");

    var main_scope = alight.Scope();
    main_scope.name = 'Super shop';
    main_scope.db = shop_init();
    console.log(main_scope.db);

    // привязать к элементу
    alight.applyBindings(main_scope, $('#main_app')[0]);

});