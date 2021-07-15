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
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let sport = [
//     {kind: 'football, basketball, running'},
//     {text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa deserunt distinctio eum minima natus nesciunt\n' +
//             '    omnis repudiandae velit voluptatum!'}
// ];

document.write(`<div>`);
for (let i = 0; i < 10; i++) {
    document.write(`<div>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, impedit.</p>
        </div>`);
}
document.write(`</div>`);

