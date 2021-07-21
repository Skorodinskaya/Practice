// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const anna = new Client(1, 'Anna', 'Smith', 'smith.gmail', 57683, [1, 'jnijn', 89]);
const maxim = new Client(2, 'Max', 'Smith', 'smith.gmail', 57683, [4, 'jfldd', 67]);
const irana = new Client(3, 'Ira', 'Smith', 'smith.gmail', 57683, ['ssbsd', 6]);
const mira = new Client(4, 'Mira', 'Smith', 'smith.gmail', 57683, ['sdcds', 5]);
const mariana = new Client(5, 'Maria', 'Smith', 'smith.gmail', 57683, [3]);
const ivan = new Client(6, 'Ivan', 'Smith', 'smith.gmail', 57683, [2]);
const serg = new Client(7, 'Serg', 'Smith', 'smith.gmail', 57683, ['jdf']);
const vova = new Client(8, 'Vova', 'Smith', 'smith.gmail', 57683, [7, 'hjk']);

let clients = [anna, maxim, irana, mira, mariana, ivan, serg, vova];

// let sort = clients.sort( function (a, b) {
//     return a.order.length - b.order.length
// })

let sort = clients.sort((a,b) => a.order.length - b.order.length)
console.log(sort);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

function Car (model, manufacturer, year, maxSpeed, volumeEngine, conductor, drive, info, increaseMaxSpeed,changeYear,addDriver ) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volumeEngine = volumeEngine;
    this.conductor = conductor;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function () {console.log(`model: ${this.model}; manufacturer: ${this.manufacturer}; year: ${this.year}; maxSpeed: ${this.maxSpeed}; volumeEngine: ${this.volumeEngine}`)};
    this.increaseMaxSpeed = function (newSpeed) {this.maxSpeed += newSpeed};
    this.changeYear = function (newValue) {this.year = newValue};
    this.addDriver = function (driver) {this.conductor = driver};
}
let car1 = new Car ('BMW', 'Japan', 2020, 220, 40, );
console.log(car1);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

class Car2 {
    constructor(model, manufacturer, year, maxSpeed, volumeEngine, newSpeed, driver) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volumeEngine = volumeEngine;
        this.newSpeed = newSpeed;
        this.newValue = year;
        this.driver = driver;
    }

    drive() {console.log('їдемо зі швидкістю', this.maxSpeed, 'на годину')}

    info () {console.log('model - ', this.model, ', manufacturer - ', this.manufacturer, ', year - ', this.year, ', max speed -', this.maxSpeed, ', engine volume -', this.volumeEngine )}

    increaseMaxSpeed () {console.log('збільшення максимальної швидкості', this.maxSpeed += this.newSpeed)}

    changeYear () {console.log('значення - ', this.newValue)}
}
// this.info = function () {console.log(`model: ${this.model}; manufacturer: ${this.manufacturer}; year: ${this.year}; maxSpeed: ${this.maxSpeed}; volumeEngine: ${this.volumeEngine}`)};
// this.increaseMaxSpeed = function (newSpeed) {this.maxSpeed += newSpeed};
// this.changeYear = function (newValue) {this.year = newValue};
// this.addDriver = function (driver) {this.conductor = driver};

const car2 = new Car2 ('BMW', 'Japan', 2020, 220, 40, 50,);
car2.drive();
car2.info();
car2.increaseMaxSpeed();
car2.changeYear();


