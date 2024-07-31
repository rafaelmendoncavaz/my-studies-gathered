# 📘 Aula - Redux: Introdução

Até agora aprendemos como usar React, como salvar em state informações importantes para renderização de componentes, e como passar esses states por props.

Mas talvez você até já tenha notado como é trabalhoso passar state por props quando nosso código começa a ficar extenso e complexo. Se muitos componentes precisam usar um mesmo state alguns problemas podem surgir, e o código começa a ficar repetitivo e sujo.

O Redux é uma ferramenta criada para melhorar essa "movimentação" de estados, e agora vamos dar uma olhada na sua estrutura.

## Estruturas do Redux

Vamos entender a composição do Redux e o seu fluxo.
![](https://media.graphassets.com/ljlW7M3pSjCsFLj1jqvT)

Para organizarmos de maneira mais didática, vamos entender as partes.
#

### Store
Será a caixa que armazena os nossos estados globais. Dentro dela centralizaremos a estrutura do Redux.
#
### Reducer
Essa estrutura é quem armazena e modifica o nosso estado. Podemos ter mais de um reducer dentro de nossa Store, ou seja, cada Reducer terá seu estado correspondente.
#
### State
É o nosso estado vinculado ao reducer.
#
### Dispatch
Através dele conseguimos encaminhar as informações para a nossa Store.
#
### Action
Representa uma ação que passamos para o dispatch, com um identificador type, e um valor.
#
## Fluxo do Redux
Agora vamos entender a integração com base no gif acima:

- Na nossa UI temos dois botões, um para adicionar 10 e outro retirar 10.

- Repare que temos uma renderização de um estado ao lado dos botões, que inicialmente é $0.

- Quando clicamos no botão Deposit $10, acionamos um evento de click.

- Esse evento (o click) vai acionar o dispatch. onClick={() ⇒ dispatch(action)}

- Perceba que o dispatch vai transportar uma action até a Store.

- Essa action é formada por um objeto com um type e um valor. No nosso exemplo ele tem o seguinte formato:
```js
{ 
    type: "deposit",
    payload: 10
}
```
**type** representa o tipo da nossa **action**

**payload** nesse caso é o nosso valor. O nome poderia ser outro nesse caso, mas **payload** é bastante usado.

- Após a action ser transportada até a Store, ela entrará no reducer, buscando pelo type correspondente.

- Existindo no reducer o type correspondente, vamos alterar o estado. No caso do exemplo acrescentaremos 10 ao estado.

- Por fim, repare que dentro da UI veremos o reflexo da alteração do estado. Assim que o estado muda dentro da Store, ele será atualizado dentro da UI também.
#
Muito confuso? O Redux naturalmente leva mais tempo para ser fixado, por isso é importante entender o seu fluxo, e como cada elemento vai funcionar nessa composição.

Nas próximas aulas teremos exemplos mais práticos, e sempre que precisar revise este fluxo e é muito importante praticar para o processo de entendimento e fixação deste conteúdo.