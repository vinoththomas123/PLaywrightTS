import {Calculator} from '../TSPractice/Inheritances';

class emp{
    private cal: any;

    constructor(){
        this.cal = new Calculator();
    }

    add(n1: number, n2: number){
        this.cal(n1, n2);
    }

}