# 📘 Aula - Banco de Dados: PostgreSQL

## Introdução

Nesta aula, introduziremos o banco de dados que iremos trabalhar a partir das próximas aulas, o PostgreSQL.

## Sobre o Postgres

O PostgreSQL, muitas vezes chamado de Postgres, é um sistema de gerenciamento de banco de dados relacional de código aberto. Ele é conhecido por sua confiabilidade, escalabilidade e recursos avançados de extensibilidade. O PostgreSQL foi originalmente desenvolvido na Universidade da Califórnia, em Berkeley, nos Estados Unidos, na década de 1980, e desde então tem sido mantido por uma comunidade de desenvolvedores em todo o mundo.

## Características Principais

1. **Modelo Relacional:** O PostgreSQL segue o modelo relacional de banco de dados, o que significa que os dados são organizados em tabelas com linhas e colunas.

2. **Compatibilidade SQL:** Ele oferece suporte ao SQL padrão, tornando-o compatível com muitas aplicações e ferramentas que utilizam a linguagem SQL.

3. **Extensibilidade:** O PostgreSQL permite a criação de tipos de dados personalizados, funções e operadores, o que o torna altamente extensível e adaptável a necessidades específicas.

4. **Integridade de Dados:** Oferece suporte a restrições de integridade referencial, gatilhos (triggers) e verificações para manter a integridade dos dados.

5. **Recursos Avançados de Indexação:** Oferece várias opções de indexação, incluindo índices B-tree, GIN, GiST e SP-GiST, que podem ser úteis em diferentes cenários de busca e consulta.

6. **Transações ACID:** O PostgreSQL segue o modelo ACID (Atomicidade, Consistência, Isolamento e Durabilidade) para garantir a integridade e confiabilidade dos dados.

7. **Suporte a Geoespacial:** Possui recursos avançados para manipulação de dados geoespaciais, tornando-o uma escolha popular em aplicações de geolocalização.

8. **Replicação e Balanceamento de Carga:** Oferece suporte a replicação e balanceamento de carga para criar ambientes de alta disponibilidade e escalabilidade.

9. **Suporte a JSON e NoSQL:** Além de seu suporte a dados relacionais, o PostgreSQL também oferece recursos para trabalhar com dados semi-estruturados, como JSON.

10. **Segurança:** Fornece recursos avançados de segurança, incluindo controle de acesso baseado em funções (RBAC), criptografia e autenticação.

## Porque PostgreSQL

O PostgreSQL é uma escolha popular para uma ampla variedade de aplicativos, desde pequenos projetos pessoais até sistemas empresariais de missão crítica, devido à sua flexibilidade, desempenho e confiabilidade. Além disso, como é uma solução de código aberto, é amplamente adotado e mantido por uma comunidade ativa de desenvolvedores, o que resulta em atualizações frequentes e suporte contínuo.

## Conclusão

Nesta aula, aprendemos sobre o PostgreSQL de forma introdutória, nas próximas aulas, estaremos colocando em conhecimento em prática.

# 📘 Aula - 🛠 Instalação - PostgreSQL: Windows

## Introdução

Nesta aula, aprenderemos a como fazer a instalação do SGBD PostgreSQL no Windows.

Veremos que, diferentemente do Linux, a instalação é feita por meio de um instalador com uma interface gráfica.

Além disso, algumas configurações adicionais serão necessárias para que, ao final desta aula, os usuários de ambos os sistemas estejam aptos para seguir o conteúdo proposto sem problemas.

## Download

Seguindo a documentação oficial do Postgres, faremos o download do instalador da última versão através deste **[Link](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)**.

