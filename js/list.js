const inputElement = document.getElementById('title')
const createPosition = document.getElementById('create')
const valueListe = document.getElementById('list')

// function render() {
// 	// for (let i = 0; i < massiv.length; i++) {
// 	// 	valueListe.insertAdjacentHTML('beforeend', getNowMassiv(massiv[i]))
// 	// }

// 	for (let mas of massiv) {
// 		valueListe.insertAdjacentHTML('beforeend', getNowMassiv(mas))
// 	}
// }

const massiv = [
	{
		title: 'writing string',
		completed: false,
	},
	{
		title: 'talk about somfing',
		completed: true,
	},
]

function render() {
	valueListe.innerHTML = ''
	if (massiv.length === 0) {
		valueListe.innerHTML = '<p>Нет элементов</p>'
	}
	for (let i = 0; i < massiv.length; i++) {
		valueListe.insertAdjacentHTML('beforeend', getNowMassiv(massiv[i], i))
	}
}

createPosition.onclick = function () {
	if (inputElement.value.length === 0) {
		return
	}
	const newList = {
		title: inputElement.value,
		completed: false,
	}
	// valueListe.insertAdjacentHTML('beforeend', getNowMassiv(newList))
	massiv.push(newList)
	render()
	inputElement.value = ''
}

valueListe.onclick = function (event) {
	if (event.target.dataset.index) {
		const index = Number(event.target.dataset.index)
		const type = event.target.dataset.type

		if (type === 'toggle') {
			massiv[index].completed = !massiv[index].completed
		} else if (type === 'remove') {
			massiv.splice(index, 1)
		}
		render()
	}
}

function getNowMassiv(mas, index) {
	return `	<li
					class="list-group-item d-flex justify-content-between align-items-center"
				>
                <span class='${
									mas.completed ? 'text-decoration-line-through' : ''
								}'>${mas.title}</span>
                
					<span class="btn btn-small btn-${
						mas.completed ? 'warning' : 'success'
					}" data-index="${index}" data-type="toggle">&check;</span>
					<span class="btn btn-small btn-danger"  data-index="${index}" data-type="remove">&times;</span>
				</li>`
}
render()
