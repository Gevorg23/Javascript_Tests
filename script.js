// // Создаем переменную для хранения температуры в градусах Цельсия
// let celsiusTemperature = 25;

// // Преобразуем значение в температуру по Фаренгейту согласно формуле
// let fahrenheitTemperature = (9 / 5) * celsiusTemperature + 32;

// // Выводим значение температуры в градусах Цельсия и Фаренгейта в консоль
// console.log("Температура в градусах Цельсия: " + celsiusTemperature + " °C");
// console.log("Температура в градусах Фаренгейта: " + fahrenheitTemperature + " °F");
// //_________________________________________________________________________________
// // Создаем переменную name и записываем в неё имя
// let name = "Gevorg Kazarian";

// // Создаем переменную admin и присваиваем ей значение из переменной name
// let admin = name;

// // Выводим значение переменной admin в консоль
// console.log("Значение переменной admin: " + admin);

// _______________________________________________________________________



//Задание 1 Получаем значения от пользователя с помощью функции prompt()
let num1 = Number(prompt("Введите число num1:"));
let num2 = Number(prompt("Введите число num2:"));

// Проверяем условия
if (num1 <= 1 && num2 >= 3) {
    console.log("Условия выполнены: num1 <= 1 и num2 >= 3");
} else {
    console.log("Условия не выполнены.");
}
// Задание 2 Перепишите код к тернарному оператору

// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }
let test = true;
console.log(test === true ? '+++' : '---');

// Задание 3  В переменной day лежит какое-то число из интервала от 1 до 31. 
// Определите в какую декаду месяца попадает это число (в первую, вторую или третью)

let day = 23; // Здесь может быть любое число от 1 до 31

let decade;

if (day >= 1 && day <= 10) {
    decade = "первую";
} else if (day >= 11 && day <= 20) {
    decade = "вторую";
} else if (day >= 21 && day <= 31) {
    decade = "третью";
} else {
    decade = "некорректное значение";
}

console.log(`Число ${day} попадает в ${decade} декаду месяца.`);
