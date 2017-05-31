//team factory
app.factory('TeamFactory', function(){
	var factory = {};
	var teams = [];

	factory.getTeams = function(callback){
		callback(teams);
	};
	factory.addTeams = function(newTeam, callback){
		teams.push(newTeam);
		callback();
	};
	factory.delTeams = function(team, callback){
		var x = teams.indexOf(team);
		teams.splice(x, 1);
	};

	return factory;
});