// Fizz buzz
let numero = 100;

for (let i = 1; i <= numero; i++) {
    
    if(i % 3 == 0 && i % 5 == 0){
        console.log(`${i} Fizz Buzz`);
    }
    else if(i % 5 == 0){
        console.log(`${i} Buzz`);
    }
    else if (i % 3 == 0){
        console.log(`${i} Fizz`);
    }
}