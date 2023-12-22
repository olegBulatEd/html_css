// const car = {
// 	model: 'Tayota',
// 	year: 2018,
// }

// const obiect = JSON.stringify(car) // создаём json
// console.log(obiect)

// const pars = JSON.parse(obiect) // сoздаём наоборот с json - js
// console.log(pars)
const list = document.getElementById('list')
const filter = document.getElementById('filter')

let Users = []
filter.addEventListener('input', event => {
	const alea = event.target.value.toLowerCase()
	const filterUsers = Users.filter(user =>
		user.name.toLowerCase().includes(alea)
	)
	render(filterUsers)
})

async function start() {
	list.innerHTML = 'Loading...'
	try {
		const resp = await fetch('https://jsonplaceholder.typicode.com/users') //rabotaem s dannimi metod fech
		const getUser = await resp.json()
		setTimeout(() => {
			Users = getUser
			render(getUser)
		}, 2000)
	} catch (err) {
		list.style.color = 'red'
		list.innerHTML = err.message
	}
}

function render(users = []) {
	if (users.length === 0) {
		list.innerHTML = 'This no user'
	} else {
		const html = users.map(toHTML).join('')
		list.innerHTML = html
	}
}

function toHTML(user) {
	return `
    <li class="list-group-item">${user.name}</li>
    `
}
start()
