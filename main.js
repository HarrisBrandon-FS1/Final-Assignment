class Employee{
    constructor(n, a){
        this.name = n;
        this.age = a;
        this.annualSalary = 0;
    }
}

class Manager extends Employee{
    constructor(p,n,a){
        super(n,a);
        this.payRate = p;
        this.type = "Manager"
    }
    calculatePay(){
        this.annualSalary = ((this.payRate * 40)*52)-1000;
    }
}
class PartTime extends Employee{
    constructor(n,a,h,p){
        super(n,a);
        this.payRate = p;
        this.type = "Part-Timer"
        this.hours = h;
    }
    calculatePay(){
        this.annualSalary = ((this.payRate * this.hours)*52);
    }
}

class Demo{
    constructor(){

    }
    displayMenu(){ 
        let choice = Number(prompt("Main Menu\n1. Add Employee\n2. Remove Employee\n3. Edit Employee\n4. Display Employees"))
        switch(choice){
            case 1: this.addEmployee();
            break;
            case 2: this.removeEmployee();
            break;
            case 3: this.addEmployee();
            break;
            case 4: this.displayEmployee();
            break;
        }
    }
    addEmployee(){}

    removeEmployee(){}

    editEmployee(){}
    displayEmployee(){}
}

(e=>{
    const demo = new Demo();
})();