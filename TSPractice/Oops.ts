class Bank{
    //We cannot specify behaviours like const let var in instance level variables
    username: string;
    password: string

    constructor(username: string, password: string){
        this.username = username;
        this.password = password;
    }

    login(){
        console.log(`${this.username}, ${this.password}`);
    }
}

let obj = new Bank("vinoth", "123");
obj.login();

let obj1 = new Bank("jeru", "123");
obj1.login();


