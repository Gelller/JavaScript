
var numberInput = prompt('Введите число от 0 до 999')
let number = {
    единицы: 0,
    десятки: 0,
    сотни: 0
};


if (numberInput >= 0 && numberInput <= 999) {
    numberСheck(parseInt(numberInput))
    alert(number.сотни + " " + number.десятки + " " + number.единицы);
} else {
    console.log("Не входит в диапозон")
}

function numberСheck(numberInput) {
    var buffer = 0;

    buffer = Math.floor(numberInput / 100)
    number.сотни = buffer

    numberInput = numberInput - buffer * 100
    buffer = Math.floor(numberInput / 10)
    number.десятки = buffer

    numberInput = numberInput - buffer * 10
    number.единицы = numberInput
}

let product = {
    name: '',
    price: 0,
    quantity: 0,
    addProductInBasket: function () {
        let newProduct = Object.create(product)
        newProduct.name = prompt("Имя товара")
        newProduct.price = parseInt(prompt("Цена товара"))
        newProduct.quantity = parseInt(prompt("Количества товара"))
        return newProduct;
    }
}

let listBasket = {
    productList: new Array(),

    addProduct: function () {
        var newProduct = product.addProductInBasket()
        this.productList.push(newProduct)
    },
    sum: function () {
        var price = 0;
        for (let x of listBasket.productList) {
            price += x.price * x.quantity
        }
        return price;
    },
    changeQuantity: function (name) {
        var found = false;
        for (let x of listBasket.productList) {
            if (name == x.name) {
                x.quantity = parseInt(prompt("Введите количества товара"))
                found = true;
                break;
            }
        }
        if (found) {
            alert("Количество товара изменено")
        } else {
            alert("Не найдено")
        }
    },
    outputList: function () {
        var productList = '';
        var number = 1;
        for (let x of listBasket.productList) {
            productList += number++ + "----Имя " + x.name + ", цена " + x.price + ", количество " + x.quantity + "\n"
        }
        return productList;
    }

};

listBasket.addProduct();
listBasket.addProduct();

listBasket.changeQuantity(prompt("Изменить количества товара, введите имя"))

alert("Корзина\n" + listBasket.outputList() + "\n" + "Сумма товаров " + listBasket.sum());
