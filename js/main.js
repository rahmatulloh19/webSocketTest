fetch("http://localhost:8000/todo/")
	.then((res) => res.json())
	.then((data) => console.log(data));
