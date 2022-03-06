// /**
//  *
//  * @param n
//  * @returns {function(): void}
//  */
// function createCalc(n) {
//     return function () {
//         console.log(1000 * n)
//     }
// }
//
// const fnCreateCalc = createCalc(10);
// fnCreateCalc();

/**
 *
 * @param n
 * @returns {function(*): *}
 */
function createIncrementor(n)
{
    return function (num) {
        return n + num
    }
}

const addOne = createIncrementor(1)
const addTen = createIncrementor(10)

console.log(addOne(10))
console.log(addTen(20))