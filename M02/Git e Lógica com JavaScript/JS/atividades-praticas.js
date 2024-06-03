console.log('💪 Atividade - JavaScript - Desafio Portaria')

function clubEntrance(name, age, accompanied) {
    let isAccompanied = false
    if(age < 18) {
        return `Entrada não permitida para ${name}: Menor de Idade.`
    } else if(accompanied.toLowerCase() === 's') {
        isAccompanied = true
        return `Entrada permitida para ${name}: Conceder desconto.`
    } else {
        isAccompanied = false
        return `Entrada permitida para ${name}: Valor integral.`
    }
}


console.log('💪 Atividade - JavaScript - Aprovado ou Reprovado')

function isApproved() {
    let nome = ''
    let grade = 0
    let gp = 0
    let gpa = 0
    let attended = 0
    let subject = ''
    let subjects = []

    nome = prompt('Insira o Nome do(a) aluno(a):')
    if(nome.length < 5) {
        alert('Insira um nome válido')
        nome = prompt('Insira novamente')
    }
    attended = prompt('Frequência/Presença:')
    if(attended <= 0 ||
        attended > 10) {
        alert('A presença não pode ser 0 ou maior que 10')
        attended = prompt('Insira a frequência novamente')
    }
    while(subject.toLowerCase() !== 'x') {
        subject = prompt('Insira a Matéria:\n Insira x para concluir')
        if(subject.toLowerCase() === 'x') { 
            break
        }
        if(!subjects.includes(subject)) {
            grade = prompt('Insira a nota desta matéria')
            if(grade <= 0 || grade > 10) {
                alert('A nota não pode ser 0 ou maior que 10')
                continue
            }
            subjects.push(subject)
            gp += parseFloat(grade)
        } else {
            alert('Esta matéria já foi inserida')
        }
    }
    gpa = gp / subjects.length
    if(gpa >= 8 && 
        attended >= 6) {
            return `A nota do aluno ${nome} é ${gpa.toFixed(2)} e sua presença é ${attended}: Aluno aprovado!`
        } else {
            return `A nota do aluno ${nome} é ${gpa.toFixed(2)} e sua presença é ${attended}: Aluno reprovado!`
        }
}

console.log('💪 Atividade - JavaScript - Acerte o Número')

function randomNumberGenerator() {
    alert(`Número aleatório gerado entre 1 e 20`)
    return Math.floor(Math.random() * 20) + 1
}

let rng = randomNumberGenerator()
let myGuess = parseInt(prompt('Insira o seu palpite entre 1 a 20'))

function checkYourGuess(randomNumber, guess) {
    let attempts = 1 

    while(randomNumber !== guess) {
        if (isNaN(guess) || guess < 1 || guess > 20) {
            alert('Insira um número válido entre 1 e 20');
        } else {
            alert('Tente novamente');
            guess = parseInt(prompt('Insira novamente o seu palpite'));
            attempts++;
        }
    }
    return alert(`Você acertou na tentativa ${attempts}`)
}

console.log('💪 Atividade - JavaScript - Enigma')

function decipher(riddle) {
    let word = ''
    let wordsFound = []
    for(let i = 0; i < riddle.length; i++) {
        if(riddle.length < 251) {

        if(riddle[i].match(/[a-z]/g)) {
            word+= riddle[i]
        } else {
            wordsFound.push(word)
            console.log(`Palavra encontrada! ${word}`)
            word = ''
            }
        } else {
            return `O programa detecta apenas < 250 > caracteres por vez!`
        }
    }
    wordsFound.push(word)
    console.log(`Palavra encontrada! ${word}`)

    return `Palavras Encontradas: ${wordsFound.length}`
}

console.log('💪 Atividade - JavaScript - Gestão de Perguntas')

const slenzie = {
    name: '',
    questions: []
}

const slenzieQuestions = {
    user: '',
    userQuestion: '',
    vote: 0,
    answered: false
}

function createEvent(eventObj, eventName) {
    if(eventName.length >= 5 &&
        typeof eventName === 'string') {
            eventObj.name = eventName
    } else {
        return `The input value is invalid`
    }
    return `Event name is now ${eventObj.name}`
}

function createQuestion() {
    const objQuestion = { user: '', userQuestion: '', vote: 0, answered: false };
    objQuestion.user = prompt('Type your name') || '';
    objQuestion.userQuestion = prompt('Type your question') || '';
    return objQuestion;
}