![](https://media.graphassets.com/NJaxW3IFSCyxVn17nCmV)

## Instalação

O instalador do PostgreSQL é simples, e se você já instalou algum outro programa no Windows já deve estar familiarizado com esse tipo de ferramenta.

Acompanharemos cada passo da instalação para ficar bem claro o que está acontecendo em cada etapa.

Execute o instalador que acabamos de baixar e siga as instruções a seguir sem pressa.

## Passo 1: Bem-vindo ao instalador do PostgreSQL!

Basta clicar em “Next >” para o próximo passo.

![](https://media.graphassets.com/resize=width:551,height:431/uoWztl8wS9Gp4RIKIi0A)

## Passo 2: Escolhendo o diretório de instalação

Estamos especificando em qual pasta será instalado o PostgreSQL.

![](https://media.graphassets.com/lAGaXV8EQI2weJZoezNN)

Feito isso, partimos para o próximo passo clicando em “Next >”.

## Passo 3: Selecionando os componentes da instalação

Aqui, temos uma lista de componentes onde marcamos quais queremos instalar na nossa máquina, bem como um resumo do que é cada um e a necessidade de instalação:

- **PostgreSQL Server (Necessário):** Como o nome sugere, é o servidor PostgreSQL que ficará rodando em nossa máquina, sendo o responsável por manter disponíveis localmente os serviços da ferramenta para o usuário do sistema;

- **pgAdmin 4 (Opcional):** Um sistema de gerenciamento de bancos de dados, desenvolvido em Python e jQuery, feito para o PostgreSQL, com uma interface gráfica que permite escrever consultas SQL básicas até monitorar e configurar arquiteturas de banco de dados avançados;

- **Stack Builder (Opcional):** Em suma, é uma interface gráfica que ajuda no gerenciamento de softwares que complementam a instalação do PostgreSQL com funcionalidades extras;

- **Command Line Tools (Necessário):** São as ferramentas que utilizaremos nas próximas aulas para ter nosso primeiro contato com o PostgreSQL.

![](https://media.graphassets.com/resize=width:549,height:431/vnqMlQumRY60jEhPrN7H)

Mantenha os itens necessários selecionados e escolha entre os opcionais. Feito isso, partimos para o próximo passo clicando em “Next >”.

## Passo 4: Especificando o diretório de armazenamento

Aqui estamos especificando em qual pasta serão mantidos os dados relacionados ao PostgreSQL.

![](https://media.graphassets.com/JFoMOIIISCUoxj33sfCv)

Recomendamos deixar o padrão e seguir para o próximo passo clicando em “Next >”.

## Passo 5: Cadastrando uma senha de superusuário

A senha do superusuário padrão (postgres) nos possibilitará realizar o login na interface de linha de comando do PostgreSQL futuramente.

Crie uma senha e anote-a, pois, uma vez perdida, você terá que reinstalar o programa.

![](https://media.graphassets.com/resize=width:550,height:432/vPFwWSHrQPCIqAA7vx07)

Após colocar a senha e anotá-la, podemos seguir para o próximo passo clicando em “Next >”.

## Passo 6: Escolhendo a porta de conexão

Estamos escolhendo qual o número da porta onde acontecerá a conexão do cliente (nossa máquina) com o servidor do PostgreSQL.

![](https://media.graphassets.com/resize=width:551,height:430/CXSzobB7S2Gf567P1LhU)

Recomendamos deixar o padrão (5432). Podemos seguir para o próximo passo clicando em “Next >”.

## Passo 7: Selecionando o Locale Support

A configuração se trata de preferências culturais que dizem respeito a alfabetos, ordenação, formatação de números e entre outros.

![](https://media.graphassets.com/resize=width:550,height:431/WodoIidIQAajD5C5E1zH)

Podemos deixar o padrão e seguir para o próximo passo clicando em “Next >”.

## Passo 8: Sumário pré-instalação

Descrição das configurações que fizemos até aqui, quais programas serão instalados na nossa máquina e onde.

Começamos a instalação clicando em “Next >”. Ao final do processo você poderá sair do instalador e seguir os próximos passos de configuração.

# 📘 Aula - PostgreSQL: Configurações e Acessando o psql no Windows

## Introdução

Nessa aula configuraremos o PostgreSQL e faremos nossa primeira conexão ao banco de dados no Windows.

    Nessa aula estaremos partindo do ponto onde o PostgreSQL já está instalado em sua máquina.

Também estaremos utilizando o Git Bash como terminal.

## Configurando o PostgreSQL

São necessárias algumas configurações adicionais no Windows para conseguirmos acessar as funcionalidades do PostgreSQL através do terminal.

Mais uma vez, preparamos uma sequência de passos que detalham o que é necessário fazer. Siga-os com atenção sem pular nenhuma etapa e logo nosso PostgreSQL estará pronto para uso.

## Passo 1: Acessando o terminal interativo do PostgreSQL

Para acessarmos o terminal iterativo do PostgreSQL, onde os comandos SQL serão executados, precisamos executar o comando abaixo:
```sh
psql
```
Ao executar esse comando, você irá receber uma mensagem parecida com essa: “psql: command not found”.

![](https://media.graphassets.com/tP80pFKpReyPrRh6tM97)

Essa mensagem é normal, o sistema operacional ainda não reconhece esse comando, pois, não indicamos para ele onde está sendo armazenado os arquivos do PostgreSQL.

Para resolver esse problema, indicaremos onde esses arquivos estão por meio de uma variável de ambiente do Windows.

## Passo 2: Acessando as propriedades do Windows

Abra seu menu iniciar e na barra de pesquisa procure por variáveis. Você deverá encontrar a opção “Editar as variáveis de ambiente do sistema” como na imagem abaixo. Clique nela e vamos para o próximo passo:

![](https://media.graphassets.com/Y3IePziKRLOKvSGciD3R)

## Passo 3: Acessando as variáveis de ambiente

Na nova janela que abriu, clique em “Variáveis de Ambiente” e vá para o próximo passo:

![](https://media.graphassets.com/X8LLgF5iTCAtnAaU0ET3)

## Passo 4: Selecionando a variável “Path” para edição

Na nova janela que abriu, selecione a variável “Path” e clique em “Editar”:

![](https://media.graphassets.com/rvt9HmgUTjTdW5l286Z9)

## Passo 5: Apontando os arquivos binários do PostgreSQL

Na nova janela que abriu, clique em “Novo”. Uma caixa de texto logo abaixo do último endereço entrou em foco, é nessa caixa em que colocaremos a localização dos arquivos binários do PostgreSQL.

Caso você não tenha alterado a pasta padrão onde o PostgreSQL é instalado, o caminho correto deve ser o seguinte: **C:\Program Files\PostgreSQL\16\bin.**

![](https://media.graphassets.com/rVHlKzBZRJquUg0dKEQZ)

## Primeiro acesso ao psql

Abra um novo terminal, nele realizaremos o primeiro acesso ao terminal integrado do PostgreSQL (psql). Execute o seguinte comando no terminal:
```sh
psql
```

Por padrão, o psql pede a senha do usuário para que a conexão será feita. Esse usuário é o mesmo usuário do seu Windows, porém, a senha de conexão dele é outra.

Independente da senha que você colocar, o psql irá retornar um erro no terminal parecido com a imagem abaixo. Nela podemos ver também que o nome do usuário que a conexão está sendo feita é o mesmo nome de usuário do Windows:

![](https://media.graphassets.com/p0YYhKMnSQChnIZgLfiU)

## Fazendo conexão com o superusuário postgres

Por padrão, ao fazermos a instalação do PostgreSQL, o usuário “postgres” é criado e a senha dele é a mesma senha que colocamos no 5º passo da instalação do PostgreSQL no Windows.

Para fazermos a conexão com o usuário postgres, precisamos utilizar a flag -U (flag utilizada para especificar qual o nome do usuário que queremos nos conectar, por padrão utiliza o nome do usuário do Windows):
```sh
psql -U postgres
```
Insira a senha definida na instalação e você irá se conectar no psql com o usuário postgres.

![](https://media.graphassets.com/4ACBFDYdTjyJQfbQkxGy)

## Criando o primeiro usuário

Tomaremos o cuidado de criar o novo usuário com o mesmo nome do nosso usuário do Windows. Assim, quando quisermos conectar no psql, seremos conectados diretamente com esse usuário.

Para criar o nosso primeiro usuário na psql, usaremos o comando CREATE USER. Criaremos uma senha para este usuário e também daremos algumas permissões:

1. **SUPERUSER:** Ultrapassa qualquer verificação de segurança, executando qualquer tarefa sem problemas;
2. **CREATEROLE:** Permite a criação de roles (outros usuários) através do usuário;
3. **CREATEDB:** Permite a criação de novos bancos de dados.
#
Você pode seguir o exemplo abaixo. E perceba como o nome de usuário que escolhemos é igual ao nome de usuário que aparece no prefixo do console.

Ao executar o comando, recebemos de volta a mensagem CREATE ROLE, indicando que o processo foi bem-sucedido.

![](https://media.graphassets.com/8vDeJskYRv2iAiIJI7h2)

    Caso o seu nome de usuário do Windows contenha alguma letra maiúscula ou hífen, será necessário colocar o nome do usuário entre aspas duplas no comando de criação. ⁠A senha (password) deverá sempre ser passada entre aspas simples.

Então o comando ficará parecido com esses:
```sh
CREATE USER "SEU_USUARIO_WINDOWS" CREATEROLE CREATEDB SUPERUSER PASSWORD '1234';
```

## Criando o primeiro banco de dados

Assim como o criamos um usuário com o mesmo nome do Windows, também precisamos criar um banco de dados com o mesmo nome, para que assim seja possível se conectar no psql com o nosso próprio usuário.

Ao executar o comando, recebemos de volta a mensagem CREATE DATABASE, indicando que o processo foi bem-sucedido.

![](https://media.graphassets.com/6pZKVoECRO6DJDNRvO9h)

    Assim como na criação de usuário, caso o seu nome de usuário do Windows contenha alguma letra maiúscula ou hífen, será necessário colocar o nome do usuário entre aspas duplas no comando de criação.

Então o comando ficará parecido com esses:
```sh
CREATE DATABASE "SEU_USUARIO_WINDOWS";
```

Agora que temos o usuário e banco de dados criado, podemos sair do psql executando o comando \q ou exit.

## Acessando o psql

Agora, ao executarmos psql no terminal e colocarmos a senha dele, iremos nos conectar diretamente no psql com o usuário que criamos, se tornando desnecessário fazer a conexão utilizando o usuário postgres.

