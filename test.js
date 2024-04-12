
const ranNum = Math.floor(Math.random() * 20) + 1 // gen ran int between 1 && 20

if (ranNum % 3 === 0 && ranNum % 5 === 0) { //  && === and
    console.log(`FizzBuzz num=${ranNum}`)
}
else if (ranNum % 3 === 0){ 
    console.log(`Fizz num=${ranNum}`)
}
else{
    console.log(`Buzz num=${ranNum}`)
}