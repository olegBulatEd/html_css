let num = 42
let firstName = 'Oleg'
let num2 = num + 10

console.log(num2)
num = num2 - num

console.log(num)

let num3 = ((num + 10) * 2) / 5 - 1
console.log(num3)

const resultElement = document.getElementById('resultFinish')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const buttonPlus = document.getElementById('plus')
const buttonMinus = document.getElementById('minus')
const buttonMnoj = document.getElementById('umnoj')
const buttonDelet = document.getElementById('delet')

let action = '+'

buttonPlus.onclick = function () {
	action = '+'
}
buttonMinus.onclick = function () {
	action = '-'
}
buttonMnoj.onclick = function () {
	action = '*'
}

buttonDelet.onclick = function () {
	action = '/'
}

function printResult(result) {
	if (result < 0) {
		resultElement.style.color = 'red'
	} else if (result > 0) {
		resultElement.style.color = 'green'
	}
	resultElement.textContent = result
}

function computeNumberWithAction(input1, input2, actionSymbol) {
	const num1 = Number(input1.value)
	const num2 = Number(input2.value)
	// return actionSymbol == '+' способ тернарного письма
	// 	? num1 + num2
	// 	: num1 - num2

	if (actionSymbol == '+') {
		return num1 + num2
	} else if (actionSymbol == '-') {
		return num1 - num2
	} else if (actionSymbol == '/') {
		return num1 / num2
	} else if (actionSymbol == '*') {
		return num1 * num2
	}
}

submitBtn.onclick = function () {
	const result = computeNumberWithAction(input1, input2, action)
	printResult(result)
	// if (action == '+') {
	// 	const sum = +input1.value + +input2.value
	// 	printResult(sum)
	// } else if (action == '-') {
	// 	const sum = +input1.value - +input2.value
	// 	// resultElement.textContent = sum
	// 	printResult(sum)
	// } else if (action == '/') {
	// 	const sum = +input1.value / +input2.value
	// 	printResult(sum)
	// } else if (action == '*') {
	// 	const sum = +input1.value * +input2.value
	// 	printResult(sum)
	// }
}