function addQuestion(eventObj, objQuestion) {
    if(typeof eventObj !== 'undefined' &&
        typeof objQuestion !== 'undefined') {
            eventObj.questions.push(objQuestion)
            return eventObj.questions
    } else {
        return `The user or question cannot be undefined`
    }
}

function addVoteToQuestion(eventObj, questionIndex) {
    if(eventObj.questions[questionIndex]) {
        eventObj.questions[questionIndex].vote++
        return `Vote registered successfully`
    } else {
        return `Question not found`
    }
}

function answerQuestion(eventObj, questionIndex) {
    if(eventObj.questions[questionIndex]) {
        eventObj.questions[questionIndex].answered = true
        return `Question Answered successfully`
    } else {
        return `Question not found`
    }
}

function unansweredQuestions(eventObj) {
    let output = []
    let iterate = eventObj.questions

    for(let i = 0; i < iterate.length; i++) {
        if(!iterate[i].answered) {
            output.push(iterate[i])
        }
    }
    return output
}

console.log('💪 Atividade - JavaScript - Caixa Eletrônico')

const user = {
    name: "Jhon Doyle Fox",
    savingsBalance: 500,
    cardsInformation: [
        {
          number: "5160 4196 4843 3388",
          creditBalance: 1000,
          ensign: "American Express",
        },
      ],
    };

function validateAmount(amount) {
    amount = parseFloat(amount.replace(",", "."))
      
    if (isNaN(amount) || amount % 1 !== 0 || amount < 5 || amount > 500) {
        alert("This value is not allowed")
      
        return true
    }
    return false
}
  
let responseBalance

do {
    responseBalance = prompt("Digite 1 para poupança ou 2 para crédito:")
  } while (responseBalance !== "1" && responseBalance !== "2")
  
  function getBalance(responseBalance, user) {
    const balance =
      responseBalance === "1"
        ? user.savingsBalance
        : user.cardsInformation[0].creditBalance 
  
    return alert(balance)
}

let valueForDeposit

do {
    valueForDeposit = prompt("valor de deposito")
  } while (validateAmount(valueForDeposit))
  
  function makeDeposit(user, valueForDeposit) {
    user.savingsBalance += parseInt(valueForDeposit)
  
    return alert("Deposit made successfully")
}

let responseWithDraw
let withdrawnAmount

do {
    responseWithDraw = prompt("Digite 1 para poupança ou 2 para crédito:")
  } while (responseWithDraw !== "1" && responseWithDraw !== "2")
  
  do {
    withdrawnAmount = prompt("valor de saque")
  } while (validateAmount(withdrawnAmount))

function makeWithDrawal(user, responseWithDraw, withdrawnAmount) {
    if (responseWithDraw === "1" && user.savingsBalance >= withdrawnAmount) {
      user.savingsBalance -= withdrawnAmount
      return alert("Withdrawal carried out.")
    } else if (
      responseWithDraw === "2" &&
      user.cardsInformation[0].creditBalance  >= withdrawnAmount
    ) {
        user.cardsInformation[0].creditBalance  -= withdrawnAmount
      return alert("Withdrawal carried out.")
    }
  
    return alert("Balance unavailable")
}

console.log('💪 Atividade - Javascript - Dados Escolares')

const alunoCurso = {
    nome: "João",
    idade: 31,
    curso: "FullStack",
    instituicao: "Kenzie Br",
    materias: ["Html", "Css", "JavaScript", "Python"],
    situacaoMatricula: true,
}

let search

do {
    search = prompt('O que deseja pesquisar?\n1: Curso\n2: Matéria\n3: Situação de Matrícula\n4: Gerar Carteira');
} while (search != 1 && 
        search != 2 && 
        search != 3 && 
        search != 4)

function getTheCourse(aluno) {
    if(search == 1) {
    return alert(`Aluno matriculado no curso ${aluno.curso}`)
    }
}

function getTheSubjects(aluno) {
    if(search == 2) {
    return alert(`Matérias: ${aluno.materias}`)
    }
}

function registrationStatus(aluno) {
    if(search == 3) {
        if(aluno.situacaoMatricula) {
            return alert('Matrícula Ativa')
        } 
    }
    return alert('Matrícula Inativa')
}

