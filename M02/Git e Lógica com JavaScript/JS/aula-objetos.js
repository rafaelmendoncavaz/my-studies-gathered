// OBJETOS

// Objetos são estruturas de dados com a habilidade de organizar informações em chaves nomeadas, diferentemente de Arrays. Veremos o seu funcionamento com exemplos.

let minhaXicara = {
    cor: "marrom",
    peso: 30,
}

let meuPrimeiroItemDoPedido = {
    id: 0,
    nome: "Cheeseburger do Rafa",
    preco: 30,
    disponivel: true,
    ingredientes: [
        "pão",
        "alface",
        "tomate",
        "hamburger",
        "queijo"
    ]
}

// ACESSANDO DADOS DENTRO DO OBJETO

console.log(meuPrimeiroItemDoPedido.ingredientes) // Acessa o dado ingredientes
console.log(meuPrimeiroItemDoPedido) // Acessa todo o objeto
console.log(meuPrimeiroItemDoPedido.ingredientes[3]) // Acessa o índice 3 do Array Ingredientes
console.log(meuPrimeiroItemDoPedido.preco) // Acessa o preço
meuPrimeiroItemDoPedido.preco = 25 // Acessa o dado preço do objeto e reatribui seu valor
console.log(meuPrimeiroItemDoPedido.preco) // Acessa o novo preço
meuPrimeiroItemDoPedido.peso = "500g" // Atribui uma nova propriedade, chamada peso e seu valor
console.log(meuPrimeiroItemDoPedido.peso) // Mostra o novo valor adicionado
console.log(`O lanche ${meuPrimeiroItemDoPedido.nome} é muito bom!`) // Concatena com outros comandos/valores 

// Vamos imaginar que nos foi pedido para criar uma estrutura de dados com informações de um livro em específico.

// Usando um Array para armazenar o registro desse livro, os dados pareceriam complexos e de diferentes tipos, além de tornar necessário o controle dos índices numéricos da estrutura. Teríamos algo assim:

const livroArr = [
    "Harry Potter",
    "Harry Potter e a Pedra Filosofal",
    208,
    15648977,
    "J.K Rowling"
]

// Usando um Objeto para armazenar esse mesmo registro, teríamos algo assim:

const livroObj = {
    saga: "Harry Potter",
    volume: "Harry Potter e a Pedra Filosofal",
    paginas: 208,
    codigo: 15648977,
}

// Conseguimos entender muito melhor o que cada chave (índice) representa e qual o valor dela, no momento em que a variável foi instanciada. Dito isso, Arrays são estruturas de dados comumente usadas para armazenar várias informações de mesmo tipo e para facilitar a iteração pelos seus itens. Por outro lado, objetos são estruturas para modelagem de dados comumente usadas para facilitar a organização de dados relacionados. 

// >> Um objeto NÃO é iterável. <<

console.log(livroObj.saga)      //Retorna "Harry Potter"
console.log(livroObj.paginas)   //Retorna 208

// Para alterar os dados desse atributo, também precisamos acessar o objeto usando o ".". Lembrando que, assim como uma variável, esse valor pode assumir qualquer tipo e valor:
livroObj.codigo = 65487565
//ou
livroObj.codigo = "65487565"

// Para criar um atributo, acessamos o nosso objeto, mas dessa vez depois do "." colocaremos o nome do novo atributo:

livroObj.autora = "J.K Rowling";
console.log(livroObj) //Retorna {saga: "Harry Potter", volume: "Harry Potter e a Pedra Filosofal", paginas: 208, codigo: 15648977, autora: "J.K Rowling"}

// Diferentemente dos Arrays, um Objeto pode ter como índice um atributo computado. Um atributo computado é um atributo que tem como nome uma expressão envolta de [].

livroObj["capitulo 1"] = "O menino que sobreviveu";
console.log(livroObj) //Retorna {saga: "Harry Potter", volume: "Harry Potter e a Pedra Filosofal", paginas: 208, codigo: 15648977, autora: "J.K Rowling", "capitulo 1": "O menino que sobreviveu"}
console.log(livroObj)

// Também é possível incluir Arrays dentro de objetos. Se precisarmos criar uma lista de capítulos para nosso objeto livroObj, por exemplo, basta adicionarmos um Array contendo os capítulos dentro do objeto.

livroObj.capitulos = [
    "O menino que sobreviveu",
    "O vidro que sumiu",
    "As cartas de ninguém",
    "O guardião das chaves",
    "O Beco Diagonal"
]
console.log(livroObj)

