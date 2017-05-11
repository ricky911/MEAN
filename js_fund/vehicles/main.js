function VehicleConstructor(name, wheels, passengers, speed){
	var self = this
	// vehicle properties
	this.name = name;
	this.wheels = wheels;
	this.passengers = passengers;
	this.speed = speed;
	//private vars
	var distance_travelled = 0;
	//private methods
	var update = function updateDistanceTravelled(){
		distance_travelled += self.speed
	}
	//public methods
	this.makeNoise = function(){
		console.log('BEEP BEEP MUTHA TRUCKAS ' + self.name + ' INCOMING')
	}
	this.move = function(){
		updateDistanceTravelled();
		self.makeNoise();
	}
	this.checkMiles = function(){
		console.log(distance_travelled)
	}
	return this;
}
//creating a bike
var Bike = VehicleConstructor('Bike', 2, 1)
this.makeNoise = function(){
	console.log('RING RING MUTHA TRUCKAS ' + Bike.name + ' INCOMING')
}
Bike.makeNoise()
//creating Sedan
var Sedan = VehicleConstructor('Sedan', 4, 4)
this.makeNoise = function(){
	console.log('HONK HONK MUTHA TRUCKAS ' + Sedan.name + ' INCOMING')
}
//creating bus
var Bus = VehicleConstructor('Bus', 4, 50)
this.addpassengers = function(added){
	this.passengers += added  
	console.log(this.passengers)
}

