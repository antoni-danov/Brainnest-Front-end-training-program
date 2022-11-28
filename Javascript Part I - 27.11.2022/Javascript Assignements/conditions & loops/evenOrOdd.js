function evenOrOddNumber(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            console.log("even");
        } else {
            console.log("odd");
        }
    }
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

evenOrOddNumber(numbers);