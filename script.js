//your JS code here. If required.
let container = document.querySelector(".container");

for(let i = 1 ; i <=800;i++){
	let square = document.createElement("div");
	square.classList.add("square");
	container.appendChild(square);
}