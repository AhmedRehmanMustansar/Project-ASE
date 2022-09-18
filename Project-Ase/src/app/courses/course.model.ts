
export enum field{

 science = 'science',
 history = 'history',
 arts = 'arts',
 none = '',
}


export class course{

constructor( public id:number, public name:string, public credithour: number, public lab : boolean, public Field: field){
 
}

}