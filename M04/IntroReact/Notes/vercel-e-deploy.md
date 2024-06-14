# 📘 Aula - Deploy no Vercel

## O que é e para que serve o deploy?

Imagine a seguinte situação: você desenvolveu uma aplicação SUPER massa e quer disponibilizá-la para outras pessoas, mas quando visualiza o resultado utilizando  npm run dev o projeto abre diretamente no localhost do seu navegador, apenas na sua máquina, sem que outras pessoas, em suas casas, consigam ver. Mas e agora? Como elas terão acesso?

### A resposta é simples: fazendo o deploy! 

Mas o que é isso? Deploy na programação significa, basicamente, colocar a aplicação no ar, ou seja, chegou o momento de mostrar seu site para outras pessoas.

## Como fazer deploy no vercel pelo terminal

Segue o passo a passo: 

    1. Instale o pacote do Vercel CLI globalmente com:
```c
npm i -g vercel
```
    2. Para fazer deploy, é só rodar o comando: 
```c
$ vercel --build-env CI=false
```
     -> isso na pasta do seu projeto;

    3. Logo depois dê um Yes (Y);
    4. Dê enter e No (N) -> repita isso até quando for necessário;

![Run Build](https://i.imgur.com/YNOoI2H.gif)

    5. Espere e pronto! Seu link foi gerado e você pode encontrar tanto no terminal, quanto no site do vercel.

![Deployment](https://i.imgur.com/KnMglOs.gif)

### Sempre que fizer uma alteração no seu projeto atualize seu repositório fazendo o push e seu vercel com o comando vercel --prod.

### ❗ Importante

_Na primeira vez que for usar o vercel vai pedir para você fazer o login, faça com o mesmo e-mail que você criou a conta (se criou a conta com o GitHub, faça o login com ele). Feito isso você vai receber um e-mail de confirmação, clique nele e pronto._

Para mais informações sobre o vercel no terminal: https://vercel.com/docs/cli.

Em caso de erro ao subir sua aplicação pelo terminal, você pode realizar o login na plataforma e subir referenciado o seu github através da dashboard. 


# 📘 Aula - Erros de Deploy no Vercel

## Erros de deploy

Em caso de erro ao subir sua aplicação, é possível ver o log de erros tanto pelo terminal quanto pela plataforma do vercel. Dessa maneira você consegue identificar o erro na   respectiva linha, podendo assim corrigir e subir novamente.

    Pela plaforma do vercel:

    -> Clique no link disponibilizado no 🔍 Inspect, que te levará para a página desse build que construiu.

![Inspect](https://i.imgur.com/cVcNLQz.gif)

![Inspect2](https://i.imgur.com/37bT4m5.gif)

Pelo terminal:

    -> Rode o comando disponibilizado no último erro após destacado dentro do template string, como mostrado abaixo.

![Error_Terminal](https://i.imgur.com/Wj8Iwii.gif)

