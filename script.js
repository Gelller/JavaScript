let catalog = [
    { name: 'milk', price: 35 },
    { name: 'bread', price: 10 },
    { name: 'apple', price: 30 },

];

var product = {
    name: '',
    price: 0,
    quantity: 0,
    addProductInBasket: function (item) {
        let newProduct = Object.create(product)
        newProduct.name = item.name
        newProduct.price = item.price
        newProduct.quantity = 1
        return newProduct;
    }
}

var listBasket = {
    productList: new Array(),
    addProduct: function (item) {
        if (this.productList.find(x => x.name == item.name) == null) {
            var newProduct = product.addProductInBasket(item)
            this.productList.push(newProduct)
        } else {
            var t = this.productList.find(x => x.name == item.name)
            t.quantity++;
        }
    },
    sum: function () {
        var price = 0;
        for (let x of listBasket.productList) {
            price += x.price * x.quantity
        }
        return price;
    }
};

var milk = document.getElementById("buyMilk");
var bread = document.getElementById("buyBread");
var apple = document.getElementById("buyApple");

function deleteTable() {
    var table = document.getElementById("tab")
    if (table != null) {
        table.parentNode.removeChild(table)

    }
}

milk.addEventListener('click', function () {
    listBasket.addProduct(catalog[0])
    deleteTable()
    addElement()

});
bread.addEventListener('click', function () {
    listBasket.addProduct(catalog[1])
    deleteTable()
    addElement()

});
apple.addEventListener('click', function () {
    listBasket.addProduct(catalog[2])
    deleteTable()
    addElement()
});

function addElement() {

    var Table = document.createElement("basketProduct");
    Table.className = "basket"
    Table.id = "tab"

    for (var i = 0; i < listBasket.productList.length; i++) {
        var newTr = document.createElement('tr');

        var id = document.createElement('td');
        id.textContent = i + 1
        id.className = "cell"
        newTr.appendChild(id);

        var name = document.createElement('td');
        name.textContent = listBasket.productList[i].name
        name.className = "cell"
        newTr.appendChild(name);

        var price = document.createElement('td');
        price.textContent = "Цена " + listBasket.productList[i].price * listBasket.productList[i].quantity
        price.className = "cell"
        newTr.appendChild(price);

        var quantity = document.createElement('td');
        quantity.textContent = "Кол " + listBasket.productList[i].quantity
        quantity.className = "cell"
        newTr.appendChild(quantity);


        Table.appendChild(newTr);
    }

    var newTr = document.createElement('tr');
    var sum = document.createElement('td');
    sum.textContent = "Сумма"
    sum.className = "cell"
    newTr.appendChild(sum);

    var sumPrice = document.createElement('td');
    sumPrice.textContent = listBasket.sum()
    sumPrice.className = "cell"
    newTr.appendChild(sumPrice);
    Table.appendChild(newTr);

    document.body.appendChild(Table);
}

var imageMilk = document.getElementById("milkPicture");
var imageBread = document.getElementById("breadPicture");
var imageApple = document.getElementById("applePicture");

function first(name) {

    var appDiv = document.getElementById("big_picture");
    appDiv.innerHTML = "";
    var imageDomElement = document.createElement("img");
    imageDomElement.setAttribute("width", 200)
    imageDomElement.setAttribute("height", 200)
    var src = name + ".png";
    imageDomElement.src = src;
    appDiv.appendChild(imageDomElement);
}

imageMilk.addEventListener('click', function () {
    var milk = document.getElementById("gallery");
    milk.style.display = 'block';

    var bread = document.getElementById("gallery2");
    bread.style.display = 'none';

    var apple = document.getElementById("gallery3");
    apple.style.display = 'none';


    first("img/milk/milk1")
    init("milk")

});

imageBread.addEventListener('click', function () {
    var bread = document.getElementById("gallery2");
    bread.style.display = 'block';

    var milk = document.getElementById("gallery");
    milk.style.display = 'none';

    var apple = document.getElementById("gallery3");
    apple.style.display = 'none';

    first("img/bread/bread4")
    init("bread")
});

imageApple.addEventListener('click', function () {

    var apple = document.getElementById("gallery3");
    apple.style.display = 'block';

    var milk = document.getElementById("gallery");
    milk.style.display = 'none';

    var bread = document.getElementById("gallery2");
    bread.style.display = 'none';

    first("img/apple/apple7")
    init("apple")
});

function init(name) {

    var images = document.getElementsByName(name)
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = changeBigPicture;
    }
}

function changeBigPicture(eventObj) {

    var appDiv = document.getElementById("big_picture");
    appDiv.innerHTML = "";

    var eventElement = eventObj.target;
    var name = eventElement.getAttribute("name")
    var imageNameParts = eventElement.id.split("_");
    var src = "img/" + name + "/" + name + imageNameParts[1] + ".png";

    var imageDomElement = document.createElement("img");
    imageDomElement.setAttribute("width", 200)
    imageDomElement.setAttribute("height", 200)
    imageDomElement.src = src;
    appDiv.appendChild(imageDomElement);

}