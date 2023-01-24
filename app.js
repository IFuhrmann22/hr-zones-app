// commit to github

const calcBtn = document.querySelector('#btnCalc');
const resetBtn = document.querySelector('#btnRes');
const inputFields = document.querySelectorAll('input');

function Maxhr() {	
  const age = document.querySelector("#userage").value;
	const restHr = document.querySelector("#userest").value;

  if (age == "" || age == NaN) { 
    alert("Please enter valid age");
	} else if (restHr == "" || restHr == NaN) {
		alert("Please enter valid resting heart rate");
	} else {
			let mhr = 220 - parseInt(age);
			let hrReserve = mhr - parseInt(restHr);		
			let zone60 = Math.round((hrReserve * 0.6) + parseInt(restHr)); 			
			let zone70 = Math.round((hrReserve * 0.7) + parseInt(restHr));
			let zone80 = Math.round((hrReserve * 0.8) + parseInt(restHr));
			let zone90 = Math.round((hrReserve * 0.9) + parseInt(restHr));
			// document.querySelector("#max").innerHTML = mhr;
			// document.querySelector("#h60").innerHTML = zone60;
			// document.querySelector("#h70").innerHTML = zone70;
			// document.querySelector("#h80").innerHTML = zone80; 
			// document.querySelector("#h90").innerHTML = zone90;
			// console.log(mhr, hrReserve);
			// console.log(zone60);
			// console.log(zone70);
			// console.log(zone80);
			// console.log(zone90);
		}
	}

	// function createResults () {
	// 	const divResutls = document.createElement('div');
 	// 	divResutls.className = 'container2'
	// }

calcBtn.addEventListener('click', Maxhr);
window.addEventListener ('keypress', function(e) {
		if (e.key === 'Enter') {
			Maxhr();
		}
});

resetBtn.addEventListener('click', () => {
	for (input of inputFields) {
		input.value = '';
		// remov divResutls with zones
		// divResutls.remove();
	}
})

// DOM to add zones with colors


// const addItemInput = document.querySelector('#addItem');
// const itemsUL = document.querySelector('#items');

// addItemInput.addEventListener('keypress', function(e) {
// 	if (e.key === 'Enter') {
// 		if (!this.value) return; //if input is empty, skip everything
// 		//add a new item to list
// 		const newItemText = this.value;
// 		const newItem = document.createElement('li');
// 		newItem.innerText = newItemText;
// 		itemsUL.appendChild(newItem);
// 		this.value = '';