console.log('string')
const person = {
	name: 'Oleg',
	age: 34,
	language: ['ru', 'ukr', 'md'],
	address: {
		city: 'Tiraspoli',
		street: 'Lenina',
	},
	'complex key': 'complex',
	['key_' + 1 * 20]: 'compiuted value',
	greet() {
		console.log('grett function')
	},
	arrow: () => {
		console.log('strelochnaea')
	},
	info() {
		console.log(this)
		console.log(this.name)
	},
}
console.log(typeof person)
console.log(person)
person.greet()
person.arrow()
person.info()

const name = 'Peter'

const { age, name: firstName = 'test', language } = person
console.log(language, name, age)

console.log(person)

//итерация по объектам
// for (let key in person) {
// 	if (person.hasOwnProperty(key)) {
// 		console.log(person[key])
// 	}
// }
// Object.keys(person).forEach(key => {
// 	console.log(person[key])
// })

const logger = {
	keys(obj) {
		console.log('Object keys', Object.keys(obj))
	},
	keysAndValue() {
		Object.keys(this).forEach(key => {
			console.log('Key:', key)
			console.log('value:', this[key])
		})
	},
}
const pypelle = {
	name: 'Oleg',
	age: 34,
	live: 'Tiraspoli',
}

console.log(pypelle)

const lastPypele = Object.assign({}, pypelle, {
	email: 'wawn@.com',
	love: 'Irina',
})
console.log(lastPypele)

const live = {
	...pypelle,
	adres: 'Tiraspoli',
	name: 'Irina',
}
console.log(live)
const were = Object.assign(pypelle)

const isPyple = Object.is(pypelle, were)

console.log(isPyple)

const keys = Object.keys(lastPypele)
for (const key of keys) {
	console.log(key)
}

const userData = {
	firstName: 'Brad',
	lastName: 'Traversy',
	age: 38,
	fullName() {
		return `${this.firstName} ${this.lastName}`
	},
}

const newDataUser = Object.create(userData)
newDataUser.firstName = 'Irina'
newDataUser.lastName = 'Bulat'
newDataUser.fullName()
console.log(newDataUser)

const employees = {
	name: 'Ron',
	lastName: 'April',
	live: 'Andy',
	begin: 'Leslie',
}
Object.getPrototypeOf(employees)

console.log(employees)

//Klassi i kak oni rabotaut

//cipocka classov

class Mama {
	isMama = true
}

class Dam {
	constructor(name, age) {
		this.name = name ?? "i'm not name"
		this.age = age ?? "I'm not age"
	}

	sayHello() {
		console.log('Я тут с вами меня зовут', this.name, this.age)
	}
}
const newDam = new Dam('Aleksandra', 'I am 57 years old')
console.log(newDam)
newDam.sayHello()
