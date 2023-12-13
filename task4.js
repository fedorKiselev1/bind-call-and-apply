const attacker = {
    archer: 30,
    footsoldier: 55,
    cavalry: 10,
    artillery: 3,
    checkChancesToWin(defenderObject) {
        maxChance = 0
        chance = 0
        br = 0
        for (element in this) {
            if (br > Object.values(this).length - 4) {
                break
            }
            maxChance++
            if (this[element] > defenderObject[element]) {
                chance++
            }
            br++
        }
        return [chance, maxChance]
    },
    improveArmy() {
        this.archer += 5
        this.footsoldier += 5
        this.cavalry += 5
        this.artillery += 5
    },
    attack(defenderObject) {
        if ((this.checkChancesToWin(defenderObject)[0] / this.checkChancesToWin(defenderObject)[1] * 100) < 70) {
            console.log(`our chances are ${this.checkChancesToWin(defenderObject)[0] / this.checkChancesToWin(defenderObject)[1] * 100}% and thats lower than 70%`)
        }
        else {
            console.log("attacking, we will surely win")
        }
    }
}


const defender = {
    archer: 33,
    footsoldier: 50,
    cavalry: 40,
    artillery: 10,
}

const defender1 = {
    archer: 0,
    footsoldier: 0,
    cavalry: 0,
    artillery: 0,
}

const defender2 = {
    archer: 999,
    footsoldier: 999,
    cavalry: 999,
    artillery: 999,
}

console.log(attacker.checkChancesToWin.call(attacker, defender))
attacker.attack.call(attacker, defender)
attacker.improveArmy()
attacker.improveArmy()
console.log(attacker.checkChancesToWin.call(attacker, defender))
attacker.attack.call(attacker, defender)
