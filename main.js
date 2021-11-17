for(let i=1;i<101;i++){
    i%3===0 && i%5===0 && i%7===0 && i%8===0?console.log('FizzBushFishBus'):
    i%3===0 && i%5===0 && i%7===0?console.log('FizzBuzzFish'):
    i%3===0 && i%5===0? console.log('FizzBuzz'):
    i%3===0?console.log('Fizz'):
    i%5===0?console.log('Buzz'):
    // i%7===0?console.log('Fish'):
    // i%8===0?console.log('Bus'):
    console.log(i)

}