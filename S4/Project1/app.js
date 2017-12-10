new Vue({
	el: "#app",

	data: {
		isStarted: false,
		player: {
			hp: 100,
			charge: 0,
			attack: function() {
				return Math.floor(Math.random() * (11 - 5) + 5);
			},
			special: function() {
				return Math.floor(Math.random() * (20 - 10) + 10);
			}
		},
		monster: {
			hp: 100,
			attack: function() {
				return Math.floor(Math.random() * (7 - 3) + 3);
			}
		},
		logs: []
	},

	computed: {
		isSpecialReady: function() {
			console.log("")
			return this.player.charge < 3;
		},
		isHealReady: function() {
			return this.player.charge < 2;
		}
	},

	watch: {
		"player.hp": function(value) {

			if(this.player.hp < 1) {
				alert("You Lost!");
				this.isStarted = false;
			}
		},

		"monster.hp": function() {

			if(this.monster.hp < 1) {
				alert("You Won!");
				this.isStarted = false;
			}
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
			var playerAttack = this.player.attack();
			var monsterAttack = this.monster.attack();

			this.monster.hp -= playerAttack;
			this.player.hp -= monsterAttack;

			this.logs.push({
				message: "Monster hits Player for " + monsterAttack,
				style: "alert"});

			this.logs.push({
				message: "Player hits Monster for " + playerAttack,
				style: "primary"});
		},

		specialAttack: function() {
			this.player.charge -= 3;
			var playerAttack = this.player.special();
			var monsterAttack = this.monster.attack();

			this.monster.hp -= playerAttack;
			this.player.hp -= monsterAttack;

			this.logs.push({
				message: "Monster hits Player for " + monsterAttack,
				style: "alert"});

			this.logs.push({
				message: "Player SMASHES Monster for " + playerAttack,
				style: "primary"});
		},

		heal: function() {
			this.player.charge -= 2;

			var healAmount = Math.floor(Math.random() * (7 - 3) + 3);
			var monsterAttack = this.monster.attack();

			this.player.hp += healAmount;
			this.player.hp -= monsterAttack;

			this.logs.push({
				message: "Monster hits Player for " + monsterAttack,
				style: "alert"});

			this.logs.push({
				message: "Player heals for " + healAmount,
				style: "success"});
		},

		giveUp: function() {
			this.isStarted = false;
			this.logs = [];
		}
	}
});
