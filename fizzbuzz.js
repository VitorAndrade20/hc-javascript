function fizzbuzz(cont){

	if(typeof cont !== 'number'){
		console.log("NaN");
		return
	}

	if(cont % 3 === 0){
		if(cont % 5 === 0)
		{
			console.log("fizzbuzz");
		}
		else
		{
			console.log("fizz");
	
		}
	}
	else if(cont % 5 === 0){
		console.log("buzz");
	}
	else{
		console.log(cont)
	}
}

