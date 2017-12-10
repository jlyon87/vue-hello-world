new Vue({
	el: "#app",

	data: {
		isStarted: false,
		player: {
			hp: 100,
			charge: 0
		},
		monster: {
			hp: 100
		},
		logs: []
	},

	computed: {
		isSpecialReady: function() {
			return this.player.charge < 3;
		},
		isHealReady: function() {
			return this.player.charge < 2;
		}
	},

	methods: {
		start: function() {
			this.player.hp = 100;
			this.player.charge = 0;
			this.monster.hp = 100;
			this.isStarted = true;
			this.logs = [];
		},

		attack: function() {
			this.player.charge++;
			var playerAttack = this.randomNumber(11, 5);
			var monsterAttack = this.randomNumber(12, 6);

			this.monster.hp -= playerAttack;
			this.player.hp -= monsterAttack;

			this.addLog("Monster hits Player for " + monsterAttack, "alert");
			this.addLog("Player hits Monster for " + playerAttack, "primary");

			this.checkWin();
		},

		specialAttack: function() {
			this.player.charge -= 3;
			var playerAttack = this.randomNumber(20, 12);
			var monsterAttack = this.randomNumber(12, 6);

			this.monster.hp -= playerAttack;
			this.player.hp -= monsterAttack;

			this.addLog("Monster hits Player for " + monsterAttack, "alert");
			this.addLog("Player SMASHES Monster for " + playerAttack, "primary");

			this.checkWin();
		},

		heal: function() {
			this.player.charge -= 2;

			var healAmount = this.randomNumber(15, 7);
			var monsterAttack = this.randomNumber(12, 6);

			this.player.hp += healAmount;
			this.player.hp -= monsterAttack;

			this.addLog("Monster hits Player for " + monsterAttack, "alert");
			this.addLog("Player heals for " + healAmount, "success");

			this.checkWin();
		},

		giveUp: function() {
			this.isStarted = false;
			this.logs = [];
		},

		randomNumber: function(max, min) {
			return Math.max(Math.floor(Math.random() * max) + 1, min);
		},

		addLog: function(message, style) {
			this.logs.unshift({
				message: message,
				style: style});
		},

		checkWin: function() {
			if(this.monster.hp < 1) {
				if(confirm("You won! Play again?")) {
					this.start();
				} else {
					this.isStarted = false;
				}

			} else if(this.player.hp < 1) {
				if(confirm("You lost! Play again?")) {
					this.start();
				} else {
					this.isStarted = false;
				}
			}
		}
	}
});
