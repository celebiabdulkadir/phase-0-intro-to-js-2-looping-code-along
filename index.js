const writeCards = (array) => {
	const newArray = [];
	for (let i = 0; i < array.length; i++) {
		newArray.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`);
	}
	return newArray;
};

const countDown = (count) => {
	for (let i = count; i >= 0; i--) {
		console.log(i);
	}
};
