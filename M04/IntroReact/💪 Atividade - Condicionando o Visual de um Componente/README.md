# 💪 Atividade - Condicionando o Visual de um Componente

## Sobre a atividade

Nesta aula criaremos um componente que terá seu visual condicionado com base em um valor de status fornecido via props.

## Mão na massa

- Dentro de aplicação React já criada com Vite, crie um componente chamado UserCard, que deverá receber como prop os seguintes valores: name, email, status.

- Agora, crie um arquivo para estilizar esse componente (podendo ser um module ou não), e dentro desse arquivo crie uma active. Fique a vontade para criar o estilo que desejar nesta classe.

- Agora com classe devidamente criada e o arquivo de estilização aplicado no componente ou no projeto, utilize o ternário para condicionar a aplicação da classe active, somente quando a prop status for verdadeira.

- Feito isso, importe o componente em App, e renderize diferentes instâncias de UserCard, variando o valor de status.

Se tudo der certo, somente os componentes com status "verdadeiro" terão o visual passado na classe ativa.