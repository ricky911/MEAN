//team controller
app.controller('TeamController', function(TeamFactory){
	var self = this;
	self.teams = [];

	self.getTeams = function(){
		TeamFactory.getTeams(function(teams){
			self.teams = teams;
		});
	};
	self.addTeams = function(newTeam){
		TeamFactory.addTeams(newTeam, function(){
			self.getTeams();
			self.newTeam = {};
		});
	};
	self.delTeams = function(team){
		TeamFactory.delTeams(team, self.getTeams)
	};
});