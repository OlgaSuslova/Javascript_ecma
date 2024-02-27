// Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); 
// Ожидаемый результат: [1, 2, 3, 4, 5, 6]

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];


function mergeArrays (array1, array2) {
    const array = [...array1, ...array2]
    console.log(array);
}

mergeArrays(array1, array2)


// Создайте функцию removeDuplicates, которая принимает любое количество аргументов и возвращает новый массив, содержащий только уникальные значения. Используйте rest оператор для сбора всех аргументов в массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); 
// Ожидаемый результат: [1, 2, 3, 4, 5]

const arr = [1, 2, 3, 2, 4, 1, 5];

function removeDuplicates (...array) {
    const newArray = array.filter((item, index) => {
        return array.indexOf(item) === index
    })
    console.log(newArray);
}

removeDuplicates(arr)





// Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.



function getEvenNumbers (array) {
    const newArray = array.filter((x) => {return x%2 === 0})
    return newArray;
}

console.log(getEvenNumbers([1, 18, 20, 22]));
getEvenNumbers([1, 15, 25, 18, 20, 22])


// Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел

function calculateAverage (...array) {
    let value = 0;
    for (let i = 0; i < array.length; i++) {
        value += array[i];       
    }
    return value / array.length;
}
console.log(calculateAverage(10, 10, 30, 20, 30));


// второй вариант

function calculateAverage2 (...array) {
    const sum = array.reduce((acc, num) => acc + num, 0) // 0 - начальное значение аккумулятора
    const length = array.length;
    return sum / length;
}
console.log(calculateAverage2(10, 10, 30, 20, 30));

// Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

function capitalizeFirstLetter (string) {
    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

const srt = 'i am olga suslova'
console.log(capitalizeFirstLetter(srt));



// // 1. Функция getEvenNumbers
// function getEvenNumbers(arr) {
//     return arr.filter(num => num % 2 === 0);
//     }
    
//     // 2. Функция calculateAverage
//     function calculateAverage(arr) {
//     // reduce - применяем функцию к каждому элементу слева на право
//     // 0 - начальное значение аккумулятора
//     const sum = arr.reduce((acc, num) => acc + num, 0);
//     return sum / arr.length;
//     }
    
//     // 3. Функция capitalizeFirstLetter
//     function capitalizeFirstLetter(str) {
//     // split - разбиваем строку
//     // map - применяем к каждому элементу фукнцпию, которую передаем
//     // join объединяем в одну строку
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
//     }
    
//     const numbers = [1, 2, 3, 4, 5, 6];
//     console.log(getEvenNumbers(numbers)); // Выведет: [2, 4, 6]
//     console.log(calculateAverage(numbers)); // Выведет: 3.5
//     console.log(capitalizeFirstLetter('hello qwerty')); // Выведет: Hello Qwerty
