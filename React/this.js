// console.log(this); //window

// function fn() {
//     console.log(this); //window
    
// }

// fn();

// let obj = {
//     name : "Arya",
//     func : fn
// }

// obj.func() //self obj

// function fn(){
//     console.log(this);
//     function abc(){
//         console.log(this);
//     }
//     abc();
// }

// let obj = {
//         name : "Arya",
//         func : fn
//     }

//     obj.func();

//Method 1 : bind function

// function fn(){
//     console.log(this);
//     function abc(){
//         console.log(this);
//     }
//     let ret = abc.bind(this);
//     ret();
// }

// let obj = {
//         name : "Arya",
//         func : fn
//     }
    
//     obj.func();

//Method - 2 : Arrow Function

function fn(){
    console.log(this);
    abc = () =>{
        console.log(this);
    }
    abc();
}

let obj = {
        name : "Arya",
        func : fn
    }
    
    obj.func();
