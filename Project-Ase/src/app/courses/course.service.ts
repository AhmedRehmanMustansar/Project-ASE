import { course,field } from "./course.model";

export class CourseService{

constructor(){

}

courses: course[]= [

  new course(1, 'Physics101',field.science, 3, true, ),
  new course(2, 'PakistanHistory',field.history, 2, false, ),

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
         return true;
       }
       return false;
      }
     );
     console.log(this.filterarray);
}

}