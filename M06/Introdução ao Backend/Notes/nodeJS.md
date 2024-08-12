# 📘 Aula - Backend: Introdução e o que é Node.Js

## Introdução

Nessa aula aprenderemos alguns conceitos básicos sobre o backend e vamos conhecer a incrível ferramenta Node.js.

## Conhecendo o backend

Uma aplicação web pode ser abstraida em duas camadas, sendo elas Frontend e Backend. Diferente do Frontend que é responsável por interagir diretamente com o usuário, o Backend não possui interface gráfica (o que pode ser estranho de início), nele é definido todas as regras de negócio, permissões de acesso, alterações de dados e interações com o banco de dados.

## Arquitetura backend

Apesar de um sistema backend moderno ter uma arquitetura complexa, podemos dividir ele em três partes:

1. Servidor: é o computador que recebe as requisições. Quando falamos de um servidor, estamos falando simplesmente de um computador que escuta as solicitações recebidas. Embora existam máquinas criadas para esse fim específico, qualquer computador, inclusive o seu, pode atuar como servidor;

2. Aplicação: é o aplicativo em execução no servidor que escuta solicitações, recupera informações do banco de dados e envia uma resposta.

3. Banco de Dados (BD): os bancos de dados são aplicações usadas para organizar e armazenar dados.

E é aí que nós, desenvolvedores backend, nos encaixamos. Somos responsáveis por juntar essas três partes de uma forma coesa.

## Como o Node.js surgiu?

Bom, ao passo que a “WEB” tem 33 anos e o JavaScript tem 26, o Node.js conta apenas com 12 anos. E 12 anos pode parecer pouco tempo em comparação, mas no mundo da tecnologia parece que o Node existe desde sempre.

O sucesso do Node está diretamente atrelado ao sucesso do JavaScript na WEB, e graças ao surgimento de alguns aplicativos como Gmail, Flickr, etc., o mundo da tecnologia pôde ter o deslumbre de como a WEB moderna seria. Além disso, as “engines” JavaScript evoluíram consideravelmente ao longo dos anos devido à competição acirrada entre os navegadores para oferecer aos usuários o melhor desempenho possível.

## Onde o Node.js se encaixa?

Para entendermos qual a responsabilidade do Node no contexto backend, precisamos compreender que ele não é um framework, library (biblioteca) ou mesmo uma linguagem de programação. Ele é uma ferramenta utilizada para executar o mesmo JavaScript que utilizamos no Frontend fora do navegador. E como ele faz isso? É aí que entra o Google Chrome, lançando a poderosa “engine V8”, sendo a engine escolhida pelo Node para ser utilizada.

Deixarei na sua tela a variedade de aplicações que podemos fazer com o Node.js:

![](https://media.graphassets.com/resize=width:948,height:476/39a4XCx1TbKfD5jBlHXc)

## Arquitetura do Node

- Além do Node ser muito performático pelo simples fato de utilizar a engine v8 da Google, uma grande vantagem do node é que ele é executado em um único processo, sem criar um thread para cada solicitação;

- Quando o Node.js executa uma operação de E/S (Entrada/Saída), como acessar um banco de dados ou sistema de arquivos, em vez de bloquear a thread e desperdiçar ciclos do processador da máquina esperando, o Node.js retomará as operações quando a resposta voltar. Isso permite que ele lide com milhares de conexões simultâneas com um único servidor sem gerenciar threads simultâneos (saiba que seu processador agradece);

- Chamamos esse conceito de single-thread e ele está diretamente associado ao grande sucesso do node.
#
Bom, ainda existem alguns conceitos importantes do Node, mas que veremos ao longo do curso a medida que vamos progredindo.
