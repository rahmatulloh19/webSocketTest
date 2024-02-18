const elForm = document.querySelector("form");
const elDiv = document.querySelector("div");

const socket = io("ws://localhost:3000");

let uniqueId;

socket.on("clientJoined", async (data) => {
	uniqueId = await data;
	console.log(uniqueId);
});

elForm.addEventListener("submit", (evt) => {
	evt.preventDefault();
	socket.emit("clientJoined", {
		roomId: (Math.random() * 100000).toFixed(),
		message: evt.target[0].value.trim(),
	});

	socket.on("clientJoined", (data) => {
		console.log(data);
	});
	// socket.on("message", () => {
	// 	const elP = document.createElement("p");

	// 	elP.textContent = evt.target[0].value.trim();
	// 	elDiv.appendChild(elP);
	// });
	evt.target[0].value = "";
	evt.target[0].focus();
});