// MANIPULANDO OBJETOS

// Se o seu item a ser consultado, for um Array que contém um objeto, você poderá acessá-lo buscando sua localização em determinado índice

let list = [
    {
        id: 1,
        name: 'Rafael',
        age: 27,
        address: {
            street: '720 Tranquilo Noro St',
            hood: 'Green Park',
            zipcode: '85807860',
            city: 'Cascavel',
            state: 'Paraná',
            country: 'Brazil'
        },
        vehicle: true,
        occupation: 'Aspiring Programmer'
    }
]

console.log(list[0]) // Acessa o objeto, que ocupa a posição 0 no índice do Array
console.log(list[0].vehicle) // Acessa o dado específico dentro do objeto que ocupa a posição 0

list.push(
    {
        id: 2,
        name: 'Ariadne',
        age: 26,
        address: {
            street: '720 Tranquilo Noro St',
            hood: 'Green Park',
            zipcode: '85807860',
            city: 'Cascavel',
            state: 'Paraná',
            country: 'Brazil'
        },
        vehicle: true,
        occupation: 'Love of my life'
    }
)
console.log(list)

// Adicionando objeto dentro de outro objeto, dentro de um array

list[0].address.taxPayer = false
list[1].address.taxPayer = true
console.log(list)

// Alterando...

list[0].address.street = '2360 W Washington Blvd'
list[0].address.hood = 'Koreatown'
list[0].address.zipcode = 90018
list[0].address.city = 'Los Angeles'
list[0].address.state = 'CA'
list[0].address.country = 'USA'

// Ou via loop para ambos de uma vez

for (let i = 0; i < list.length; i++) {
    list[i].address.street = '2360 W Washington Blvd';
    list[i].address.hood = 'Koreatown';
    list[i].address.zipcode = 90018;
    list[i].address.city = 'Los Angeles';
    list[i].address.state = 'CA';
    list[i].address.country = 'USA';
}

// E também... 

list.forEach(item => {
    item.address.street = '2360 W Washington Blvd';
    item.address.hood = 'Koreatown';
    item.address.zipcode = 90018;
    item.address.city = 'Los Angeles';
    item.address.state = 'CA';
    item.address.country = 'USA';
});

console.log("Updated Version: ", list)

// Removendo...

delete list[0].address.taxPayer
console.log(list[0])

// Removendo com loop...

list.forEach(item => {
    delete item.address.taxPayer
})

console.log("Updated Version 2.0", list)

// FUNÇÕES E OBJETOS
console.log("Funções e Objetos")

const user = {
    username: 'Rafael',
    password: '1234'
}

function changeUsername(newUserName) {
    user.username = newUserName
}

function changePassword(newPassword) {
    user.password = newPassword
}

function logIn({username, password, city}) {
    if(user.username == username &&
        user.password == password) {
        return console.log(`Logado de ${city}`)
    } else {
        return console.log("Usuário ou Senha inválido")
    }
}

const userAcess = {
    username: 'Rafael',
    password: '1234',
    age: 20,
    city: 'Cascavel'
}

console.log(logIn(userAcess))

// MÉTODOS DE UM OBJETO EM JAVASCRIPT
console.log('>>> Métodos de um objeto em JavaScript <<<')

// O método é a propriedade de um objeto, a diferença é o método ser do tipo function.

// Em resumo, um objeto tem suas próprias funções. O que torna extremamente útil manipular rotinas de um objeto. 

// O que podemos definir como uma rotina? Rotina é uma sequência de procedimentos, corriqueiros, que fazem parte dos costumes habituais.

// A forma de se realizar algo sempre da mesma forma, de maneira repetida. Em resumo, é algo que se repete de forma natural.

let car = {
    manufacturer: 'Ford',
    model: 'Focus SE',
    hp: 108,
    color: 'red',
    year: 2018,
    isTurnedOn: false,
    speed: 0,
    turnOn: function() {
        if(this.isTurnedOn) {
            return "Vehicle is already turned on"
        }
        this.isTurnedOn = true
        return "Vehicle turned on"
    },
    turnOff: function() {
        if(!this.isTurnedOn) {
            return "Vehicle is already turned off"
        }
        this.isTurnedOn = false
        return "Vehicle turned Off"
    },
    accelerate: function() {
        if(this.isTurnedOn) {
        if(this.speed >= 0 &&
            this.speed < 240) {
            this.speed += 10
            return "Speed increased"
        }
        if(this.speed == 240) {
            return "Top speed reached"
        }
        } else {
            return "Car is turned off"
        }
    },
    brake: function() {
        if(this.isTurnedOn) {
        if(this.speed > 0) {
            this.speed -= 5
            return "Speed decreased"
        }
        if(this.speed == 0) {
            return "Car has stopped"
        }
        } else {
            return "Car is turned off"
        }
    }
}

