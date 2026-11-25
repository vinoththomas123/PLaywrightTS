class Icecream{

    icecream(){
        console.log("Parent Calss IceCream")
    }

    flavor(flavour: string){
        console.log("Flavor: "+ flavour)
    }
}

class Shop1 extends Icecream{

    flavor(flavour: string){
        console.log("Flavor from child: "+ flavour)
    }
}

let parent = new Icecream();

parent.icecream();
parent.flavor("Vanila");      
parent.flavor("Choclate")


let child = new Shop1();

child.icecream();
child.flavor("Vanila");     //overriding    
child.flavor("Choclate")    //overriding



//Overloading is not possible but we can use optional parameters in the method signature to overcome the issue
//Convert the existing method into overload signatures followed by one implementation

export class Calculator{

    add (n1: number, n2: number): number        //if add is handling only numeric return and in future if we need string then we can handle it as follows
    add (n1: string, n2: string): string 
    add (n1: number|string, n2: number|string): number|string{
        
        if (typeof n1 === "number" && typeof n2 === "number")
            return n1 + n2;
        if (typeof n1 === "string" && typeof n2 === "string")
            return n1 + n2;
        throw new Error("Only number or string expected")
    }
}

let obj = new Calculator();

obj.add("Typescript ", "overloading");
obj.add(10, 20);

