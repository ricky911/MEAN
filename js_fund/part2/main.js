// function sum(x,y){
// 	var sum = 0;
// 	for(var i = x; i <= y; i++){
// 		sum += i;
// 	}
// 	console.log(sum);
// }

// sum(1, 500)

// Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it 

// function min(arr){
// 	var min = arr[0];
// 	for(var i = 0; i < arr.length-1; i++){
// 		if(arr[i] < min){
// 			min = arr[i];
// 		}
// 	} console.log(min);
// }
// var arr = [1, 5, 90, 25, -3, 0];
// min(arr);

// Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the average of all of the values, and then print it

// object = {avg: function(arr){
// 		var sum = 0;
// 		for(var i = 0; i < arr.length; i++){
// 			sum += arr[i];
// 		} console.log(sum/arr.length)
// 	}
// }
// x = [1, 5, 90, 25, -3, 0];
// object.avg(x)

person = {
	name: 'Ricky',
	distance_traveled: 0,
}

function sayName(){
	console.log(person.name);
}

function saySomething(parameter) {
	console.log(person.name + parameter);
}

function walk(){
	person.distance_traveled += 3;
	console.log(person.name + ' is walking ' + person.distance_traveled);
}

function run(){
	person.distance_traveled += 10;
	console.log(person.name + ' is running ' + person.distance_traveled);
}

function crawl(){
	person.distance_traveled += 1;
	console.log(person.name + ' is crawling ' + person.distance_traveled);
}