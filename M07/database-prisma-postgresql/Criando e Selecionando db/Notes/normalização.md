# 📘 Aula - Normalização

## Introdução

Nesta aula, vamos explorar um conceito essencial no projeto de bancos de dados relacionais: a normalização de dados. A normalização é um processo que visa organizar eficientemente os dados em tabelas, eliminando redundâncias e reduzindo a probabilidade de erros nos bancos de dados. Entender a normalização é fundamental para projetar sistemas de banco de dados que sejam eficientes, flexíveis e confiáveis.

## Por que a Normalização é Importante

A normalização de dados tem vários objetivos fundamentais:

- **Reduzir a Redundância:** Evitar a duplicação de dados em várias tabelas, economizando espaço de armazenamento e mantendo a consistência dos dados.

- **Minimizar Atualizações Anômalas:** Evitar situações em que a atualização de um valor em uma tabela afeta incorretamente outros valores em outras tabelas.

- **Facilitar a Manutenção:** Tornar mais simples a inserção, atualização e exclusão de dados sem comprometer a integridade dos dados.

- **Melhorar o Desempenho:** Ajudar a otimizar a velocidade de recuperação de dados e consultas.

## Formas Normais

A normalização segue uma série de regras chamadas formas normais. As formas normais são níveis progressivos de organização de dados, desde a primeira forma normal (1NF) até a quinta forma normal (5NF). Vamos dar uma olhada nas três primeiras formas normais:

1. **Primeira Forma Normal (1NF):**
    - Cada coluna em uma tabela deve conter apenas valores atômicos (indivisíveis).
    - Cada registro deve ser único e identificado por uma chave primária.

2. **Segunda Forma Normal (2NF):**
    - Deve atender à 1NF.
    - Todos os atributos não chave devem depender completamente da chave primária.
    - Se uma tabela tiver uma chave primária composta, cada atributo não chave deve depender da chave primária completa, não de parte dela.

3. **Terceira Forma Normal (3NF):**
    - Deve atender à 2NF.
    - A eliminação transitiva deve ser eliminada. Isso significa que não deve haver dependências entre atributos não chave. 
    - Se um atributo não chave depende de outro atributo não chave, ele deve ser movido para uma tabela separada.
#

## Exemplo de Normalização

Considere uma tabela de pedidos em um sistema de comércio eletrônico:

- Tabela "Pedidos":
  - ID_Pedido (Chave Primária)
  - Data_Pedido
  - ID_Cliente
  - Nome_Cliente
  - Endereço_Cliente
```sql
CREATE TABLE Pedidos (
  Order_ID       PRIMARY KEY   NOT NULL,
  Order_Date     DATE          NOT NULL,
  Client_ID      INTEGER       NOT NULL,
  Client_Name    VARCHAR(255)  NOT NULL,
  Client_Address VARCHAR(255)  NOT NULL,
)
```
Essa tabela não está normalizada, pois informações do cliente (Nome_Cliente e Endereço_Cliente) são repetidas em cada registro de pedido. Para normalizá-la, criaríamos uma tabela separada para clientes, mantendo apenas a referência (ID_Cliente) na tabela de pedidos.
## Normalização
```sql
CREATE TABLE Cliente (
  Client_ID      INTEGER       NOT NULL,
  Client_Name    VARCHAR(255)  NOT NULL,
  Client_Address VARCHAR(255)  NOT NULL,
)

CREATE TABLE Pedidos (
  Order_ID       PRIMARY KEY   NOT NULL,
  Order_Date     DATE          NOT NULL,
  Client_ID      INTEGER       NOT NULL,

  FOREIGN KEY (Client_ID) REFERENCES Cliente (Client_ID)
)
```

## Conclusão

A normalização de dados é um processo crítico no projeto de bancos de dados relacionais. Ela ajuda a organizar os dados de forma eficiente, evita redundâncias e mantém a integridade dos dados. Ao compreender as formas normais e aplicar os princípios da normalização, você estará bem preparado para criar bancos de dados robustos e eficientes. 