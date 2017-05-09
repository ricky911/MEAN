// function personConstructor(name){
// 	person = {
// 		name: name,
// 		distance_traveled: 0,
// 		sayName: sayName(),
// 		saySomething: saySomething(' says I am cool'),
// 		walk: walk(),
// 		run: run(),
// 		crawl: crawl()
// 	}
// 	// console.log(person.name)
// }

// var sayName = function(){
// 	console.log(person.name);
// }

// var saySomething = function(parameter) {
// 	console.log(person.name + parameter);
// }

// var walk = function(){
// 	person.distance_traveled += 3;
// 	console.log(person.name + ' is walking ' + person.distance_traveled);
// }

// var run = function(){
// 	person.distance_traveled += 10;
// 	console.log(person.name + ' is running ' + person.distance_traveled);
// }

// var crawl = function(){
// 	person.distance_traveled += 1;
// 	console.log(person.name + ' is crawling ' + person.distance_traveled);
// }

function ninjaConstructor(name, cohort){
	return {
		name: name,
		cohort: cohort,
		beltLevel: 'Yellow',
		levelUp: function(){
			if(this.beltLevel == 'Yellow'){
				this.beltLevel = 'Red'
			} else if(this.beltLevel == 'Red'){
				this.beltLevel = 'Black'
			} else if(beltLevel == 'Black'){
				this.beltLevel = 'Black'
			}
		}
	}
}

var ricky = ninjaConstructor('Ricky', 'uptownFunc');
console.log(ricky.levelUp());
console.log(ricky.beltLevel);


