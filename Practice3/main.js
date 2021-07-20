// - створити функцію яка приймає масив та виводить його
let array0 = [1, 3, 5, 7];
fun(array0);

function fun() {
}

console.log(array0)


// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function numbers(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        console.log(num1);
    }
    if (num2 < num1 && num2 < num3) {
        console.log(num2);
    } else {
        console.log(num3);
    }
}

numbers(23, 15, 67)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxNumbers(a, b, c) {
    if (a > b && a > c) {
        console.log(a);
    }
    if (b > a && b > c) {
        console.log(b);
    } else {
        console.log(c);
    }
}

maxNumbers(55, 105, 3)

// - створити функцію яка повертає найбільше число з масиву
let array = [23, 66, 98, 3, 6, 10];
numbs(array);

function numbs(newNameArray) {
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
let array3 = [12, 4, 5, 8, 10];
let sss = sum3(array3);

function sum3(hhh) {
    let suma = 0;
    for (let i = 0; i < hhh.length; i++) {
        suma = suma + hhh[i]
    }
    return suma
}

console.log(sss);

let array2 = [12, 4, 5, 8, 10];
let sum = 0;
for (let i = 0; i < array2.length; i++) {
    sum += array2[i];
}
console.log(sum);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
array4 = [2, 4, 6, 8];
let arma = arithmetic(array4);

function arithmetic(arith) {
    let arithma = 0;
    for (let i = 0; i < arith.length; i++) {
        arithma = arithma + arith [i] / arith.length;
    }
    return arithma
}

console.log(arma);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//     Для виведення використати попередню функцію.

function random1(num) {
    for (let i = 0; i < 30; i++) {
        array4.push(Math.round(Math.random() * num));
    }
}

random1(101);
console.log(array4);

let array5 = [];

function random() {
    for (let i = 0; i < 30; i++) {
        array5.push(Math.round(Math.random() * 100));
    }
}
random();
console.log(array5);

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
let array6 = [{
    name: 'Anna',
    age: 20,
    hobby: 'k-pop',
},
    {
        name: 'Roma',
        age: 50,
        hobby: 'football',
    }
];
let array7 = [];
key(array6);
function key () {
    for (const array6Element of array6) {
        for (const i in array6Element) {
            console.log(i);
            array7.push(i)
        }
    }
}
key ();
console.log(array7);

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
let array8 = [{
    name: 'Anna',
    age: 20,
    hobby: 'k-pop',
},
    {
        name: 'Roma',
        age: 50,
        hobby: 'football',
    }
];
let array9 = [];
mean(array8);
function mean () {
    for (const array8Element of array8) {
        for (const a in array8Element) {
            console.log(array8Element[a]);
            array9.push(array8Element[a])
        }
    }
}
mean ();
console.log(array9);

