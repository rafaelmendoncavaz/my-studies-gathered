# 📘 Aula - Try/Catch

## Introdução

Como já foi mencionado em aulas anteriores, o modelo de função async é mais adequado para realização de requisições porque tem uma leitura melhor e porque é mais escalável. Permitindo evitar o famoso: promise callback hell.

Agora, para deixarmos esse uso ainda mais refinado, vamos aprender sobre a estrutura trycatch.

## O trycatch

O trycatch consiste numa estrutura de código nativa do Javascript que permite lidarmos com erros de forma inteligente, muito semelhante ao then.catch, mas adequado para o modelo de função assíncrona que estamos trabalhando.

```js
try{
⁠
} catch (error) {
⁠
}
```

Dentro de try, o Javascript vai tentar executar cada linha de código, e caso haja um erro, ele vai interromper a execução e executar a instrução que está presente no catch.

Confira um exemplo contextualizado:

```js
async function loadData() {
   try {
      const response = await api.get("/fruits", {
         params: {
            category: category,
         },
      });            
      setFruitList(response.data);
   } catch (error) {
      console.log(error);
   } 
}      
```
Nesse exemplo, temos em try, uma tentativa de requisição seguida de uma atualização de estado, caso a requisição dê certo a atualização vai se concretizar, do contrário cairemos em catch, reproduzindo o erro no console.

## Finally

Podemos aprimorar ainda mais esta estrutura, adicionando o bloco "finally" à estrutura "try-catch". O bloco "finally" é utilizado quando desejamos executar uma instrução após a tentativa, **independentemente de ter sido bem-sucedida ou ter ocorrido um erro**.

Confira o exemplo contextualizado:
```js
async function loadData() {
   try {
      setLoading(true);
      const response = await api.get("/fruits", {
         params: {
            category: category,
         },
      });            
      setFruitList(response.data);
   } catch (error) {
      console.log(error);
   } finally {
      setLoading(false);
   }⁠

}   
```

Aprimoramos nossa funcionalidade adicionando um comportamento de carregamento. Agora, ao iniciarmos a tentativa, definimos nosso status de carregamento como verdadeiro. E, independentemente do resultado da tentativa, ao término, no bloco finally, suspendemos nosso carregamento.

## Conclusão

Nesta aula, aprendemos sobre o trycatch e como podemos lidar com requisições com mais qualidade. 
