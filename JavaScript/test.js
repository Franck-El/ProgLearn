/* eslint-disable no-mixed-spaces-and-tabs */

async function getNumber1() {
	return 10;
}
  
async function getNumber2() {
	return 4;
}
  
async function compute(){
	const val1 = await getNumber1();
	const val2 = await getNumber2();
	return val1 + val2;
}

const promiseToCompute = new Promise((resolve) => { 
	resolve (compute());
});
  
promiseToCompute
	.then((value) => {
		const result = document.getElementById("result");
		result.textContent = value;
		return value;
	})
	.then((value) => {
		const result = document.getElementById("result");
		result.textContent = result.textContent + " puis " + (value + 2);
	});