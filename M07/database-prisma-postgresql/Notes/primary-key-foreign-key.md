# 📘 Aula - Chaves Primárias e Chaves Estrangeiras

## Introdução

Nesta aula, abordaremos dois conceitos fundamentais em bancos de dados relacionais: chaves primárias e chaves estrangeiras. Esses conceitos desempenham um papel crucial na organização e na manutenção da integridade dos dados em bancos de dados.

## Chave Primária

### Definição

Uma chave primária é um atributo ou conjunto de atributos em uma tabela de banco de dados que serve como identificador exclusivo para cada registro. Isso significa que nenhum valor na chave primária pode se repetir na tabela, garantindo que cada linha tenha uma identificação única. As chaves primárias são usadas para indexar e buscar registros de forma eficiente.

### Características

- **Deve conter valores exclusivos:** Cada valor na chave primária deve ser único em relação a todas as outras linhas da tabela.

- **Deve ser não nulo:** Não é permitido ter valores nulos na chave primária, pois o objetivo é identificar exclusivamente cada registro.
- **Pode ser composta:** Uma chave primária pode ser composta por vários atributos, desde que a combinação deles seja única.

## Chave Estrangeira

### Definição

Uma chave estrangeira é um atributo em uma tabela que estabelece uma relação com a chave primária de outra tabela. Essa relação é usada para conectar dados relacionados entre diferentes tabelas. As chaves estrangeiras ajudam a manter a integridade referencial, garantindo que os dados relacionados sejam consistentes e precisos.

### Características

- **Deve corresponder a uma chave primária:** A chave estrangeira deve se referir a uma chave primária em outra tabela.

- **Pode ser nula:** Em algumas situações, uma chave estrangeira pode ter valores nulos, indicando a ausência de uma relação.

## Exemplo de Uso

Vamos considerar um exemplo de banco de dados de uma biblioteca:

### Exemplo de uso de chave primária
```sql
CREATE TABLE Livros (
  ID_Livro          INT          PRIMARY KEY,
  Título            VARCHAR(255) NOT NULL,
  Autor             VARCHAR(255) NOT NULL,
  Ano_de_Publicacao INT
);
```
#
### Exemplo de uso de chave estrangeira
```sql
CREATE TABLE Emprestimos (
  ID_Emprestimo     INT   PRIMARY KEY,
  ID_Livro          INT,
  Data_Emprestimo   DATE  NOT NULL,
  Data_Devolucao    DATE,
  ID_User           INT,

  FOREIGN KEY(ID_Livro) REFERENCES Livros(ID_Livro),
  FOREIGN KEY(ID_User) REFERENCES Usuarios(ID_User)
)
```
Neste exemplo, a tabela "Empréstimos" utiliza chaves estrangeiras (ID_Livro e ID_Usuário) para se relacionar com as chaves primárias nas tabelas "Livros" e "Usuários". Isso permite que cada empréstimo seja associado a um livro específico e a um usuário específico.

## Importância das Chaves Primárias e Chaves Estrangeiras

- **Mantêm a integridade dos dados:** As chaves primárias garantem que cada registro seja único, enquanto as chaves estrangeiras mantêm a consistência dos dados relacionados.

- **Facilitam a consulta:** As chaves primárias e estrangeiras simplificam a busca e a recuperação de dados relacionados entre tabelas.

## Conclusão

Chaves primárias e chaves estrangeiras são conceitos fundamentais em bancos de dados relacionais. Ao entender como elas funcionam e como são usadas para estabelecer relações entre tabelas, você estará preparado para criar bancos de dados bem estruturados e manter a integridade dos dados.

