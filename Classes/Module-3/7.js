const createPerson = (name, age) => {
	const person = Object.create({})
	person.name = name;
	person.age = age;

	return person
}

const p1 = createPerson('Edgar', 28);

console.log(p1)

const p2 = createPerson('Arturo', 28);