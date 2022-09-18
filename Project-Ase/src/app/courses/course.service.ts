import { course,field } from "./course.model";

export class CourseService{

constructor(){

}

courses: course[]= [

  new course(1, 'Physics101', 3, true, field.science),
  new course(2, 'Pakistan History', 2, false, field.history),

]

filterarray: course [] = [];


AddCourse(Course: course){
    this.courses.push(Course);
}

EditCourse(Course: course){
    let index = this.courses.findIndex(
        (element)=>{
          return element.id === +Course.id;
        }
      );
      console.log(index);
      this.courses[index] = Course;
}

onDelete(id:number){
    let index = this.courses.findIndex(
      (element)=>{
        return element.id === +id;
      }
    );
    this.courses.splice(index,1);
  }

  findcourse(id: number){

    let index = this.courses.findIndex(
      (element)=>{
        return element.id === +id;
      }
    );
    return this.courses[index];
  }
  
  filtercourse(Course:course){
    this.filterarray = this.courses.filter(
      (c1)=>{
       if(c1.name === Course.name || c1.credithour === +Course.credithour || c1.Field === (Course.Field as string) || (c1.lab == Course.lab)){
        console.log(Course.name);
        console.log(c1.name);
        console.log(Course.credithour);
        console.log(c1.credithour);
        console.log(Course.lab);
        console.log(c1.lab);
        console.log(Course.Field);
        console.log(c1.Field);
         return true;
       }
       return false;
      }
     );
     console.log(this.filterarray);
}

}