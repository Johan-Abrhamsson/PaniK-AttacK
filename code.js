var players = 0
var captianPlayer = 0
let stack1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let stack2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let stack3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let stack4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let stack5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let stack6 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let stack7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let stack8 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let stack9 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let eng = [stack1, stack2, stack3, stack4, stack5, stack6, stack7, stack8, stack9]

function addNumber(a, b){
    return a+b;
}

let myFunction = addNumbers;
console.log(typeof myFunction);
console.log(myFunction)

console.log(myFunktion(3,3));

console.log(eng[0])

function runfunction(functionToRun){
    console.log(typeof functionToRun);
    console.log(functionToRun)
}
runfunction(addNumbers);

let myButton = dokument.querySelector(".myButton");
console.log(myBotton);
console.log(typeof myButton);

myButton.addEventListener("click", () => {
    console.log("hello world");
});

let myFunction = function(a, b){
    console.log(a+b);
}

let user = {
    name: "Goran",
    admin: true,
    loggedIn: false,
    friends: ["Fredrik", "Filippa"],
};

console.log(user)
console.log(user.name)

user.cool = true;

if ("cool" in user) {
    console.log("user is cool");
} else {
    console.log("user is uncool");
}

for (let property in user){
    console.log(property);
    console.log(user[property]);
}

let element = document.querySelector(".class");


function action(a, p){
    if (a=="idf"){
        runfunction(idf);
    }
    else if (a=="dpl"){
        runfunction(dpl);
    }
    else if (a=="dtc"){
        runfunction("dtc");
    }
}


