const footballer = {
    fullName: "gamer",
    attack: () => {
        console.log(`${footballer.fullName} is going to attack`)
    },
    scoreGoal(sound) {
        console.log(`${this.fullName} has scored!`)
        this.celebrate(sound)
    },
    celebrate(sound) {
        console.log(sound)
    },
    goToSubstitution: function(newPlayer) {
        console.log(`${this.fullName} leaves and the replacement is ${newPlayer}`)
    }
};

const attack = footballer.attack;
const score = footballer.scoreGoal;
const substitute = footballer.goToSubstitution;
attacking = attack.bind(footballer);
attacking();
score.call(footballer, "OHH MAHH GAHD");
substitute.apply(footballer, ["replacer"]);