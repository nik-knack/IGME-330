const arr = [1, 2, 3, 4, 5];

const evens = arr.filter(elem => {
    return elem % 2 === 0;
})

// can't be exported, is not a pure functions, defeats the purpose of map
//let wrappedNumSize = 0;
const wrappedNums = arr.map(elem => {
    //wrappedNumsSize++;
    return { value: elem } // An array of objects that have a value property
    // Shape: What is the structure of that object
    // Similar to types
})

const persons = [
    {name: 'travis', age: 36},
    {name: 'charlie', age: 32},
    {name: 'kady', age: 28}
];


// Possible questions:
// make a canvas, draw a rectangle
// pseudo code is allowed, but may not be fill credit

// not important for the test
// clones the persons objects and adds the fun value property
const peopleWithGuns = persons.map(person => {
    return {
        ...person,  // spread operator
        gun: 'blaster'
    }
})
