window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
let result = document.getElementBYId("output")
let prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 3000)
});
let prom2 = new Promise((resolve,reject) => {
	setTimeout(() =>{
		resolve()
	},1000)
})
let prom3 = new Promise((resolve , reject) () => {
	setTimeout(() => {
		resolue()
	},5000)
});
let prom4 = new Promise((resolve , reject) () => {
	setTimeout(() => {
		resolue()
	},5000)
});
let prom5 = new Promise((resolve , reject) () => {
	setTimeout(() => {
		resolue()
	},5000)
});
result.innerHTML = Promise.any(prom1, prom2, prom3, prom4, prom5)
