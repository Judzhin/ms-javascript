// alert('01.Lesson');

// const person = {
//     name: 'Max',
//     age: 25,
//     greet: function () {
//         console.log('Greet!')
//     }
// }

const person = new Object({
    name: 'Max',
    age: 25,
    greet: function () {
        console.log('Greet!')
    }
})

Object.prototype.seyHello = function () {
    console.log('Say hello!')
}

const lena = Object.create(person);
lena.name = 'Elena'
// lena.name !== person.name

// const str = 'I am string'
const str = new String('I am string')