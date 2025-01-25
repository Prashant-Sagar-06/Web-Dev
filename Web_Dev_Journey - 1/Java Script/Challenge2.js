rand = Math.random()

let first, second, third
if (rand < 0.33) {
    first = "Crazy"
}
else if (rand < 0.66 && rand >= 0.33) {
    first = "Firey"
}
else {
    first = "Incredible"
}


rand = Math.random()

if (rand < 0.33) {
    second = "Home"
}
else if (rand < 0.66 && rand >= 0.33) {
    second = "Shop"
}
else {
    second = "Resto"
}



rand = Math.random()

if (rand < 0.33) {
    third = "Hub"
}
else if (rand < 0.66 && rand >= 0.33) {
    third = "Point"
}
else {
    third = "Place"
}


console.log(`The name of your business is ${first} ${second} ${third}`)