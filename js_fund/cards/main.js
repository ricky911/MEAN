function Card(suit, value){
	this.suit = suit;
	this.value = value;
}

function Deck(){
	self = this
	this.values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K']
	this.suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs']
	this.cards = []

	this.reset = function(){
		this.cards = []
		for(var i = 0; i < self.values.length; i++){
			for(var k = 0; k < self.suits.length; k++){
				var card = new Card(self.suits[k], self.values[i])
				this.cards.push(card)
			}
		}
		console.log(self.cards)
	}
}

var deck = new Deck()
deck.reset()