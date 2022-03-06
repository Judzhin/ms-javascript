function hello() {
    console.log('Hello', this)
}

const person = {
    name: 'Max',
    age: 25,
    sayHello: hello,
    // sayHelloWindow: hello.bind(this), // window
    // sayHelloWindow: hello.bind(window), // window
    sayHelloWindow: hello.bind(document), // document
    // logInfo: function () {
    /**
     *
     * @param job
     * @param phone
     */
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: 'Lena',
    age: 23,
}

// person.logInfo.bind(lena)()

// const fnLenaLogInfo = person.logInfo.bind(lena)
// fnLenaLogInfo('Frontend', '8-999-555-444')

// const fnLenaLogInfo = person.logInfo.bind(lena, 'Frontend', '8-999-555-444')
// fnLenaLogInfo()

person.logInfo.apply(lena, ['Frontend', '8-999-555-444'])

// ===========================

const arr = [1, 2, 3, 4, 5]

// function multBy(arr, n) {
//     return arr.map(function (i) {
//         return i * n
//     })
// }
// console.log(multBy(arr, 15))

Array.prototype.multBy = function (n) {
    return this.map(function (i) {
        return i * n
    })
}

console.log(arr.multBy(15))