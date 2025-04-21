var dogName = "Callie";
var dogWeight = 23;
if (dogWeight > 20) {
    console.log(dogName + "says WOOF WOOF");
}else {
    console.log(dogName + "says woof woof");
}

var dogName = "Snow";
var dogWeight = 22;
if (dogWeight > 20) {
    console.log(dogName + "says WOOF WOOF");
}else {
    console.log(dogName + "says woof woof");
}

var dogName = "Raffy";
var dogWeight = 24;
if (dogWeight > 20) {
    console.log(dogName + "says WOOF WOOF");
}else {
    console.log(dogName + "says woof woof");
}

var dogName = "Bella";
var dogWeight = 24;
if (dogWeight > 20) {
    console.log(dogName + "says WOOF WOOF");
}else {
    console.log(dogName + "says woof woof");
}

function bark(name, weight) {
    if(weight > 20) {
        console.log(name + "Says WOOF WOOF");
    } else {
        console.log(name + " says woof woof");
    }
}


bark("Callie", 23);
bark("Snow", 22);
bark("Raffy", 24);
bark("Bella", 24);