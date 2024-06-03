// AULA PROMPT E ALERT

/* 
Com o JavaScript podemos criar interatividade em páginas da web. Uma das maneiras pelas quais os programadores podem interagir com os usuários é por meio das funções prompt() e alert(). Essas funções permitem que você exiba mensagens e colete informações dos usuários por meio de caixas de diálogo simples.
*/

// 1. O que é o prompt?

/*
Sabe quando alguém te faz uma pergunta e você responde? O prompt faz isso no mundo dos computadores. Ele mostra uma janelinha igualzinha ao alert, mas também tem um espaço para você escrever alguma coisa. Você pode perguntar alguma coisa para quem está usando o site e depois usar a resposta para fazer alguma coisa legal!

Exemplo:
*/

let nameIs = prompt("Qual é o seu nome?");
alert("Seja bem vindo(a), " + nameIs + "!");

// 2. O que é o alert?

/*
Sabe quando você quer mostrar uma mensagem importante para alguém? Tipo, quando você quer dizer "Olá!" para alguém, mas em um site? O alert é exatamente isso. É como se o computador mostrasse uma janelinha com a sua mensagem.

Exemplo:
*/

alert("Oi, sejam bem vindos a minha página pessoal!");

// 3. Usando o alert e o prompt juntos

/*
Vamos imaginar que queremos brincar de adivinhar um número. Podemos usar o prompt para perguntar o número para a pessoa e depois usar o alert para dizer se ela acertou ou errou. Olha só:

Exemplo:
*/

let correctNumber = 7;
let guess = prompt("Advinhe o número que estou pensando, entre 1 e 10!");
if (guess == correctNumber) {
    alert("Parabéns, você acertou!")
}
   else if (guess > 10 || guess < 1 || isNaN(Number(guess))) {
    alert("Eu falei um NÚMERO de 1 a 10!")
   }
   else {
    alert("Não foi desta vez. Tente novamente!")
   }

   /*
   As funções alert() e prompt() são ferramentas poderosas para interagir com os usuários em suas aplicações JavaScript. Elas permitem a exibição de mensagens importantes e a coleta de informações do usuário de forma simples. No entanto, é essencial usar esses recursos com sabedoria, considerando a usabilidade e a segurança dos seus aplicativos.
   */