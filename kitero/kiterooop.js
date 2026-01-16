class Student{
    constructor(name){
        this.name = name
        this.askQuestionNum = 0

    }

    askQuestion(){
        this.askQuestionNum++
    }

    
}
const stu1 = new Student('lakatos')
const stu2 = new Student('armando')

console.log(stu1)
console.log(stu2)

class StudentWithWork extends Student{
    constructor(name){
        super(name)
        this.workDone=0
    }
    
}
StudentWithWork.prototype.Dowork = function (){
    this.workDone ++
}