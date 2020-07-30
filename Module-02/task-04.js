'use trict';

// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.

const formatString = function (string) {
	string.length < 40
		? console.log(string)
		: console.log(string.slice(0, 40) + '...');
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
	formatString(
		'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'
	)
);
// вернется форматированная строка

// if (string.length <= 40) {
//   return string;
// } else {
//   let formsString = "";
//   for (let i = 0; i < 40; i += 1) {
//     let textString = string.charAt(i);
//     formsString += textString;
//   }
//   formsString += '...';
//   return formsString;
// };
