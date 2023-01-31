	// how to call the function only once?

const calcBtn = document.querySelector('#btnCalc');
const resetBtn = document.querySelector('#btnRes');
const inputFields = document.querySelectorAll('input');

function calculateZones() {	

  const age = document.querySelector("#userage").value;
	const restHr = document.querySelector("#userest").value;
	const mhr = 220 - parseInt(age);
	const hrReserve = mhr - parseInt(restHr);	

  if (age == "" || age == NaN) { 
    alert("Please enter valid age");
	} else if (restHr == "" || restHr == NaN) {
		alert("Please enter valid resting heart rate");
	} else {		
			var zone60 = Math.round((hrReserve * 0.6) + parseInt(restHr)); 			
			var zone70 = Math.round((hrReserve * 0.7) + parseInt(restHr));
			var zone80 = Math.round((hrReserve * 0.8) + parseInt(restHr));
			var zone90 = Math.round((hrReserve * 0.9) + parseInt(restHr));

		// show results with DOM
		const resContainer = document.querySelector('.container-results');

		const maxPara = document.createElement('p');
		maxPara.innerText = `Max heart rate is ${mhr}`;
		maxPara.style.backgroundColor = '#b3b3b3';
		maxPara.classList.add('items-results')
		resContainer.appendChild(maxPara);

		const zone60Para = document.createElement('p');
		zone60Para.innerText = `60% of MHR is ${zone60}`;
		zone60Para.style.backgroundColor = '#3333ff';
		zone60Para.classList.add('items-results')
		maxPara.after(zone60Para);

		const zone70Para = document.createElement('p');
		zone70Para.innerText = `70% of MHR is ${zone70}`;
		zone70Para.style.backgroundColor = '#00cc00';
		zone70Para.classList.add('items-results')
		zone60Para.after(zone70Para);

		const zone80Para = document.createElement('p');
		zone80Para.innerText = `80% of MHR is ${zone80}`;
		zone80Para.style.backgroundColor = 'yellow';
		zone80Para.classList.add('items-results')
		zone70Para.after(zone80Para);

		const zone90Para = document.createElement('p');
		zone90Para.innerText = `90% of MHR is ${zone90}`;
		zone90Para.style.backgroundColor = '#ff3333';
		zone90Para.classList.add('items-results')
		zone80Para.after(zone90Para);
	}
}

calcBtn.addEventListener('click', calculateZones);

// calcBtn.addEventListener('click', () => {
// 	const calledOnce = false;
// 	return calculateZones();
// 		if (!calledOnce) {
// 			done = true;
// 		}
// 	}
// );

window.addEventListener ('keypress', function(e) {
		if (e.key === 'Enter') {
			calculateZones();
		}
});

resetBtn.addEventListener('click', () => {
	document.location.reload();
})