// console.log(car.turnOn()) // Output: Vehicle turned on
// console.log(car.turnOn()) // Output: Vehicle is already turned on
// console.log(car.turnOff()) // Output: Vehicle turned off
// console.log(car.turnOff()) // Output: Vehicle is already turned off
// console.log(car.turnOn()) // Output: Vehicle turned on
// console.log(car.accelerate()) // Output: Speed increased (+10)
// console.log(car.accelerate()) // Output: Speed increased (+10)
// console.log(car.speed) // Output: Speed: 20
// console.log(car.brake()) // Output: Speed decreased (-5)
// console.log(car.brake()) // Output: Speed decreased (-5)
// console.log(car.brake()) // Output: Speed decreased (-5)
// console.log(car.brake()) // Output: Speed decreased (-5)
// console.log(car.speed) // Output: Speed: 0

// ATIVIDADES

console.log('>>> ATIVIDADES <<<')

console.log('Atividade 1: Parte 1 - Modelagem')

let person = {
    name: 'Raphael',
    birthYear: 1996,
    documentCPF: '097.465.039-01',
    city: 'Cascavel',
    state: 'Paraná',
    street: 'R Tranquilo Noro, 720'
}
console.log(person)

let school = {
    name: 'Kenzie',
    documentCNPJ: '35.224.825/0001-74',
    specialization: 'Technology',
    city: 'Curitiba',
    state: 'Paran[a',
    street: 'R. General Mario Tourinho, 1733 - 706',
    course: 'Fullstack Developer'
}
console.log(school)

let course = {
    name: 'Fullstack Developer',
    durationYears: 1,
    class: 1,
    module: 2
}
console.log(course)

let address = {
    city: 'Curitiba',
    state: 'Paraná',
    street: 'R. General Mario Tourinho, 1733 - 706',
    zipcode: '80740-000'
}
console.log(address)

console.log('Atividade 1: Parte 2 - Manipulação: Estacionamento')

const vehicle = {  
    licensePlate: "ABC123",   
    classType: ["sedan"],  
    luxury: true,
    hp: 200, 
    parked: true,  

    obtainLicensePlate: function() {
        return `The license plate is ${this.licensePlate}`
    },

    verifyClass: function() {
        if(this.classType.length <= 1) {
            return `Vehicle classified as ${this.classType}`
        }
        if(this.classType.length > 1) {
            return `Vehicle classified as ${this.classType}`
        }
    },

    realPower: function() {
        if(this.luxury) {
            return `The real engine power is ${this.hp**2}`
        } else {
            return `The engine power is ${this.hp}`
        }
    },

    addNewClass: function(str) {
        if(this.classType.length >= 3) {
            return `This vehicle cannot have more class types`
        }
        if(this.classType.length < 3) {
            let classesAllowed = [
            'sedan', 
            'hatchback', 
            'suv', 
            'crossover', 
            'coupe'
            ]
            let isAllowed = str.toLowerCase()
            if(!classesAllowed.includes(isAllowed)) {
                    return `This class (${str}) is not allowed`
                }
            if(this.classType.includes(isAllowed)) {
                return `This vehicle is already classified as ${str}`
            } else {
                this.classType.push(str)
                return `Class type ${str} added successfully`
            }
        }
    },

    notLuxury: function () {
        if(this.parked) {
            console.log(`The vehicle is parked`)
        }
        if(!this.parked) {
            console.log(`The vehicle with lic. plate ${this.licensePlate} is not parked`)
        }
        if(this.luxury) {
            console.log(`This is a luxury vehicle`)
        }
        if(!this.luxury) {
            console.log(`The vehicle with lic. plate ${this.licensePlate} is not a luxury vehicle`)
        }
        if(this.luxury && this.parked) {
            this.luxury = false
            console.log(`The vehicle with lic. plate ${this.licensePlate} is no longer a luxury vehicle`)
        }
        return `Vehicle luxury is set to ${this.luxury} and parked is set to ${this.parked}`
    }
}

