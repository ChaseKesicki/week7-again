let animals = ['Giraffe', 'Elephant', 'Yak']

animals.forEach( function(animal, index) {
    console.log(animal, index)
}) //function callsback for each item in array

animals.forEach( (animal, index) =>  console.log(animal, index))
//Arrow also works in this function

animals.forEach( function(animal) {
    console.log(animal)
} )

animals.forEach( (animal) => {
    console.log(animal)
})