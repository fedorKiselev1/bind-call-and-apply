const dog = {
    name: "charlie",
    type: "dog",
    makeSound() {
        return "woof-woof";
    },
}

const bird = {
    name: "petya",
    type: "vorobey",
    makeSound() {
        return "chirp-chirp";
    }
}

function makeDomestic(choose) {
    console.log(this.name, this.type, this.makeSound())
    this.isDomestic = choose;
    return this 
}

console.log(makeDomestic.call(dog, true))
console.log(makeDomestic.call(bird, false))

console.log(makeDomestic.apply(dog, [true]))
console.log(makeDomestic.apply(bird, [false]))

const makedog = makeDomestic.bind(dog, true)
const makebird = makeDomestic.bind(bird, false)

console.log(makedog())
console.log(makebird())
