# 📘 Aula - Tipos de Dados

## Introdução

Nesta aula, vamos explorar os tipos de dados em bancos de dados e como eles são fundamentais para definir a estrutura e o comportamento das informações armazenadas. Os tipos de dados desempenham um papel crucial na garantia da precisão e consistência dos dados em um banco de dados.

## O Que São Tipos de Dados

Tipos de dados em bancos de dados são categorias que especificam que tipo de informação pode ser armazenada em um campo ou coluna. Cada tipo de dado possui um conjunto de valores possíveis e regras para seu uso. A escolha do tipo de dado apropriado é essencial para garantir a integridade dos dados e otimizar o armazenamento.

### Tipos de Dados Comuns

**Texto (String):**
- **CHAR(n):** Armazena uma string de tamanho fixo de comprimento n.
- **VARCHAR(n):** Armazena uma string de tamanho variável com comprimento máximo n.
- **TEXT:** Armazena texto longo, sem limite específico de tamanho.

**Numérico:**
- **INTEGER:** Armazena números inteiros.
- **NUMERIC(p, s):** Armazena números decimais com precisão p e escala s (pode ser usado para valores monetários).
- **FLOAT(n):** Armazena números de ponto flutuante com n dígitos de precisão.

**Data e Hora:**
- **DATE:** Armazena uma data (ano, mês, dia).
- **TIME:** Armazena um horário do dia (hora, minuto, segundo).
- **TIMESTAMP:** Armazena data e hora.

**Booleano:**
- **BOOLEAN:** Armazena valores verdadeiro (true) ou falso (false).

**Binário:**
- **BLOB:** Armazena dados binários, como imagens ou arquivos.

**Chave Primária e Chave Estrangeira:**
- **SERIAL:** Um tipo especial usado para criar chaves primárias autoincrementadas.
- **INTEGER ou BIGINT:** Usados para chaves primárias ou chaves estrangeiras, dependendo do tamanho necessário.

## Escolhendo o Tipo de Dado Adequado

A escolha do tipo de dado adequado é importante para economizar espaço de armazenamento e garantir a precisão dos cálculos. Por exemplo, armazenar números inteiros em vez de números de ponto flutuante quando não é necessário precisão decimal economiza espaço. Além disso, usar tipos de dados apropriados ajuda a evitar erros de conversão.

## Normalização de Dados e Tipos de Dados

Ao projetar um banco de dados, os tipos de dados desempenham um papel na normalização de dados, o processo de organizar os dados para eliminar redundâncias e manter a integridade referencial. Tipos de dados apropriados ajudam a definir as relações entre tabelas e a otimizar a estrutura do banco de dados.

## Conclusão

Os tipos de dados são essenciais para a definição da estrutura de um banco de dados. Eles determinam como os dados são armazenados, calculados e recuperados. Ao compreender os tipos de dados disponíveis e escolher os mais apropriados para sua aplicação, você estará dando os primeiros passos para criar um banco de dados eficiente e preciso.

