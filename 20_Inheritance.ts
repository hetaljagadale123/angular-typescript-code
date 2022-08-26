
class Student 
{ 
    
    Sname:string; 
  
    
    constructor(value:string) 
    { 
       this.Sname = value 
    }  
 
    
    DisplayS():void 
    { 
       console.log("Name of student : "+this.Sname) 
    } 
 }

 
 class Employee extends Student
 {
    
    Eid : number;

    
    constructor(value:number, name:string) 
    { 
        super(name);
        this.Eid = value; 
    }  
 
    
    DisplayE():void 
    { 
       console.log("ID of Employee : "+this.Eid) 
    }
 }

 
 var obj1 = new Employee(11,"Hetal Jagadale");
 obj1.DisplayS();
 obj1.DisplayE();

 

 var bret = obj1 instanceof Student; 
 console.log(" obj1 is an instance of Student " +bret);

 var bret = obj1 instanceof Employee; 
 console.log(" obj1 is an instance of Employee " +bret);