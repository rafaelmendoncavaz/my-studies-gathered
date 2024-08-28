# 📘 Aula - Funções de Agregação

## Introdução

Nesta aula, exploraremos as funções de agregação em SQL, usadas para resumir e calcular informações estatísticas sobre os dados em uma tabela. As funções de agregação são fundamentais para realizar análises e obter insights a partir de grandes conjuntos de dados.

## Funções de Agregação Comuns

Existem várias funções de agregação comuns em SQL, incluindo:

- **COUNT:** Calcula o número de registros em uma coluna.
  ```sql
  SELECT COUNT(*) AS TotalPedidos FROM Pedidos;
  ```
  Neste exemplo, COUNT(*) retorna o número total de registros na tabela "Pedidos," que é o número total de pedidos feitos.

- **SUM:** Calcula a soma dos valores em uma coluna numérica.
  ```sql
  SELECT SUM(Valor) AS TotalValorPedidos FROM Pedidos;
  ```
  Aqui, SUM(Valor) soma todos os valores dos pedidos na coluna "Valor" e nos retorna o valor total.

- **AVG:** Calcula a média dos valores em uma coluna numérica.
  ```sql
  SELECT AVG(Idade) AS MediaIdadeClientes FROM Clientes;
  ```
  A função AVG(Idade) calcula a média das idades dos clientes na tabela "Clientes."

- **MIN:** Retorna o valor mínimo em uma coluna.
  ```sql
  SELECT MIN(Idade) AS MenorIdade FROM Clientes;
  ```
  A função MIN(Idade) nos retorna a idade do cliente mais novo.

- **MAX:** Retorna o valor máximo em uma coluna.
  ```sql
  SELECT MAX(Idade) AS MaiorIdade FROM Clientes;
  ```
  A função MAX(Idade) nos retorna a idade do cliente mais velho.

## Conclusão

As funções de agregação são essenciais para resumir e analisar dados em SQL. Elas permitem que você calcule estatísticas, faça resumos e obtenha informações valiosas sobre seus dados. Dominar o uso dessas funções é fundamental para realizar análises eficazes em bancos de dados. Além das funções mencionadas, existem outras funções de agregação, como SUM, AVG, MIN, e MAX, que podem ser usadas conforme as necessidades específicas de sua consulta.