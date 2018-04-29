var subTotal = 0;
var counterItem = "";
var selectedItem = "";
var counter = 0;

counterItem = {
  milk1l: 0,
  milk2l: 0,
  breadWH: 0,
  breadBR: 0,
  breadGR: 0,
  tBags: 0,
};

selectedItem = {
  milk1l: 0.75,
  milk2l: 1.45,
  breadWH: 0.70,
  breadBR: 0.85,
  breadGR: 1.00,
  tBags: 3.10,
};

var total = function(price){
  var addItem = $(price).attr("id");
  var countItem = counterItem[addItem];
  var selectItem = selectedItem[addItem];
  subTotal += selectItem;
  $("#total").text(subTotal.toFixed(2));
  counterItem[addItem]++;
}

var reduce = function(price){
  var subItem = $(price).attr("id");
  var countItem = counterItem[subItem];
  var selectItem = selectedItem[subItem];
  if (countItem > 0) {
    subTotal -= selectItem;
    $("#total").text(subTotal.toFixed(2));
    counterItem[subItem]--;
  } else {
    alert("No more " + subItem);
  }
}

var getMultiply = function(newPrice, oldPrice, items){
  totalOldPrice = oldPrice * items;
  subTotal -= totalOldPrice;
  var newTotalPrice = newPrice * items;
  subTotal += newTotalPrice;
  $("#total").text(subTotal.toFixed(2));
  return newPrice;
}

var change = function(price){
  var newPrice = parseFloat(prompt("Change Price"));
  if (!isNaN(newPrice) && (newPrice > 0)) {
    var priceItem = $(price).attr("id");
    var countItem = counterItem[priceItem];
    var selectItem = selectedItem[priceItem];
    getMultiply(newPrice, selectItem, countItem);
    $("#" + priceItem).text("€" + newPrice.toFixed(2));
    selectedItem[priceItem] = newPrice;
  }
}

milk1l = counterItem.milk1l;
$("#milk1lQua").html(milk1l);
milk2l = counterItem.milk2l;
$("#milk2lQua").html(milk2l);
breadWH = counterItem.breadWH;
$("#breadWHQua").html(breadWH);
breadBR = counterItem.breadBR;
$("#breadBRQua").html(breadBR);
breadGR = counterItem.breadGR;
$("#breadGRQua").html(breadGR);
tBags = counterItem.tBags;
$("#tBagsQua").html(tBags);
