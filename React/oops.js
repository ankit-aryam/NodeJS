// class penguin{
//     constructor(){
//         this.habitat = "Antarctica";
//     }

//     printPlaceOfOrigin(){
//         console.log(this.habitat);
//     }
// }

// const myPenguin = new penguin();
// console.log(myPenguin);
// myPenguin.printPlaceOfOrigin();

// Inheritence (Extend Keyword)
class livingOrganism{
    constructor(){
        this.breaths = true;
    }

    isBreathing(){
        console.log(this.breaths);
    }
}

// class Bird extends livingOrganism{
//     constructor(){
//         super();
//         this.eats = true;
//     }
// }

// class penguin extends Bird{
//     constructor(){
//         super(); //used to run the constructor of parent
//         this.habitat = "Antarctica";
//     }

//     printPlaceOfOrigin(){
//         console.log(this.habitat);
//     }
// }

class Bird {
        eats = true;
        printHabit = 
    
}

class penguin extends Bird{
    constructor(){
        super(); //used to run the constructor of parent
        this.habitat = "Antarctica";
    }

    printPlaceOfOrigin(){
        console.log(this.habitat);
    }
}

const myPenguin = new penguin();
console.log(myPenguin);
myPenguin.printPlaceOfOrigin();

