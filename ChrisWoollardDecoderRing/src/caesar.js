// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
 const alphabet =  "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
  
  function caesar(input, shift, encode = true) {
 input = input.toLowerCase();
		const encodedMessage = [];
		if (shift === 0 || shift < -25 || shift > 25) return false;
		if (encode == false) {
			shift = -shift;
		}
		for (let i = 0; i < input.length; i++) {
			let inputChar = input.charAt(i);
			if (!alphabet.includes(inputChar)) {
				encodedMessage.push(inputChar);
			} else {
				for (let j = 0; j < alphabet.length; j++) {
					let newShift = j + 26 + shift;
					if (alphabet.charAt(j) === inputChar) {
						encodedMessage.push(alphabet.charAt(newShift));
						break;
					}
				}
			}
		}
		return encodedMessage.join("");
	}
	return {
		caesar,
	};
})();
module.exports = { caesar: caesarModule.caesar };