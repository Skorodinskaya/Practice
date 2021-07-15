// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консол

let numbers = [1, 3, 5, 6, 8];
console.log(numbers);

let string = ['sky', 'sun', 'stars', 'clouds', 'rainbow'];
console.log(string);

let mix = ['dance', 'sing', 23, true, false];
console.log(mix);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль/
let sky = [];
sky[0] = 'sun';
sky [1] = 'clouds';
sky [2] = 'rainbow';
console.log(sky);

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

document.write(`<div>`);
for (let i = 0; i < 10; i++) {
    document.write(`<div>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, impedit.</p>
        </div>`);
}
document.write(`</div>`);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

document.write(`<div>`);
for (let i = 0; i < 10; i++) {
    document.write(`<div>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, impedit.</p>
${i}
        </div>`);
}
document.write(`</div>`);

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

document.write(`<div>`);
let i = 0;
while (i < 20) {

    document.write(
        `    <div>
        <h1>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa distinctio dolor doloremque ea eius enim, eum fugit id impedit laudantium mollitia natus nemo nostrum odit praesentium quaerat ullam, veniam voluptatem.
</h1>
    </div>`)
    i++;
}
document.write(`</div>`);

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
document.write(`<div>`);
let b = 0;
while (b < 20) {
    document.write(
        `<div>
        <h1>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa distinctio dolor doloremque ea eius enim, eum fugit id impedit laudantium mollitia natus nemo nostrum odit praesentium quaerat ullam, veniam voluptatem.
      ${b}
</h1>
  </div>`)
    b++;
}
document.write(`</div>`);

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let figure = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < 10; i++) {
    console.log(figure[i])
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let sentance = ['ariana', 'kim', 'sam', 'riana', 'ivana', 'maria', 'ana', 'dana', 'ira', 'nana']
for (let i = 0; i < 10; i++) {
    console.log(sentance[i]);
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let different = [true, 2, 'liana', false, 45, 'max', 88, 'japan', 'paris', 505];
for (let i = 0; i < 10; i++) {
    console.log(different[i]);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let country = ['spain', 'ukraine', 'korea', 22, 21, 23, true, false, 23, 'england'];

for (let i = 0; i < 10; i++) {
    if (typeof country[i] === 'boolean') {
        console.log(country[i]);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

for (let i = 0; i < 10; i++) {
    if (typeof country[i] === 'number') {
        console.log(country[i]);
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи


for (let i = 0; i < 10; i++) {
    if (typeof country[i] === 'string') {
        console.log(country[i]);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let capitals = [];
capitals[0] = 12
capitals [1] = 'madrid'
capitals [2] = 78
capitals [3] = true
capitals [4] = `kyiv`
capitals [5] = 88
capitals [6] = false
capitals [7] = 77
capitals [8] = `seul`
capitals [9] = 15
console.log(capitals);

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(`i`);
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(`i`);
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(`i`);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (!(i % 2)) {
        console.log(i);
        document.write(`i`);
    }
}

// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2) {
        console.log(i);
        document.write(`i`);
    }
}

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },

let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithAddress = []

for (const user of usersWithId) {
    for (const address of citiesWithId) {
        if (user.id === address.user_id){
            user.address = address;
            usersWithAddress.push(user)
        }
    }
}
console.log(usersWithAddress);





