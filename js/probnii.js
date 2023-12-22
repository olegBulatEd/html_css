const people = [
	{
		nem: 'Irina',
		lastName: 'Kurochkina',
		year: 28,
	},
	{ name: 'Oleg', lastName: 'Bulat', year: 34 },

	{ name: 'Igori', lastName: 'Bulat', year: 24 },
	{ name: 'Aleksandra', lastName: 'Bulat', year: 14 },
]

// const findePesen = people.find(function (per) {
// 	return per.year === 28
// 	// if (per.year === 28) { это вариант что вернуть через цикл for
// 	// 	return true
// 	// }
// })
// const finded = people.find(p => p.year === 28)
// console.log(finded)

// let sumYear = 0

// const filtered = people.filter(function (p) {
// 	return p.year > 25
// })
// // const filtered = people.filter(p => p.year > 26)
// console.log(filtered)

// // filtered.forEach(function (p) {
// // 	sumYear = sumYear + p.year
// // })
// filtered.forEach(p => (sumYear = sumYear + p.year))

// console.log(sumYear)

const byYear = p => p.year > 10
const olYear = p => p.year

const allSum = people
	.filter(byYear)
	.map(olYear)
	.reduce((acc, p) => acc + p, 0)

console.log(allSum)

const stringHi = 'Hello how are you?'

const reversed = stringHi.split('').reverse().join('')

console.log(reversed)
console.log(byYear)

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}
const num1 = getRandomNumber(10, 100)
console.log(num1)
