// Name of the task: Mutations

// task: Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

// solution:

function mutation(arr) {

	// Берем первый элемент массива, переводим его в нижний регистр, затем делаем из него массив и проверяем с помощью метода every и indexOf каждое вхождение текущей буквы в нулевом элементе массива.

	return arr[1].toLowerCase().split("").every((letter) => {

		return arr[0].toLowerCase().indexOf(letter) !== -1;

	});
}