let board = ["wK", "wH", "wB", " ", " ", "bB", "bH", "bK"]



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


