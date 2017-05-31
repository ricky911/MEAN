//player controller
app.controller('PlayerController', function(PlayerFactory){
	var self = this;
	self.players = [];

	self.getPlayers = function(){
		PlayerFactory.getPlayers(function(players){
			self.players = players;
		});
	};
	self.addPlayers = function(newPlayer){
		PlayerFactory.addPlayers(newPlayer, function(){
			self.getPlayers();
			self.newPlayer = {};
		});
	};
	self.delPlayers = function(player){
		PlayerFactory.delPlayers(player, self.getPlayers)
	};
});