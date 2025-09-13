//  const student ={
//     fullName: "pankaj yadav",
//     marks: 95.4,
//     printMarks: function (){// method
//         console.log("marks = ", this.marks);
//     },
//  };

// //  console.log(student.fullName);
// //  console.log(student.marks);
// // console.log(student); // pura object a jayega .
 

// //  console.log(student.printMarks());
 
// //********************** ProtoType **************/

// const employee = {
//     calcTax1(){ // function ko dono tarike se likh sakte hai , 
//         console.log("Tax rate is 10% ");
//     },
//     calcTax2 : function(){
//         console.log("tax rate is 10%");
//     }
// };

// const karanArjun={
//     salary: 50000,
// }
// const karanArjun2={
//     salary: 50000,
// }
// const karanArjun3={
//     salary: 50000,
// }
// const karanArjun4={
//     salary: 50000,
// }
// const karanArjun5={
//     salary: 50000,
// }

// karanArjun.__proto__ = employee;// 
// karanArjun2.__proto__ = employee;//
// karanArjun3.__proto__ = employee;//
// karanArjun4.__proto__ = employee;//
// karanArjun5.__proto__ = employee;//

// //********************** Classes **************/
// class ToytoCar {
//     constructor(brand,mileage){
//         console.log("creating new object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }

//     // setBrand(brand){
//     //     this.brandName = brand;
//     // }

// }

// let fortuner = new ToytoCar("fortuner",10); //constructor involk hoga ., fir hame setBrand likhne ki jarurat nai hia hum direct brandname initialization k time pe hi kr rahe hai .
// console.log(fortuner);

// let lexus = new ToytoCar("lexus");// constructor
// // fortuner.setBrand("fortuner");
// // lexus.setBrand("lexus");
// console.log(lexus);


//********************** Inheritance **************/

// class Parent {
//     hello(){
//         console.log("hello");
        
//     }
// }

// class child extends Parent{};

// let obj = new child();


// class Person {
//     constructor(name){
//         this.species = "homo sapiens";
//         this.name = name;
//     }
//     eat(){
//         console.log("eat");
        
//     }
    // sleep(){
    //     console.log("sleep");
        
    // }
// }

// class Engineer extends Person {
//     constructor(name,branch){
//         super(name); // to invoke parent class constructor
//         this.branch = branch;
//         this.name = name
//     }
//     work(){
//         console.log("solve problems, build something");
//     }
// }

// let engObj = new Engineer("pankaj","IT");



// **************** let's practice question **************************

//Qs. You are creating a website for your college .create a class User with 2 properties, name & email. it also has a method called viewData() that allows user to view website data.

let data = "secret information";
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log(`"data = ${data}`);
        
    }
}

let student1 = new User("pankaj","pankajyadav851685@gmail.com")

let student2 = new User("Aman","abc@email.com")

//Qs. Create a new class called Admin which inherits from User. Add a new method called editData to admin that allows it to edit website data.

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        data= "some new value"
    }
}

let admin1 = new Admin("pankaj","yadava@email.com");