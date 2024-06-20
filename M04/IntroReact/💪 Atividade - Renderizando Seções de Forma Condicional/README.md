# 💪 Atividade - Renderizando Seções de Forma Condicional

## Sobre a atividade

Essa será uma aplicação onde o seu principal objetivo é entender como podemos utilizar as renderizações condicionais no React, com um exemplo simples de alternância de componentes em tela.

## Passo a passo

- Em um projeto de React criado com Vite, comece criando dois componentes diferentes, podemos chamá-los de LoginSection e RestrictedSection

- Feito isso, em LoginSection crie um botão de login, e RestrictedSection uma mensagem de boas-vindas e um botão de logout. Caso queira criar uma estrutura mais robusta, fique a vontade.

- Agora em App, crie um estado isLogin, com um valor inicial falso.

- Com o ternário, crie uma condição para, quando isLogin for falso exibir LoginSection e quando for verdadeiro RestrictedSection.

- Passe como prop, a função modificadora de isLogin para ambos os componentes.

- Em LoginSection coloque no evento de clique de botão um disparo para alterar o estado isLogin para verdadeiro.

- Em RestrictedSection coloque no evento de clique de botão um disparo para alterar o estado isLogin para falso.

Se tudo certo, você conseguirá alternar a exibição dos componentes por meio do clique nos botões.