function reverse(str){
	let newStr = '';
	for(i = str.length-1;i>=0;i--){
		newStr = newStr + str[i];
		console.log(newStr);
	}
	return newStr;
}
reverse('Hello Gama Academy');