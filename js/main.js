const elForm = document.querySelector("form");
const elDiv = document.querySelector("div");

const socket = new WebSocket("ws://localhost:5001");

elForm.addEventListener("submit", (evt) => {
	evt.preventDefault();
	socket.send(evt.target[0].value.trim());
	evt.target[0].value = "";
	evt.target[0].focus();
});

socket.addEventListener("message", ({ data }) => {
	const elP = document.createElement("p");

	elP.textContent = data;
	elDiv.appendChild(elP);
});
