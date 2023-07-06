// class students {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// class Device {
//     constructor(name, company){
//         this.name = name;
//         this.company = company;
//     }
// }

// const iwatch = new Device('iwatchUltra', 'apple');


// const ali = new students('Ali', 20);
// const ziyodbek = new students('Ziyodbek', 18);

// console.log(iwatch);


// class Car {
//     constructor(name, year) {
//         this.name  = name;
//         this.year = year
//     }
//     age() {
//         const date = new Date();
//         return date.getFullYear() - this.year;
//     }
// }

// const myCar = new Car('audi', 1990);
// myCar.age()






// function Person(name, age, getName){
//     this.name = name;
//     this.age = age;     
// }

// const vali = new Person('Vali', 20)

// console.log(vali);


// Homework

// 1
// class Laptop {
//     constructor(brend, color) {
//         this.brend = brend;
//         this.color = color;
//     }
// }

// const pc = new Laptop('Lenova', 'black')

// 2

// class Tree {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const value = new Tree('Beryoza');

// 3

// class Telephone {
//     constructor(brend, name){
//         this.brend = brend;
//         this.name = name;
//     }
// }

// const value = new Telephone('Xiaomi', 'Redmi 5+');

// 4

// class Clock {
//     constructor(color, figure){
//         this.color = color;
//         this.figure = figure;
//     }
// }

// const value = new Clock('black and white', 'square');

// 5

// class Tv {
//     constructor(name){
//         this.name = name;
//     }
// }

// const value = new Tv('Konka');


// 6

// class smartWatch {
//     constructor(name, brend, color){
//         this.name = name;
//         this.brend = brend; 
//         this.color = color
//     }
// }

// const value = new smartWatch('Blackview r1', 'smartWatch', 'black');

// 7

// class Car {
//     constructor(name, brend, color){
//         this.name = name;
//         this.brend = brend;
//         this.color = color;
//     }
// }

// const value = new Car('Lacetti', 'Chevrolet', 'white');

// 8

// class Tshirt {
//     constructor(size,color){
//         this.size = size;
//         this.color = color;
//     }
// }

// const value = new Tshirt('M', "white");

// 9

// class window {
//     constructor(brend, color){
//         this.brend = brend;
//         this.color = color;
//     }
// }

// const value = new window('Akfa', 'black');

// 10

// class Vacuum {
//     constructor(brend){
//         this.brend = brend;
//     }
// }

// const value = new Vacuum('Samsung');

// 11

// class Fridge {
//     constructor(brend, color){
//         this.brend = brend;
//         this.color = color;
//     }
// }

// const value = new Fridge('Samsung', 'white');

// 12

// class Uzbekistan {
//     constructor(capital, population) {
//         this.capital = capital;
//         this.population = population;
//     }
// }

// const value = new Uzbekistan('Tashkent', '34,92mln');

// 13 

// class Russia {
//     constructor(capital, population) {
//         this.capital = capital;
//         this.population = population;
//     }
// }

// const value = new Russia('Moskva', '143,4');


// 14

// class conditioner {
//     constructor(brend){
//         this.brend = brend;
//     }
// }

// const value = new conditioner('Rowa');

// 15

// class camera {
//     constructor(brend,price) {
//         this.brend = brend;
//         this.price = price;
//     }
// }

// const value = new camera('canon', '300$');


// 16

// class bike {
//     constructor(brend, price) {
//         this.brend = brend;
//         this.price = price;
//     }
// }

// const value = new bike('Yamaha', '400$');

// 17

// class motorBike {
//     constructor(brend, price) {
//         this.brend = brend;
//         this.price = price;
//     }
// }

// const value = new motorBike('Yamaha r3', '400$');

// 18


// class Keyboard {
//     constructor(brend,price) {
//         this.brend = brend;
//         this.price = price;
//     }
// }

// const value = new Keyboard('A4tech X7', '300$');

// 19

// class Ninetendo {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }

// const value = new Ninetendo('Nintendo Switch', '300$');

// 20

// class engAlp {
//     constructor(words,vowels,consonants) {
//         this.words = words;
//         this.vowels = vowels;
//         this.consonants = consonants;
//     }
// }

// const value = new engAlp(26, 6 , 20);




class Keyboard {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    // 1
    esc(){
        console.log('esc bosilganda smth happen');
    }
    // 2
    shift(){
        console.log('shift bosilganda smth happen');
    }
    // 3
    tab(){
        console.log('tab bosilganda smth happen');
    }
    // 4
    capslk(){
        console.log('capslk bosilganda smth happen');
    }
    // 5
    ctrl(){
        console.log('ctrl bosilganda smth happen');
    }
    // 6
    fn(){
        console.log('fn bosilganda smth happen');
    }
    // 7
    windows(){
        console.log('windows bosilganda smth happen');
    }
    // 8
    alt(){
        console.log('alt bosilganda smth happen');
    }
    // 9
    probel(){
        console.log('probel bosilganda smth happen');
    }
    // 10
    home(){
        console.log('home bosilganda smth happen');
    }
    // 11
    pgup(){
        console.log('pgup bosilganda smth happen');
    }
    // 12
    pgdn(){
        console.log('pgdn bosilganda smth happen');
    }
    // 13
    end(){
        console.log('end bosilganda smth happen');
    }
    // 14
    enter(){
        console.log('enter bosilganda smth happen');
    }
    // 15
    del(){
        console.log('del bosilganda smth happen');
    }
    // 16
    numlock(){
        console.log('numlock bosilganda smth happen');
    }
    // 17
    backspace(){
        console.log('backspace bosilganda smth happen');
    }
    // 18
    delete(){
        console.log('delete bosilganda smth happen');
    }
    // 19
    insert(){
        console.log('insert bosilganda smth happen');
    }
    // 20
    prtsc(){
        console.log('prtsc bosilganda smth happen');
    }
    // 21
    f1(){
        console.log('f1 bosilganda smth happen');
    }
    // 22
    f2(){
        console.log('f2 bosilganda smth happen');
    }
    // 23
    f3(){
        console.log('f3 bosilganda smth happen');
    }
    // 24
    f4(){
        console.log('f4 bosilganda smth happen');
    }
    // 25
    f5(){
        console.log('f5 bosilganda smth happen');
    }
    // 26
    f6(){
        console.log('f6 bosilganda smth happen');
    }
    // 27
    f7(){
        console.log('f7 bosilganda smth happen');
    }
    // 28
    f8(){
        console.log('f8 bosilganda smth happen');
    }
    // 29
    f9(){
        console.log('f9 bosilganda smth happen');
    }
    // 30
    f10(){
        console.log(('f10 bosilganda smth happen'));
    }
    // 31
    f11(){
        console.log('f11 bosilganda smth happen');
    }
    // 32
    f12(){
        console.log('f12 bosilganda smth happen');
    }
}

const key = new Keyboard('magic', 'vireless')