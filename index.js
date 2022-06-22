// 01 - Nombre pairs
// totalEven = 0
// for (i = 11; i < 47; i += 1){
//     if(i % 2 === 0){
//         totalEven += i
//     }
// }
// console.log(totalEven)

// 02 - Nombre Impair
// totalOdd = 0
// for (i = 109; i < 588; i += 1){
//     if(i % 2 !== 0){
//         totalOdd += i
//     }
// }
// console.log(totalOdd)

// 03 - Puissance et racine carrée
// const numbers = [1, 2, 3, 4, 5]
// const squares = []
// const roots = []
// for (i=0; i < numbers.length; i += 1){
//     squares.push(numbers[i] ** 2)
// }
// for (i=0; i < numbers.length; i += 1){
//     roots.push(Math.sqrt(squares[i]))
// }
// console.log(numbers)
// console.log(squares)
// console.log(roots)

// 04 - Table de multiplication
// for (i = 0; i <= 10; i += 1){
//     console.log(`3 x ${i} = ${3*i}`)
// }

// 05 - Plusieurs tables de multiplication
// for (i = 0; i <= 10; i += 1){
    
//     for(j = 0; j <= 10; j += 1){
//         console.log(`${i} x ${j} = ${i*j}`)
//     }
//     console.log()
// }

// 06 - Factorielle v1
// const number = 7
// let total = 1
// for (i = 1; i <= number; i += 1){
//     total = total * i
// }
// console.log(total)

// 07 - Factorielle v2
// const number = 8
// let total = 1

// for (i = 0; i <= number; i += 1){
//     for (j = 1; j <= i; j += 1){
//         total = total * j
//     }
//     console.log(total)
//     total = 1
// }

// 08 - Somme des carrés
// let total = 0
// for (i = 5; i <= 10; i += 1){
//     total = total + i ** 2
// }
// console.log(total)

// 09 - Comptons
// let total = 0
// for (i = 100; i <= 1000; i += 1){
//     if (i % 7 === 0){
//         total += 1
//     }
// }
// console.log(total)

// 10 - Chanceux
// let max = 6
// numberLuck = 0
// for(i = 0; i < 20; i += 1){
//     if (Math.ceil(Math.random()*max) >= 5){
//         numberLuck += 1
//     }
// }
// console.log(numberLuck)

// 11 - Des boites

// Le code affichera :
// 10
// 34
// 17
// 30
// 14

// 12 - D'autres boites
// Le code affichera :
// 12
// 24
// 33
// 39
// 42
// 0

// 13 - Encore des boites
// 0
// 3
// -3
// 2
// -2
// 5
// -4

// 14 - Amstrong Number
// for (let i=0; i < 1000; i += 1) {
//     let stringifiedNumber = i.toString()
//     let Numbers = stringifiedNumber.split("")
//     totalCubic = 0
//     for (let number = 0; number < Numbers.length; number += 1){
//         totalCubic = totalCubic + (Numbers[number] ** 3)
//     }
//     if (totalCubic === i) {
//         console.log(i)
//     } 
// }

// 15 - Amstrong Number générique
for (let i=0; i < 10000; i += 1) {
    let stringifiedNumber = i.toString()
    let Numbers = stringifiedNumber.split("")
    total = 0
    for (let number = 0; number < Numbers.length; number += 1){
        total = total + (Numbers[number] ** Numbers.length)
    }
    if (total === i) {
        console.log(i)
    } 
}
