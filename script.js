// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assignment code here
function generatePassword() {
	var password = "";
	var fullpassword = "";
	var criteria = 0;
	var passwordLength = prompt(
		"How many characters would you like your password to be?"
	);
	// check if the entered password length is valid
	if (passwordLength < 8 || passwordLength > 128) {
		alert("Password must be between 8 and 128 characters");
		return "invalid length";
	}
	var lowercase = confirm("Would you like lowercase letters?");
	if (lowercase === true) {
		criteria++;
		fullpassword += "abcdefghijklmnopqrstuvwxyz";
	}
	var uppercase = confirm("Would you like uppercase letters?");
	if (uppercase === true) {
		criteria++;
		fullpassword += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	}
	var numeric = confirm("Would you like numbers?");
	if (numeric === true) {
		criteria++;
		fullpassword += "0123456789";
	}
	var special = confirm("Would you like special characters?");
	if (special === true) {
		criteria++;
		fullpassword += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
	}
	if (criteria === 0) {
		alert("You must select at least one criteria! TRY AGAIN!");
		generatePassword();
	}

	for (var i = 0; i < passwordLength; i++) {
		password += fullpassword.charAt(
			Math.floor(Math.random() * fullpassword.length)
		);
	}

	return password;
}

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
