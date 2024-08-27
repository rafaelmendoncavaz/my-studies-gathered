# 📘 Aula - Inserindo Dados

## Introdução

Nesta aula, exploraremos a inserção de dados em tabelas do PostgreSQL.

## Inserindo recursos

Para inserir dados em tabelas, utilizaremos o comando INSERT INTO. O formato padrão deste comando é ilustrado a seguir:
```sql
INSERT INTO (colunas) VALUES ('valores');
```
Exemplo:
```sql
INSERT INTO products (
  "name", 
  "description", 
  "price", 
  "createdAt", 
  "updatedAt"
)
VALUES (
  'Celular',
  'iPhone 15',
  600000,
  NOW(),
  NOW()
);
```
Neste exemplo, inserimos um novo produto na tabela "products," e observe que não foi necessário fornecer um valor para a coluna "id," pois ela é autoincrementada pelo banco de dados.

## Inserção múltipla

O comando INSERT não se limita a inserir um recurso de cada vez; ele permite a inserção de vários recursos de uma só vez. Veja o exemplo de código a seguir:
```sql
INSERT INTO products (
  "name", 
  "description", 
  "price", 
  "createdAt", 
  "updatedAt"
)
VALUES (
  'Celular',
  'iPhone 15',
  600000,
  NOW(),
  NOW()
),
(
  'Monitor',
  'ASUS VG278Q',
  220000,
  NOW(),
  NOW()
);
(
  'Notebook',
  'Acer Nitro 5',
  250000,
  NOW(),
  NOW()
)
RETURNING *;
```

## RETURNING

Ao adicionar um ou mais recursos, é possível recuperar os valores inseridos usando a cláusula RETURNING. 

## Conclusão

Nesta aula, exploramos a inserção de dados em bancos de dados usando o comando INSERT INTO. Continuaremos a aprimorar nossos conhecimentos em SQL nas próximas aulas. Desejamos um ótimo aprendizado!