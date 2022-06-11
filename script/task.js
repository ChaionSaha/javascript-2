"use strict";
const stringInput = document.querySelector("#string-input");
const wordInput = document.querySelector("#word-input");
const output = document.querySelector(".out");

document.querySelector(".task-2").addEventListener("click", (e) => {
	e.preventDefault();
	let string = stringInput.value.toLowerCase();
	let word = wordInput.value.toLowerCase();
	let count = 0;
	string.split(" ").forEach((el) => {
		if (el !== word) return;
		count++;
	});
	output.innerText = `Frequency of the word "${word}" is: ${count}`;
});

///////////////////////////////////////////////////
// Task 1
const decIn = document.querySelector(".dec-in");
const binOut = document.querySelector(".bin-out");
const binIn = document.querySelector(".bin-in");
const decOut = document.querySelector(".dec-out");

document.querySelector(".dec-in-btn").addEventListener("click", (e) => {
	e.preventDefault();
	var out = (+decIn.value).toString(2);
	binOut.innerText = out;
});

document.querySelector(".bin-in-btn").addEventListener("click", (e) => {
	e.preventDefault();
	var output = parseFractionInt(binIn.value, 2);
	decOut.innerText = output;
});

const parseFractionInt = function (value, base) {
	var res = value.split(".");
	return res.length < 2
		? parseInt(value, base)
		: parseInt(res[0] + res[1], base) / Math.pow(base, res[1].length);
};

document.querySelector(".clear-1").addEventListener("click", (e) => {
	e.preventDefault();
	document.querySelectorAll("#dec-in").forEach((el) => {
		el.value = "";
	});
	document.querySelectorAll(".out-1").forEach((el, i) => {
		if ((i === 0)) {
			el.innerText = `Binary Output`;
			return;
		}
		el.innerText = `Decimal Output`;
	});
});
