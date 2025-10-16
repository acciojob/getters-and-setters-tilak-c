//complete this code
class Person {
	constructor(_name,_age){
		this._name=_name;
		this._age=_age;
	}
	get name(){
		return this._name;
	}
	set age(_age){
		this._age=_age;
	}
}

class Student extends Person {
	constructor(name,age){
		super(name,age);
	}
	study(){
		console.log(this.name+" is studying")
	}
}

class Teacher extends Person {
	constructor(name,age){
		super(name,age);
	}
	teach(){
		console.log(this.name+" is teaching")
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
