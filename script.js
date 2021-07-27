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

var tableState = false;
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

function emptyСart() {
    var Table = document.createElement("basketProduct");
    Table.className = "basket"
    Table.style.width = "200px"
    Table.style.height = "50px"
    Table.id = "tab"
    var newTr = document.createElement('tr');
    newTr.textContent = "Корзина пустая"
    Table.appendChild(newTr);
    document.body.appendChild(Table);
}

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

    var button = document.createElement('button');
    button.textContent = "Далее"
    button.id = "nextbutton"

    newTr.appendChild(button);
    Table.appendChild(newTr);

    if (tableState) {
        Table.style.display = 'block'
    }
    document.body.appendChild(Table);
    buttonInTable()
}


var imageMilk = document.getElementById("milkPicture");
var imageBread = document.getElementById("breadPicture");
var imageApple = document.getElementById("applePicture");

function addFirstPicture(name, arrributeName) {

    var appDiv = document.getElementById("big_picture");
    appDiv.innerHTML = "";
    appDiv.setAttribute("name", arrributeName)
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


    addFirstPicture("img/milk/milk1", "gallery")
    init("milk")

});

imageBread.addEventListener('click', function () {
    var bread = document.getElementById("gallery2");
    bread.style.display = 'block';

    var milk = document.getElementById("gallery");
    milk.style.display = 'none';

    var apple = document.getElementById("gallery3");
    apple.style.display = 'none';

    addFirstPicture("img/bread/bread4", "gallery2")
    init("bread")
});

imageApple.addEventListener('click', function () {

    var apple = document.getElementById("gallery3");
    apple.style.display = 'block';

    var milk = document.getElementById("gallery");
    milk.style.display = 'none';

    var bread = document.getElementById("gallery2");
    bread.style.display = 'none';

    addFirstPicture("img/apple/apple7", "gallery3")
    init("apple")
});

function init(name) {

    if (listBasket.productList.length == 0) {
        deleteTable()
        emptyСart()
    }
    var images = document.getElementsByName(name)
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = changeBigPicture;
    }
}
document.onkeydown = checkKey;
function checkKey(e) {


    if (document.getElementById("big_picture").hasAttribute("name")) {
        if (e.keyCode == '37') {
            var appDiv = document.getElementById("big_picture");
            var scr = appDiv.childNodes[0].src
            var gallery = document.getElementById(appDiv.getAttribute("name"));
            var galleryImg = gallery.children

            var counterImg = galleryImg.length + 1;
            for (var i = 0; i < galleryImg.length; i++) {
                if (i == 0 && galleryImg[i].src == scr) {
                    scr = galleryImg[galleryImg.length - 1].src
                    break
                } else if (galleryImg[i].src == scr) {
                    scr = galleryImg[galleryImg.length - counterImg].src
                    break
                }
                counterImg--;
            }
            changePictureOnKeyPress(appDiv, scr)

        } else if (e.keyCode == '39') {

            var appDiv = document.getElementById("big_picture");
            var scr = appDiv.childNodes[0].src
            var gallery = document.getElementById(appDiv.getAttribute("name"));
            var galleryImg = gallery.children
            var counterImg = galleryImg.length - 1;

            for (var i = 0; i < galleryImg.length; i++) {
                if (galleryImg[i].src == scr && i < galleryImg.length - 1) {
                    scr = galleryImg[i + 1].src
                    break

                } else if (i == galleryImg.length - 1) {
                    scr = galleryImg[counterImg].src
                    break
                }
                counterImg--;
            }
            changePictureOnKeyPress(appDiv, scr)
        }
    }
}

function changePictureOnKeyPress(appDiv, scr) {
    appDiv.innerHTML = "";
    var imageDomElement = document.createElement("img");
    imageDomElement.setAttribute("width", 200)
    imageDomElement.setAttribute("height", 200)
    imageDomElement.src = scr;
    appDiv.appendChild(imageDomElement);
}

function changeBigPicture(eventObj) {

    var appDiv = document.getElementById("big_picture");
    appDiv.innerHTML = "";
    var eventElement = eventObj.target;
    var name = eventElement.getAttribute("name")

    var gallery = eventElement.parentNode.getAttribute("id")
    appDiv.setAttribute("name", gallery)

    var imageNameParts = eventElement.id.split("_");
    var src = "img/" + name + "/" + name + imageNameParts[1] + ".png";

    var imageDomElement = document.createElement("img");
    imageDomElement.setAttribute("width", 200)
    imageDomElement.setAttribute("height", 200)
    imageDomElement.src = src;
    appDiv.appendChild(imageDomElement);
}

window.onload = emptyСart

jQuery(document).ready(function ($) {
    var button = document.getElementById("button");
    button.addEventListener('click', function () {

        var tab = document.getElementById("tab");
        if (tab.style.display == 'inline' || tab.style.display == 'block') {

            $("#tab").slideUp("slow", function () {
                tableState = false;
            });
        } else {
            $("#tab").slideDown("slow", function () {
                tableState = true;
            });

            $("#inputTable").slideUp("fast", function () {
            });
            $("#inputСommentTable").slideUp("fast", function () {

            });
        }
    });

});

function buttonInTable() {
    var nextbutton = document.getElementById("nextbutton");
    nextbutton.addEventListener('click', function () {
        var tab = document.getElementById("tab");
        $("#tab").slideUp("fast", function () {
            tableState = false;
        });
        if (!document.getElementById("inputTable")) {
            createInput("inputTable", "input", "addressButtonNext", "Введите адрес")
            callЕableСomments()
        }
        var inputTable = document.getElementById("inputTable");
        if (inputTable.style.display == 'inline-block' || inputTable.style.display == 'block') {

            $("#inputTable").slideUp("slow", function () {

            });
        } else {
            $("#inputTable").slideDown("slow", function () {

            });
        }
    });
}

function callЕableСomments() {

    var addressButtonNext = document.getElementById("addressButtonNext");
    addressButtonNext.addEventListener('click', function () {
        var tab = document.getElementById("tab");
        $("#inputTable").slideUp("fast", function () {
        });


        if (!document.getElementById("inputСommentTable")) {
            createInput("inputСommentTable", "inputСomment", "inputСommentButtonNext", "Комментарий")
        }
        $("#inputСommentTable").slideDown("slow", function () {

        });
    });

}

function createInput(idTable, idInput, idButton, string) {
    var inputTable = document.createElement('inputTable');
    var newTr = document.createElement('tr');

    var newtd = document.createElement('td');
    newtd.textContent = string

    newTr.appendChild(newtd);
    inputTable.appendChild(newTr);
    var newTr = document.createElement('tr');
    inputTable.className = "table2"
    inputTable.id = idTable

    var input = document.createElement('textarea');
    input.id = idInput
    input.type = "text"
    input.size = "200"
    input.maxLength = "200"

    newTr.appendChild(input);
    inputTable.appendChild(newTr);

    var newTr = document.createElement('tr');
    var button = document.createElement('button');
    button.textContent = "Далее"
    button.id = idButton

    newTr.appendChild(button);
    inputTable.appendChild(newTr);

    document.body.appendChild(inputTable);
}