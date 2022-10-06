//Exemplo de rotas com json() e NodeJS puro
const fs = require('fs');
const http = require('http'); 

http.createServer((request, response) => {
	response.writeHead(200, {"Content-Type": "application/json"}); 
	
	if (request.url === "/sobre") {
		fs.appendFile('acesso.txt', '\n novo acesso from url',(err)=> {
			if(err) throw err;
			console.log("novo acesso");
		})
		return response.end(
		JSON.stringify({
		message: "sobres",
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

	}).listen(5000, () => 
		console.log(`Server running at port 5000`));