// Um callback é uma função passada como argumento para outra função. O objetivo do callback é executar uma ação dentro da função externa, com a finalidade de manipular ou completar alguma rotina com os dados presentes dentro da função externa, ou executar alguma lógica própria dentro do escopo da função externa.

const letters = [
    'a',
    'b',
    'c',
    'd',
    'e'
]

const showItems = (array, callbacak) => {
    for(let i = 0; i < array.length; i++) {
        const currentItem = array[i]

        callbacak(currentItem)
    }
}

showItems(letters, function(item) {
    console.log(item)
})

// 💪 Atividade - Criando uma Callback para uma Função

console.log('💪 Atividade - Criando uma Callback para uma Função')

const sum = (num1, num2) => {
    return num1 + num2
}

const printResult = (result) => {
    console.log(`The result of the sum is: ${result}`)
}

const doSum = (num1, num2, callback) => {
    let result = num1 + num2
    callback(result)
}