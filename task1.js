const student = {
    stack: ['HTML'],
    level: 1,
    improveLevel: function() {
        this.level++;
        if (this.level > 5) {
            console.log("MAXIMUM LEVEL");
            return
        }
        fullStack = ['HTML','CSS','JavaScript','React',"NodeJS"]
        this.stack.push(fullStack[this.level - 1])
    }
}


for (i = 0; i < 8; i++) {
    console.log(student.stack, student.level)
    student.improveLevel()
}