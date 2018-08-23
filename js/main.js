var inValue;
var pText;
var i;

function f1() {
	inValue = document.getElementById('name').value;
	pText = document.getElementById("p_text").innerText;
	x = pText.split(" ");
	count = 0;
	for (i = 0; i < x.length; i++) {
		if (x[i] == inValue) {
			x[i] = "<mark>" + x[i] + "</mark>"
			count++;
		}
		if (count == 0 && inValue != "") {
			document.getElementById("no_result").innerText = "no result";
		} else if (inValue == "") {
			document.getElementById("no_result").innerText = "";
		}
		else {
			document.getElementById("no_result").innerText = "result " + count;
		}
	}
	document.getElementById("p_text").innerHTML = x.join(" ");
}