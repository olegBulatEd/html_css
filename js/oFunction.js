//Function declaration
function greet(name) {
	console.log('hello - ', name)
}
// Function Expression
const greet2 = function (name) {
	console.log('2 Hello -', name)
}
greet('Oleg')
greet2('Irina')

//console.dir(greet) можем увидеть пречень свойств функции в консоле!

// setTimeout(function () {
// 	greet('Igori')
// }, 1500)

// let counter = 0
// const interval = setInterval(function () {
// 	if (counter === 5) {
// 		clearInterval(interval)
// 	} else {
// 		console.log(++counter)
// 	}
// }, 2000)

//Arrow function

const arrow = (name, age) => {
	console.log('hello - ', name, age)
}

const pow = (num, exp) => Math.pow(num, exp)
arrow('Oleg', 34)

console.log(pow(2, 5))

const sumOl = (...numbers) => {
	return numbers.reduce((acc, unc) => (acc += unc), 0)
}

console.log(sumOl(1, 3, 5, 90))

console.log(sumOl(1, 23, 2, 42, 22))