console.log(vehicle)
console.log(vehicle.obtainLicensePlate())
console.log(vehicle.verifyClass())
console.log(vehicle.realPower())
console.log(vehicle.addNewClass('chernobyl'))
console.log(vehicle.addNewClass('coupe'))
console.log(vehicle.addNewClass('sedan'))
console.log(vehicle.addNewClass('suv'))
console.log(vehicle.addNewClass('hatchback'))
console.log(vehicle.notLuxury())
console.log(vehicle.notLuxury())
console.log(`Property vehicle parked is now set to ${vehicle.parked = false}`)
console.log(vehicle.notLuxury())
console.log(vehicle)

console.log('>>> Atividade 2 <<<')

const carros = [
    {
        modelo: "Ka",
        marca: "Ford",
        ano: "2000",
        cor: "Branco",
        completo: false,
        acessorios: ['Vidro Elétrico'],
        preco: 6799.33
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: false,
        acessorios: ['Trava'],
        preco: 12199.13
    },
    {
        modelo: "Palio",
        marca: "Fiat",
        ano: "1995",
        cor: "Verde",
        completo: false,
        acessorios: [],
        preco: 11099.1
    },
    {
        modelo: "Monza",
        marca: "Chevrolet",
        ano: "1993",
        cor: "Vinho",
        completo: false,
        acessorios: [],
        preco: 14578.25
    },
    {
        modelo: "Saveiro",
        marca: "VW",
        ano: "2013",
        cor: "Prata",
        completo: false,
        acessorios: [],
        preco: 28399.13
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 14350.45
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "2013",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 22109.21
    },
    {
        modelo: "Montana",
        marca: "Chevrolet",
        ano: "2011",
        cor: "Azul",
        completo: false,
        acessorios: [],
        preco: 15999.13
    },
    {
        modelo: "Stilo",
        marca: "Fiat",
        ano: "2000",
        cor: "Preto",
        completo: false,
        acessorios: [],
        preco: 17251.36
    }
  ]

console.log('Atividade 1 - Quantos veículos temos no estoque?')

function countTotal(carList) {
    return `Temos ${carList.length} veículos em estoque`
}

console.log('Atividade 2 - Quanto vale todo meu estoque de veículos?')

function priceTotal(carList) {
    let totalValue = 0
    for(let i = 0; i < carList.length; i++) {
        totalValue += carList[i].preco
    }
    return `O estoque de veículos vale R$ ${totalValue.toFixed(2)}`
}

console.log('Atividade 3 - Procurando um veículo por marca')

function carBrand(carList, brand) {
    let car = brand.toLowerCase()
    let matchingCars = []
    for(let i = 0; i < carList.length; i++) {
        if(carList[i].marca.toLowerCase() === car) {
            matchingCars.push(carList[i])
        }
    }
    if(matchingCars.length > 0) {
        return matchingCars
    } else {
        return `A marca ${brand} não está disponível`
        }
}

console.log('Atividade 4 - Procurando um veículo por acessório')

function carAccessories(carList, accessory) {
    let accessories = accessory.toLowerCase();

    let matchingCars = carList.filter(car => {
        return car.acessorios.some(acc => acc.toLowerCase().includes(accessories));
    });
    if (matchingCars.length > 0) {
        return matchingCars;
    } else {
        return `Não possuímos veículos com o acessório ${accessory}`;
    }
}

console.log('Atividade 5 - Encontrando veículos completos')

function completeCar(carList) {
    let = matchingCars = []
    for(let i = 0; i < carList.length; i++) {
        if(carList[i].completo) {
            matchingCars.push(carList[i])
        }
    }
    if(matchingCars.length > 0) {
        return matchingCars
    }
        return `Carros completos disponíveis acima`
}

console.log('Atividade 6 - Adicionando mais um carro a concessionária')

function addCar(carList, model, brand, year, color, complete, accessories, price) {
    let newCar = {
        modelo: model,
        marca: brand,
        ano: year,
        cor: color,
        completo: complete,
        acessorios: [],
        preco: price
    }
    for(let i = 0; i < accessories.length; i++) {
        newCar.acessorios.push(accessories[i])
    }
    carList.push(newCar)
    return `Carro ${brand} ${model} ${year} adicionado com sucesso`
}

console.log('Atividade 7 - Removendo um carro da lista de carros da concessionária')