function generateStudentCard(aluno) {
    if(search == 4) {
        let cardInfo = `name: ${aluno.nome}, idade: ${aluno.idade}, curso: ${aluno.curso}, instituição: ${aluno.instituicao}`

        return alert(cardInfo)
    }
}

console.log('💪 Atividade - Lista de JavaScript - Debug I')

let secoesMercado = {}

let hortifruti = []
let açougue = []
let padaria = []
let AdegaEBebidas = []
let laticíniosEFrios = []

function adicionarSecaoAoMercado(secao, nomeSecao){
    secoesMercado[nomeSecao] = secao

    return secoesMercado
}

function adicionarItemASecao(novoItem, secao){
    secao.push(novoItem)

    return secao
}

function retornarItemDaSecao(nomeItem, secao){
   if(secao.includes(nomeItem)) {
    return `Item encontrado: ${nomeItem}`
   }

   return `Item não encontrado`
}

function retornaUtlimoItemDaSecao(secao){
   return secao[secao.length -1]
}

function consultaSecoesMercado(secoesMercado){
    return console.log(secoesMercado)
}

function somaItens(totalA, totalB){
    if(totalB != 0 && totalB != 0){

        return parseInt(totalA + totalB)
    }
}

function baterPonto(nome, numeroFicha){
    const funcionarios = ["Sônia", "Cage", "Alex", "Liu Ken"];

    const pattern = funcionarios.map(x => {
        let normalizedWord = x.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        return normalizedWord.replace(/[^a-zA-Z0-9]/g, '');
    });

    let nameToLower = nome.toLowerCase()
    if(numeroFicha >= 0 && 
        numeroFicha < funcionarios.length &&
        pattern[numeroFicha].toLowerCase() == nameToLower ||
        funcionarios[numeroFicha].toLowerCase() == nameToLower) {
        return "Turno processado"
    } else {
        return "Funcionario não cadastrado"
    }
}

function loginSistema(nomeUsuario, senhaUsuario){
    
    const listaUsuarios = ["luffy123", "acer321", "nami"]
    
    if(listaUsuarios.includes(nomeUsuario)) {

        if(nomeUsuario == 'luffy123'){
            if(senhaUsuario == 326541){
                return "Acesso liberado"
            }
        }if(nomeUsuario == 'acer321'){
            if(senhaUsuario == 741258){
                return "Acesso liberado"
            }
        }if(nomeUsuario == 'nami'){
            if(senhaUsuario == 963258){
                return "Acesso liberado"
            }
        }
    }

     return "Acesso Negado"
}

console.log('💪 Atividade - Lista de JavaScript - Debug II')

//função⁠
const produtosCotacao = []
function insereProduto(produto){    

    produtosCotacao.push(produto)

    return produtosCotacao 
}

//chamada da função
insereProduto({
    preco: 100,
    quantidade: 10, 
    nome: "Soja 25kg"
})

//função⁠
function criaProduto(preco, quantidade, nome){
    let produto = {
        preco: preco,
        quantidade: quantidade,
        nome: nome
    }

    return produto
}

//chamada da função
criaProduto(200, 150, "Feijão 25kg")

//função⁠
function renderizaProdutos(todosProdutos){
    for (let i = 0; i < todosProdutos.length; i++){
        let renderPrice = todosProdutos[i].preco
        let renderName = todosProdutos[i].nome
        console.log(`${renderName}: ${renderPrice}`)
    }
}
//chamada da função
let todosProdutos = insereProduto(produto)

renderizaProdutos(todosProdutos)

//função⁠
let listServico = []

function cadastraServicos(servico){
   listServico.push(servico)
}
//chamada da função
cadastraServicos({servico: "Pulverização", tipo: "Gafanhotos", valor: 50})

//função⁠
function calculaValorServico(clienteServicos){
    let renderValue = clienteServicos.servico
    let valorServico = 0
    for(let i = 0; i < renderValue.length; i++) {
        
        valorServico += renderValue[i].preco * renderValue[i].quantidade
    }
     return valorServico
 }
 
 //chamada da função
 calculaValorServico({cliente: "Rafael", servico:[
     pulverizacao = {
        preco: 50,
        quantidade: 10
     },
     capina = {
         preco: 5,
         quantidade: 10
     },
     aragem = {
         preco: 200,
         quantidade: 10
     }
 
 ]})
 