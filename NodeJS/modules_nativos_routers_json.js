//Exemplo de rotas com json() e NodeJS puro
const http = require('http'); 

http.createServer((request, response) => {
	response.writeHead(200, {"Content-Type": "application/json"}); 
	
	if (request.url === "/sobre") {
		return response.end(
		JSON.stringify({
		message: "sobre",
		})
		);
	}

	if (request.url === "/me"){
		return response.end(
			JSON.stringify({
			message: "geraldev.com",
		})		
		);
	}

	if (request.url === "/"){
		return response.end(
			JSON.stringify({
			message: "HOME PAGE!",
		})		
		);
	};

response.end("404");

	}).listen(3001, () => 
		console.log(`Server running at http`))