function removeCar(carList, carIndex) {
    let toBeRemoved = carList[carIndex]
    carList.splice(carIndex, 1)
    return `Carro ${toBeRemoved.marca} ${toBeRemoved.modelo} ${toBeRemoved.ano} removido com sucesso`
}

console.log('Atividade 8 - Procurando todos os carros novos')

function newerCars(carList) {
    let today = new Date()
    let year = today.getFullYear()
    let quantity = 0
    let matchingCars = []

    for(let i = 0; i < carList.length; i++) {
        if(year - Number(carList[i].ano) < 10) {
            quantity++
            matchingCars.push(carList[i])
        }
    }
    console.log(matchingCars)
    return `A concessionária possui ${quantity} carro(s) com menos de 10 anos`
}

console.log('Atividade 9 - Quem são os donos')

function addOwner(carList, carIndex, owner) {
    if(!carList[carIndex].hasOwnProperty('dono')) {
        let carOwner = {
            dono: [],
        }
        for(let i = 0; i < owner.length; i++) {
            carOwner.dono.push(owner[i])
        }
        carList[carIndex].dono = carOwner.dono
        return `Dono cadastrado com sucesso`
    }
    return `O dono já foi cadastrado`
}

console.log('>>> Manipulando Objetos e Arrays <<<')

const departmentList = [
    {
      departmentName: 'Financial',
      employees:
      [
        {
          name: 'Rose',
          age: 26,
          responsibility: 'Financial director',
          salary: 5600
        },
        {
          name: 'Stevem',
          age: 32,
          responsibility: 'Financial manager',
          salary: 4200
        },
        {
          name: 'Beca',
          age: 26,
          responsibility: 'Financial analyst',
          salary: 2800
        }
      ],
      working: true
    },
    {
      departmentName: 'Expedition',
      employees:
      [
        {
          name: 'Rooper',
          age: 35,
          responsibility: 'Expedition director',
          salary: 5600
        },
        {
          name: 'Maggie',
          age: 22,
          responsibility: 'Expedition manager',
          salary: 4200
        },
        {
          name: 'Thompson',
          age: 41,
          responsibility: 'Expedition analyst',
          salary: 2800
        }
      ],
      working: true
    },
    {
      departmentName: 'Capitation',
      employees:
      [
        {
          name: 'Saory',
          age: 35,
          responsibility: 'Capitation director',
          salary: 5600
        },
        {
          name: 'Silvia',
          age: 22,
          responsibility: 'Capitation manager',
          salary: 4200
        },
        {
          name: 'Sonem',
          age: 41,
          responsibility: 'Capitation analyst',
          salary: 2800
        },
        {
          name: 'Havi',
          age: 41,
          responsibility: 'Trainee Capitation manager',
          salary: 1500
        },
        {
          name: 'Margie',
          age: 25,
          responsibility: 'Capitation analyst',
          salary: 2800
        },
        {
          name: 'Victoria',
          age: 18,
          responsibility: 'Trainee Capitation analyst',
          salary: 1500
        }
      ],
      working: true
    },
  ]
  
console.log('Atividade 1')
// Desenvolva uma função chamada howManyDepartments que retorne a quantidade de departamentos na lista.

function howManyDepartments(company) {
    let totalDepartments = company.length
    return `The company has a total of ${totalDepartments} Departments`
}

console.log('Atividade 2')
// Desenvolva uma função chamada changeDepartmentName que deverá receber dois parâmetros: o nome atual do departamento e um novo nome para ser atribuído a ele. Esta função deve retornar o objeto correspondente ao departamento com o nome já atualizado. Se o nome do departamento não for encontrado, a função deve retornar: "Department not found."

function changeDepartmentName(currentName, newName) {
    let curName = currentName.toLowerCase()
    for(let i = 0; i < departmentList.length; i++) {
        if(departmentList[i].departmentName.toLowerCase() === curName) {
            departmentList[i].departmentName = newName
            return `Department name changed from ${currentName} to ${newName}`
        }
    }
    return `Department not found`
}

console.log('Atividade 3')
// Desenvolva uma função chamada giveTheDepartmentABreak que alterne o valor da variável working, sempre que chamada. Em resumo, se working estiver como true, deverá mudar para false, e vice-versa. A função deve retornar a propriedade já atualizada.

