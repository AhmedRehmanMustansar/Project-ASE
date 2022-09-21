
import { keyframes } from "@angular/animations";
import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { student } from "./student.model";
@Injectable()
export class StudentService{
   students: student[] = [];
constructor(private http: HttpClient){

}


 
array: student[]= [];


fetchstudent(){
  this.http.get('http://localhost:8080/api/students/allStudents',).subscribe(
    (res) =>{
      for(let key in res){
      console.log(((res[key as keyof Object]) as any));
      this.students.push(new student(((res[key as keyof Object]) as any).name,((res[key as keyof Object]) as any).email,((res[key as keyof Object]) as any).cellno,((res[key as keyof Object]) as any).age,((res[key as keyof Object]) as any).address, [], ((res[key as keyof Object]) as any).id));
      }
    }
    )
    return this.students;
  }



addStudent( Student: student){
  let body = JSON.stringify(Student);
  console.log(body);
 this.http.post('http://localhost:8080/api/students/addStudent',body, {headers: {"Content-Type": "application/json"}}).subscribe(
  (res)=>{
    console.log('done');
  }
 );

 


}

editStudent(Student: student){


    let index = this.students.findIndex(
      (element)=>{
        return element.id === +Student.id!;
      }
    );
    this.students[index].courses = this.students[index].courses?.concat();
    this.students[index].id = +Student.id!;
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