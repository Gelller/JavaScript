
var j = 0;
var i = 0;
var flag = true;
var arr = new Array();

while (i <= 100) {
    flag = true;
    j = i;
    while (j > 1) {
        if (i % j == 0) {
            if (i != j) {
                flag = false;
            } else {
                flag = true;
            }
        }
        j--;
    }

    if (flag && i > 1) {
        arr.push(i)
    }
    i++;
}
alert(arr);


var basket = [
    ["milk", 35],
    ["apple", 10],
    ["bread", 30]
];
var price = countBasketPrice(basket);
alert(price)


function countBasketPrice(basket) {
    var price = 0;
    for (let x of basket) {
        price = price + x[1]
    }
    return price;
}


for (var i = 0; i < 10; alert(i++)) {
}

var str = "x"
for (i = 0; i < 20; i++) {
    console.log(str);
    str = str + "x";
}
