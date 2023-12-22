let firstName = 'Oleg'
let year = '34'
let name1 = 'Irina'
let year1 = 28
//в таких кавычках мы можем использовать сколько угодно строк
const old = 'hello my name is ' + name + 'and my age is ' + year
const newString = `hello my name ${name1} and i have ${year1} old` // + mane =  тоже равно результат
const output = `any string`

console.log(old)
console.log(newString)

console.log(old.length) // long
console.log(firstName.toUpperCase()) //Up ART
console.log(firstName.toLowerCase()) //Lou asdada
console.log(old.charAt(9))
console.log(old.indexOf('l'))
console.log(old.startsWith('hello'))
console.log(old.endsWith('34'))
console.log(old.repeat(2) + ' long')
