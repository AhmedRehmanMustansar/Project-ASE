
export enum field{

 science = 'science',
 history = 'history',
 arts = 'arts',
 none = '',
}


export class course{

constructor( 
    public id:number, 
    public name:string, 
    public Field: field,
    public credithour: number, 
    public lab : boolean, 
    public count?: number,
    ){
 
}

}