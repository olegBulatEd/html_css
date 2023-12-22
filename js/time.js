const now = new Date()
// const start = new Date(1000 * 60 * 24 * 365)

// const date = new Date(2011, 0, 4, 12, 42, 12)

// console.log(start)
// console.log(date)
// console.log(now)
// console.log(now.getFullYear())
// console.log(now.getMonth)
// console.log(now.getSeconds)
// console.log(now.getMinutes)

// now.setFullYear(2025)
// console.log(now)

// console.log(now.toDateString())
// console.log(now.toTimeString())
// console.log(now.toLocaleDateString())
// console.log(now.toLocaleTimeString())

let mod = 'time'

const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const timeBtn = document.getElementById('Time')
const dateBtn = document.getElementById('date')

function getMod(x) {
	return function () {
		mod = x
		update()
	}
}

fullBtn.onclick = getMod('full')

timeBtn.onclick = getMod('time')

dateBtn.onclick = getMod('date')
setInterval(update, 1000)
update()

function update() {
	output.textContent = format(mod)
}

//Pure Function
function format(formatMod) {
	const now = new Date()

	switch (formatMod) {
		case 'date':
			return now.toLocaleDateString()
		case 'time':
			return now.toLocaleTimeString()
		case 'full':
			return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
	}
}
const timeMold = new Date()
timeMold.getTime(2)
console.log(timeMold)
let timeYear = timeMold
console.log(timeYear)
