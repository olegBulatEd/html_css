//event loop
// setTimeout(() => {
// 	console.log('after 2 seconds')
// }, 2000)

// const litle = setTimeout(() => {
// 	console.log('after 3 seconds')
// }, 3000)

// setTimeout(() => {
// 	console.log('after 4 seconds')
// }, 4000)

// clearTimeout(litle) // Очищает или удаляет функцию

// function delay(calback, time = 1000) {
// 	setTimeout(calback, time)
// }

// delay(() => {
// 	console.log('out')
// }, 2000)

const delay = (time = 1000) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([1, 2, 3])
		}, time)
	})
	return promise
}

delay(2500)
	.then(name => {
		console.log('Stringging', name)
		return name.map(x => x ** 2)
	})
	.then(name => {
		console.log(name)
	})

const getData = () => new Promise(resolve => resolve([2, 4, 3, 5]))

getData().then(array => console.log(array))

async function asyncExample() {
	try {
		await delay(3000)
		const data = await getData()
		console.log(data)
	} catch (err) {
		console.log(err)
	} finally {
		console.log('finally')
	}
}

asyncExample()
