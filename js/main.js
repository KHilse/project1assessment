var inputElement = document.getElementById("modify-amount");
var valueElement = document.getElementById("result");

document.getElementById("plus").addEventListener("click", doMath);
document.getElementById("minus").addEventListener("click", doMath);


function doMath(event) {
	var modAmount = Number(inputElement.value);
	var result = Number(valueElement.textContent);
	if (Number.isInteger(modAmount)) {
		if (event.target.id == "minus") {
			modAmount = -modAmount;
		}
		result += modAmount;
		if (result >= 0) {
			valueElement.classList.remove("negative");
		} else {
			valueElement.classList.add("negative");
		}
		valueElement.textContent = result.toString();
	}
}

