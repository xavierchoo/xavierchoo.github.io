const http = require('http');

// set hostname and port
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer();
let fs = require('fs');
const quotesArr = [];

fs.readFile('input.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log(data.toString());
   quotesArr.push(data.toString())
});


function jsonResponse(result , obj){
	result.write(JSON.stringify(obj));
	result.end();
}
function randomQuote(){
	return quotesArr[Math.floor(Math.random()*quotesArr.length)]
}

// when request comes in, return result
server.on('request', function(request, result){
	console.log('method', request.method);
	console.log('url', request.url);
if(request.method == 'GET'){
	if (request.url == '/quotes'){
		const answer = {'quotes':quotesArr}
		jsonResponse(result , answer)
	}
	else if (request.url == '/quotes/random'){
		jsonResponse(result,{'random_quote': randomQuote()})
	}
}
else if(request.method == 'POST'){
	if(request.url == '/quotes/submit'){
		const body =[];
		request.on('data', function(chunk){
			body.push(chunk)
			console.log(body);
		}).on('end', function(){
			const data =  Buffer.concat(body).toString();
			const newQuote = "\n" +  data.split('=')[1];
			quotesArr.push(newQuote);
			result.write(data);
			result.end();
			//===============================================================================
			fs.open('input.txt','r+',function(err,fd){
				if(err){
					return console.error(err);
				}
				console.log('File opened successfully!');
			})
			fs.appendFile('input.txt',newQuote,function(err){
				if(err){
					return console.error(err);
				}
			 	console.log("Data written successfully!");
			   console.log("Let's read newly written data");
			   fs.readFile('input.txt', function (err, data) {
			      if (err) {
			         return console.error(err);
			      }
			      console.log("Asynchronous read: " + data.toString());
			   });
			});

		})

	}
}
	else{
		result.write('<p>hi , welcome to quotes API. Visit /quotes to start</p>');
		 result.end();
	}
  
});

//=====================================================================
//start listening for requests
server.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});