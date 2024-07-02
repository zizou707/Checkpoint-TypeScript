interface Vehicle {
    make : string ;
    model : string ;
    year : number;
    start : ()=>void;
}
class Car implements Vehicle{
    make : string ;
    model : string;
    year : number;
    constructor(make:string,model:string,year:number){
      this.make=make;
      this.model=model;
      this.year=year
    }
    start(){console.log(`the Engine of ${this.model} started`);
    }
}

let x6 : Car = new Car("BMW","X6",2020);
x6.start();