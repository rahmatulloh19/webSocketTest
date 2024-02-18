import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
	cors: {
		origin:
			process.env.NODE_ENV === "production"
				? false
				: ["http://localhost:5001", "http://127.0.0.1:5500"],
	},
});

io.on("connection", (socket) => {
	console.log(`User connected with id ${socket.id}`);

	socket.on("message", (data) => {
		console.log(data);

		socket.emit("message", `${data}`);
	});
});

httpServer.listen(5001, () => {
	console.log("listening on port 5001");
});
