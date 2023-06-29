window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
let result = document.getElementBYId("output")
let p1 = new Promise(resolve() ,reject());
let p2 = new Promise(resolve() ,reject());
let p3 = new Promise(resolve() ,reject());
let p4 = new Promise(resolve() ,reject());
let p5 = new Promise(resolve() ,reject());
result.innerHTML = Promise.any(p1, p2, p3, p4, p5)
