// - створити функцію яка приймає масив та виводить його
let array0 = [1, 3, 5, 7];
fun(array0);
function fun() {
}
console.log(array0)


// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function numbers (num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        console.log(num1);
    }
    if (num2 < num1 && num2 < num3) {
        console.log(num2);
    }
    else {
        console.log(num3);
    }
}
numbers(23, 15, 67)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxNumbers (a, b, c) {
    if (a > b && a > c) {
        console.log(a);
    }
    if (b > a && b > c) {
        console.log(b);
    }
    else {
        console.log(c);
    }
}
maxNumbers(55, 105, 3)

// - створити функцію яка повертає найбільше число з масиву
let array = [23, 66, 98, 3, 6, 10];
numbs (array);
function numbs (newNameArray) {
    let max = array [0];

    for (let num of newNameArray) {
        if (num > max) {
            max = num;
        }
    }
    console.log("Повертає найбільше: ", max);
}

// - створити функцію яка повертає найменьше число з масиву
let array1 = [45, 6, 98, 105, 2, 777];
funct(array1);
function funct(nameArray) {
    let min = array1 [0];

    for (let itemArray of nameArray) {
        if (itemArray < min) {
            min = itemArray
        }
    }
    console.log("Повертає найменьше: ", min)
    return min;
}

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
