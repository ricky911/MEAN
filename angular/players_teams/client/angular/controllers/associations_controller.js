 app.controller('AssociationController', function(PlayerFactory, TeamFactory){
 	var self = this;
 	self.players = [];
 	self.teams = [];

 	self.getPlayers = function(){
 		PlayerFactory.getPlayers(function(players){
 			self.players = players;
 		});
 	};
 	self.getTeams = function(){
 		TeamFactory.getTeams(function(teams){
 			self.teams = teams;
 		});
 	};
 	self.createAssociation = function(newAssociation){
 		PlayerFactory.createAssociation(newAssociation, function(){
 			self.newAssociation = {};
 			self.getPlayers();
 		});
 	};
 	self.delAssociation = function(player){
 		PlayerFactory.delAssociation(player, function(){
 			self.getPlayers();
 		})
 	}
 })