function giveTheDepartmentABreak(company) {
    let allWorking = false
    for(let i = 0; i < company.length; i++) {
        if(company[i].working) {
            company[i].working = false
        } else {
            company[i].working = true
            allWorking = true
        }
    }
    if(allWorking) {
        return `The employees are back to their duties`
    } else {
        return `The employees are now on a break`
    }
}

console.log('Atividade 4')
// Desenvolva uma função chamada howManyEmployeesInDepartment que recebe o nome do departamento como parâmetro e verifica quantos funcionários estão naquele departamento. Caso o departamento não seja encontrado, retornar: "Departament not found".

function howManyEmployeesInDepartment(department) {
    let departName = department.toLowerCase()
    let numOfEmployees = 0
    for(let i = 0; i< departmentList.length; i++) {
        if(departmentList[i].departmentName.toLowerCase() === departName) {
            numOfEmployees = departmentList[i].employees.length
        }
    }
    if(numOfEmployees > 0) {
        return `The department ${department} has ${numOfEmployees} total employees`
    }
    return `Department not Found`
}

console.log('Atividade 5')
// Desenvolva uma função chamada insertNewEmployeeInDepartment que consiga adicionar um novo funcionário ao departamento. A função deve receber o nome do departamento como parâmetro e um objeto pessoa com: name(string), age(number), responsibility(string), salary(number)

function insertNewEmployeeInDepartment(department, nameIs, ageIs, responsibilityIs, salaryIs) {
    let newEmployee = {
        name: nameIs,
        age: ageIs,
        responsibility: responsibilityIs,
        salary: salaryIs
    }
    let departName = department.toLowerCase()

    for(let i = 0; i < departmentList.length; i++) {
        if(departmentList[i].departmentName.toLowerCase() === departName) {
            departmentList[i].employees.push(newEmployee)
            console.log(departmentList[i].employees)
            return `Employee ${nameIs} added successfully to department ${department}`
        }
    }
    return `Department ${department} not found`
}

console.log('💪 Atividade - Loteria Premiada')

console.log('Atividade 1')
// Você está trabalhando na loteria federal e um cliente se aproxima e fala que foi premiado. Os dados do ganhador já estão no sistema e você agora só deve comparar se as informações prestadas pelo suposto ganhador são realmente verdadeiras. Pegue os documentos necessários e faça a consulta.

let ganhador = {
    nome: 'Adamastor',
    nascimento: '16/09/1986',
    cpf: '123.321.789-98',
    estadoCivil: 'Casado'
}

// Crie uma função que irá receber o nome e cpf do suposto ganhador. Dentro da função você deverá comparar os dados recebidos com os dados existentes. A função deve retornar uma string: "É ganhador!" ou "Não é ganhador!". Desenvolva uma lógica para que o nome sempre tenha a primeira letra maiúscula e as restantes minúsculas.

function winnerIs(name, cpf) {
    if(ganhador.nome[0] === name[0] &&
        ganhador.nome === name &&
        ganhador.cpf === cpf) {
            return `É ganhador!`
    } else {
        return `Não é ganhador!`
    }
}

console.log('Atividade 2')
// O gerente da loteria, pediu para que você guarde as informações das pessoas que vieram atrás do prêmio. Antes você recebia o objeto e fazia a comparação. Agora você precisa armazená-lo em uma variável e inseri-lo em uma lista, mediante a uma condição. A lista deverá ter o nome que achar mais conveniente. Crie uma variável para guardar o objeto recebido. Com base no exercício anterior, insira todos que não ganharam o prêmio em um array. Crie uma função que recebe um objeto. Crie um array e insira o objeto passado. Retorne uma string contendo o número de pessoas que vieram atrás do prêmio, mas não eram ganhadores.

let cameAfter = []

function whoCameAfter(nameIs, cpfIs) {
    let pretenders = {
        nome: nameIs,
        cpf: cpfIs
    }

    if(nameIs !== ganhador.nome ||
        cpfIs !== ganhador.cpf) {
            cameAfter.push(pretenders)
            console.log(cameAfter)
            return `Vieram ${cameAfter.length} pessoa(s) atrás do prêmio, e que não venceram`
        }
    return winnerIs(nameIs, cpfIs)
}

console.log('💪 Atividade - Manipulando Objetos')

console.log('Atividade 1 - Verificando Aprovações')
// Sua tarefa é determinar em quantas matérias o aluno foi aprovado. Se o aluno obteve nota maior ou igual a 6, está aprovado.

