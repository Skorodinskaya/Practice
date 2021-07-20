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

let sort = clients.sort((a, b) => a.order.length - b.order.length)


console.log(sort);