function VehicleConstructor(name, wheels, passengers){
	var vehicle = {}; //vehicle object
	var self = this
	// vehicle properties
	vehicle.name = name;
	vehicle.wheels = wheels;
	vehicle.passengers = passengers;
	//make noise method
	vehicle.makeNoise = function(){
		console.log('BEEP BEEP MUTHA TRUCKAS' + vehicle.name + 'INCOMING')
	}
	// vehicle.addpassengers = function(added){
	// 	passengers += added;
	// 	console.log(passengers);
	// }
	//return vehicle
	return vehicle;
}
//creating a bike
var Bike = VehicleConstructor('Bike', 2, 1)
Bike.makeNoise = function(){
	console.log('RING RING MUTHA TRUCKAS ' + Bike.name + ' INCOMING')
}
//creating Sedan
var Sedan = VehicleConstructor('Sedan', 4, 4)
Sedan.makeNoise = function(){
	console.log('HONK HONK MUTHA TRUCKAS ' + Sedan.name + ' INCOMING')
}
//creating bus
var Bus = VehicleConstructor('Bus', 4, 50)
Bus.addpassengers = function(added){
	this.passengers += added  
	console.log(this.passengers)
}
