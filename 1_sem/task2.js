// Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую.

// function createCalculator(number) {
//   let value = 10;
//   function add() {
//     number += value;
//   }
//   function subtract() {
//     number -= value;
//   }
//   return add(), subtract();
// }
// console.log(createCalculator(5));

// function createCalculator(initialValue) {
//   let value = initialValue;

//   return {
//     add: function (num) {
//       value += num;
//       console.log(value);
//     },
//     subtract: function (num) {
//       value -= num;
//     },
//     getValue: function () {
//       return value;
//     },
//   };
// }


// console.log(createCalculator(15));







function createCalculator(initialValue) {
    let value = initialValue;

    return {
      add: function (num) {
        value += num;
        console.log(value);
      },
      subtract: function (num) {
        value -= num;
        console.log(value);
      },
      getValue: function () {
        return value;
      },
    };
  }

  let calculator = createCalculator(10);

  console.log(calculator.add(5));
  console.log(calculator.subtract(8));