let listaAlunos = [
    {
      nome: 'João',
      curso: 'Ciencia da Computação',
      turno: 'Noturno',
      mediaCorte: 7,
      materias: [
        {
          nome: 'Calculo I',
          avaliacoes: [6, 8, 10, 8]
        },
        {
          nome: 'Pensamento Computacional',
          avaliacoes: [6, 8, 6, 8]
        },
        {
          nome: 'Linguagem Orientada a Objetos',
          avaliacoes: [7, 8, 9, 10]
        },
        {
          nome: 'Arquitetura de Organização de Computadores',
          avaliacoes: [6, 8, 7, 8]
        }
      ]
    }
]

let gpSemester = 0

function isApproved(alumni) {
   let materiasArray = alumni[0].materias
   let passed = 0
   let failed = 0

   for(let i = 0; i < materiasArray.length; i++) {
    let gp = 0
    let gpa = 0
    let examsArray = materiasArray[i].avaliacoes

    for(let j = 0; j < examsArray.length; j++) {
        gp += examsArray[j]
    }
    gpa = gp / examsArray.length
    gpSemester+= gpa

    if(gpa < 6) {
        console.log(materiasArray[i].nome)
        console.log(`O aluno ${alumni[0].nome} obteve média de ${gpa} nesta matéria, e portanto foi REPROVADO.`)
        failed++
    } else {
        console.log(materiasArray[i].nome)
        console.log(`O aluno ${alumni[0].nome} obteve média de ${gpa} nesta matéria, e portanto foi APROVADO.`)
        passed++
    }
   }
   return `O aluno ${alumni[0].nome} passou em ${passed} matérias, e reprovou em ${failed} matérias`
}
console.log('Execute a função isApproved(listaAlunos) para verificar a resposta')

console.log('Atividade 2 - Verificando aprovações no semestre')
// Sua tarefa é verificar se o aluno foi aprovado no semestre atual e poderá prosseguir para o próximo. Crie uma função chamada calculaMedia para saber média total do aluno, a partir das notas que ele obteve nas avaliações do semestre.

function isApprovedSemester(alumni) {
    gpSemester = 0
    isApproved(alumni)
    gpaSemester = (gpSemester / alumni[0].materias.length).toFixed(2)
    if(gpaSemester < alumni[0].mediaCorte) {
        return `O aluno ${alumni[0].nome} obteve média de ${gpaSemester} no SEMESTRE, e portanto foi REPROVADO.`
    } else {
        return `O aluno ${alumni[0].nome} obteve média de ${gpaSemester} no SEMESTRE, e portanto foi APROVADO.`
    }
}
console.log('Execute a função isApprovedSemester(listaAlunos) para verificar a resposta')

console.log('Atividade 3 - Verificando destino de passageiros')
// Sua tarefa é determinar quais passageiros irão descer do ônibus em determinada parada.
// Desenvolva um método que recebe a parada atual como parâmetro e verifica se é igual ao valor de paradas do objeto onibus. Esse método deverá verificar em quais passageiros o destino é igual à parada atual do ônibus.
// Em seguida, deve retornar um array com todos os passageiros que irão descer na parada atual.

const onibus = {
    capacidade: 40,
    origem: 'Curitiba-PR',
    destino: 'Rio de Janeiro-RJ',
    paradas: [
      'São Paulo-SP',
      'Campinas-SP',
      'São José dos Campos-SP',
      'Volta Redonda-RJ'
    ],
    passageiros: [
      {
        nome: 'Luis da Silva',
        rg: '1234567890',
        bilhete: {
          origem: 'Curitiba-PR',
          destino: 'São José dos Campos-SP',
          poltrona: 15,
        }
      },
      {
        nome: 'João da Silva',
        rg: '1234567891',
        bilhete: {
          origem: 'São Paulo-SP',
          destino: 'Rio de Janeiro-RJ',
          poltrona: 16,
        }
      }
    ]
}

function busStop(city) {
    let stopping = []
    let passengers = onibus.passageiros.length

    if(onibus.paradas.includes(city) ||
        city === onibus.destino) {
        for(let i = 0; i < passengers; i++) {
            let destination = onibus.passageiros[i].bilhete.destino
            let passenger = onibus.passageiros[i]

            if(destination === city ||
                destination === onibus.destino) {
                stopping.push(passenger)
            }
        }
        console.log('Passageiros desembarcando: ')
        return stopping
    } else {
        return `Este ônibus não passa nesta cidade`
    }
}