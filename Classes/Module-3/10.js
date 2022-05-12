const createPerson = (name, age) => {
	const person = Object.create({})
	person.name = name;
	person.age = age;

	return person
}

const user1 = createPerson('Edgar', 28);
user1.weight = '55kg'
user1.height = '175cm'
user1.genre = 'Male'
user1.address = 'Mexico'

console.log(user1)

const p2 = createPerson('Arturo', 28);

for (const key in user1) {
	if (key === 'weight') {
		user1.weight = Number(user1.weight.replace('kg', ''))
	}
	if (key === 'height') {
		user1.height = Number(user1.height.replace('cm', ''))
	}
}

console.log(user1)

Object.keys(user1).forEach(key => {
	if (key === 'height') {
		user1.height = user1.height / 100
	}
})

console.log(user1)

user1.name = ''

Object.values(user1).forEach(value => {
	if (value === '' || value === 0) {
		alert('Favor de verificar toda la información')
	}
})