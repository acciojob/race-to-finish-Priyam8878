window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
let result = document.getElementById("output")

let prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise 1 resolve");
    }, 3000)
});
let prom2 = new Promise((resolve,reject) => {
	setTimeout(() =>{
		resolve("promise 2 resolve")
	},1000)
})
let prom3 = new Promise((resolve , reject)  => {
	setTimeout(() => {
		resolve("promise 3 resolve")
	},5000)
});
let prom4 = new Promise((resolve , reject)  => {
	setTimeout(() => {
		resolve("promise 4 resolve")
	},5000)
});
let prom5 = new Promise((resolve , reject)  => {
	setTimeout(() => {
		resolve("promise 5 resolve")
	},5000)
});
let prom =[prom1, prom2, prom3, prom4, prom5]

Promise.race(prom).then((value) => result.innerHTML = value);