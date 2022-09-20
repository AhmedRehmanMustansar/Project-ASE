
import { student } from "./student.model";

export class StudentService{
   students: student[] = [
  
    new student(1,'Jett','ahmed.rehman@empglabs.com','03499404067',24,'Verdansk',[]),
    new student(2,'Neon','neon@empglabs.com','03696942040',20,'Ascent',[]),

]
   array:student[] = [];
addStudent( Student: student){
    this.students.push(Student);
}

editStudent(Student: student){
    let index = this.students.findIndex(
      (element)=>{
        return element.id === +Student.id;
      }
    );
    this.students[index].courselist = this.students[index].courselist.concat(Student.courselist);
    this.students[index].id = +Student.id;
    this.students[index].age = Student.age;
    this.students[index].cellno = Student.cellno;
    this.students[index].email= Student.email;
    this.students[index].name = Student.name;
    
}
onDelete(id:number){
  let index = this.students.findIndex(
    (element)=>{
      return element.id === +id;
    }
  );
  this.students.splice(index,1);
  
}

findstudent(id: number){

  let index = this.students.findIndex(
    (element)=>{
      return element.id === id;
    }
  );
  return this.students[index];
}

filterstudent(Student:student){
 this.array = this.students.filter(
   (s1)=>{
    if(s1.name === Student.name || s1.age === Student.age || s1.email === Student.email || s1.cellno == Student.cellno || s1.address === Student.address){
      return true;
    }
    return false;
   }
  );

}

}