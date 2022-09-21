import { course } from "../courses/course.model";

export class student{ 
    constructor( 
        
        public name:string, 
        public email:string,  
        public cellno:string, 
        public age:number, 
        public address:string, 
        public courses?:course[],
        public id?:number, 
        ){
    }
}