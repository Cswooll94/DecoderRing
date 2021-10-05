
const substitutionModule = (function () {
 

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;

		input = input.toLowerCase();
		let result = "";
		const alphabetString = "abcdefghijklmnopqrstuvwxyz";
		const alphabetArray = alphabet.split("");
		let duplicateFound = alphabetArray.some(
			(currentValue, currentIndex) =>
				alphabetArray.indexOf(currentValue) !== currentIndex
		);
		if (duplicateFound) return false; 

		for (let i = 0; i < input.length; i++) {
			if (input[i] === " ") result += " ";
			if (encode) {
				index = alphabetString.indexOf(input.charAt(i));
				result += alphabet.charAt(index);
			} else {
				index = alphabet.indexOf(input.charAt(i));
				result += alphabetString.charAt(index);
			}
		}
		return result;
	}

	return {
		substitution,
	};
})();

module.exports = { substitution: substitutionModule.substitution };
