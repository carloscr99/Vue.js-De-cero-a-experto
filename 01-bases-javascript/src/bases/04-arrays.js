const array = [1,2,3,4]

array.push(5)

// ... es un operador spred
const array2 = [ ...array ]

array2.push(6)

//La funcion map devuelve otro array 
// independiente
const array3 = array2.map( function(num){
    return num * 2
} )


console.log(array)

console.log(array2)

console.log(array3)