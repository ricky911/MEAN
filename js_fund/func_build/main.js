// function runningLogger(){
// 	console.log('I am running!')
// }

// function multiplybyTen(num){
// 	var product = num * 10;
// 	return product;
// }
// console.log(multiplybyTen(5));

function stringReturnOne(){
	console.log('String One')
}

function stringReturnTwo(){
	console.log('String Two')
}

function caller(parameter){
	if(typeof parameter === 'function'){
		console.log('True');
	} else {
		console.log('False');
	}
}
// caller(stringReturnTwo)

function myDoubleConsoleLog(para1, para2){
	if(typeof para1 == 'function' && typeof para2 === 'function'){
		console.log(para1(), para2());
	}else{
		console.log('False');
	}
}
// myDoubleConsoleLog(stringReturnOne, stringReturnTwo)

function caller2(parameter){
	console.log('starting');
	setTimeout(function(){
		if(typeof parameter === 'function'){
			parameter(stringReturnOne, stringReturnTwo);
		}
	}, 2000);
	console.log('ending?')
	return 'interesting'
}
caller2(myDoubleConsoleLog)