function Student(nev){
    this.name = nev
    this.askedQuestionNum = 0

}

Student.prototype.askedQuestion = function (){
    console.log('???')
    this.askedQuestionNum ++
}

const stu1 = new Student('lakatos')
const stu2 = new Student('armando')

console.log(stu1)
console.log(stu2)

stu1.askedQuestion()
console.log(stu1)

function StudentWithWork(nev){
    Student.call(this, nev)
    this.workDone=0
}

Object.setPrototypeOf(StudentWithWork.prototype, Student.prototype)

StudentWithWork.prototype.Dowork = function (){
    this.workDone ++
}

const stu3 = new StudentWithWork('pikachu')
stu3.askedQuestion()
stu3.Dowork()
console.log(stu3)