
var a = prompt("Введите a")
var b = prompt("Введите b")

if (a >= 0 && b >= 0) {
    alert("Положительные " + (a - b))
} else if (a < 0 && b < 0) {
    alert("Отрицательные " + (a * b))
} else if ((a > + 0 || a < 0) && (b >= 0 || b < 0)) {
    alert("Разные знаки " + (parseInt(a) + parseInt(b)))
}


function numbers(a) {
    let arr = new Array(a);
    var j = 0;
    for (let i = a; i <= 15; i++) {
        arr[j] = i;
        j++;
    }
    alert(arr);
}

a = prompt("Введите a от 0 до 15")

switch (a) {
    case '0':
        numbers(a);
        break;
    case '1':
        numbers(a);
        break;
    case '2':
        numbers(a);
        break;
    case '3':
        numbers(a);
        break;
    case '4':
        numbers(a);
        break;
    case '5':
        numbers(a);
        break;
    case '6':
        numbers(a);
        break;
    case '7':
        numbers(a);
        break;
    case '8':
        numbers(a);
        break;
    case '9':
        numbers(a);
        break;
    case '10':
        numbers(a);
        break;
    case '11':
        numbers(a);
        break;
    case '12':
        numbers(a);
        break;
    case '13':
        numbers(a);
        break;
    case '14':
        numbers(a);
        break;
    case '15':
        numbers(a);
        break;
    default:
        alert('Error');
        break;
}

a = prompt("Введите a")
b = prompt("Введите b")

function sum(a, b) {
    return parseInt(a) + parseInt(b);
}

function sub(a, b) {
    return a - b;
}

function div(a, b) {
    return a / b;
}

function mul(a, b) {
    return a * b;
}

alert(sum(a, b));
alert(sub(a, b));
alert(div(a, b));
alert(mul(a, b));


var arg1 = prompt("Введите arg1")
var arg2 = prompt("Введите arg2")
var operation = prompt("Введите operation")

alert(arg1 + operation + arg2 + "=" + mathOperation(arg1, arg2, operation))

function mathOperation(arg1, arg2, operation) {
    var result;
    switch (operation) {
        case '+':
            result = parseInt(arg1) + parseInt(arg2);
            break;
        case '-':
            result = arg1 - arg2;
            break;
        case '/':
            result = arg1 / arg2;
            break;
        case '*':
            result = arg1 * arg2;
            break;
        default:
            alert('Error');
            break;
    }
    return result;
}

if (null == 0) {
    alert("true")
} else {
    alert("false")
}


var val = prompt("Введите val")
var pow = prompt("Введите pow")

alert(power(val, pow))

function power(val, pow) {
    if (pow != 1) {
        pow--;
        return val * power(val, pow)
    } else {
        return val;
    }
}




