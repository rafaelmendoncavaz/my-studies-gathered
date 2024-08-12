class Student {
  name: string
  module: string
  grade: number | null

  constructor(name: string, module: string) {
    this.name = name
    this.module = module
    this.grade = null
  }

  helloStudent() {
    console.log(`Hello, I'm a student! My name is ${this.name} and my module is ${this.module}`)
  }

  setGrade(grade: number | null) {
    this.grade = grade
  }

  getGrade() {
    console.log(`My grade is ${this.grade}`)
  }
}

const Oswald = new Student("Oswald", "M6")
Oswald.helloStudent()
Oswald.setGrade(10)
Oswald.getGrade()

const Jane = new Student("Jane", "M1")
Jane.helloStudent()
Jane.setGrade(9)
Jane.getGrade()