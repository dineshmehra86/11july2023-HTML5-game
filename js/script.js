class MyClass1 {
    // There are 3 member in class
    // 1. P:V
    d1=''
    // 2. Constructor (Special Constructor like a Function)
    constructor(name) {
        // Associativity of the operator right to left
        // To access a member inside the class object, we need to use "this", 
        // "this" is an internal class object 
        this.d1 = name;
    }
    // 3. Method/Function
    getMyFullName(){
         console.log("I am not a page");
    }
    // To access member inside the class, we need to create "Class Instantiation"
    // "Class Instantiation" is the process of creating class object  
}
    // Class Instantiation Syntax
    // let classObject = new MyClass1();
    // While creating class object, the parameter will be store into Constructor
    // "co" is an external class object
    let co = new MyClass1("Dinesh");
    // classObject.Member 
    co.getMyFullName();