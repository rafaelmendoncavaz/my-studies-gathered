// EXERCÍCIO 1
console.log("Atividade 1");
function calculaIMC(peso, altura) {
    let alturaAoQuadrado = altura * altura;
    let imc = peso / alturaAoQuadrado;
    return imc
  }
console.log(calculaIMC(80, 1.80))
  //Ao receber 80 para o peso e 1.80 para altura, a função deve retornar 24.691358024691358
if(calculaIMC(80, 1.80) === 24.691358024691358) {
    console.log(true)
}

// EXERCÍCIO 2
console.log("Atividade 2");
function calculaIdade(nome, anoNascimento, anoFuturo) {
    let idade = anoFuturo - anoNascimento;
    return `Em ${anoFuturo} ${nome} terá ${idade} anos de idade`;
  }
console.log(calculaIdade("Pedro", 2002, 2030))
  //Ao receber os parâmetros: ("Pedro", 2002, 2030) a função deve retornar "Em 2030 Pedro terá 28 anos de idade".
if(calculaIdade("Pedro", 2002, 2030) === `Em 2030 Pedro terá 28 anos de idade`) {
    console.log(true)
}

// EXERCÍCIO 3
console.log("Atividade 3");
function algarismosEmUmNumero(n) {
    let str = n.toString();
    let contagem = str.length;
    if (n != parseInt(n)) {
      contagem = contagem - 1;
    }
    return contagem;
  }
console.log(algarismosEmUmNumero(3.14159265))
//Ao receber 3.14159265 a função deve retornar 9.
if(algarismosEmUmNumero(3.14159265) === 9) {
    console.log(true)
}

// EXERCÍCIO 4
console.log("Atividade 4");
function diaDaSemana(n) {
    let resultado = "";
    
    if (n == 1) {
      resultado = 'Domingo';
    } else if(n == 2 ) {
      resultado = 'Segunda-feira';
    } else if(n == 3) {
      resultado = 'Terça-feira';
    } else if(n ===4) {
      resultado = 'Quarta-feira';
    } else if(n == 5) {
      resultado = 'Quinta-feira';
    } else if(n == 6) {
      resultado = 'Sexta-feira'; 
    } else if(n == 7) {
      resultado = 'Sábado';
    } else {
      resultado = 'Valor Inválido';
    }
  
    return resultado;
  }
console.log(diaDaSemana(1));
console.log(diaDaSemana(3));
console.log(diaDaSemana(0));
//Ao receber '1' a função deve retornar 'Domingo'
//Ao receber 3 a função deve retornar 'Terça-feira'
//Ao receber 0 a função deve retornar 'Valor Inválido'
if(diaDaSemana(1) === "Domingo" && diaDaSemana(3) === "Terça-feira" && diaDaSemana(0) === "Valor Inválido") {
    console.log(true)
}
