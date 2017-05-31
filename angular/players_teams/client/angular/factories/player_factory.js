 //player factory
app.factory('PlayerFactory', function(){
	var factory = {};
	var players = [];

	factory.getPlayers = function(callback){
		callback(players);
	};
	factory.addPlayers = function(newPlayer, callback){
		newPlayer.team = null;
		players.push(newPlayer);
		callback();
	};
	factory.delPlayers = function(player, callback){
		var x = players.indexOf(player);
		players.splice(x, 1);
		callback();
	};
	factory.createAssociation = function(newAssociation, callback){
		for(var x = 0; x < players.length; x++){
			if(players[x].name == newAssociation.player.name){
				players[x].team = newAssociation.team;
			}
		}
		callback();
	};
	factory.delAssociation = function(player, callback){
		var x = players.indexOf(player);
		players[x].team = null
		callback();
	}

	return factory;
});