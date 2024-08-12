# 📘 Aula - O que é Typescript e suas Vantagens

## Introdução a Tipagem e TypeScript

O TypeScript é uma linguagem de programação desenvolvida pela Microsoft que é uma extensão do JavaScript. Ele foi projetado para ser uma linguagem de código aberto, oferecendo uma série de recursos adicionais que não estão presentes no JavaScript padrão. O TypeScript é conhecido como uma linguagem de "tipagem estática opcional", o que significa que você pode adicionar tipos aos seus códigos, mas não é obrigatório. Ele é amplamente usado para desenvolvimento web e pode ser usado tanto no lado do cliente (front-end) quanto no lado do servidor (back-end).

## Tipagem Estática e Dinâmica

A tipagem se refere à forma como as linguagens de programação lidam com os tipos de dados, ou seja, como determinam e tratam o tipo de valor que uma variável pode conter. Existem dois principais paradigmas de tipagem: estática e dinâmica.

## Tipagem Dinâmica

- Definição: Em uma linguagem de programação com tipagem dinâmica, o tipo de uma variável é determinado em tempo de execução, podendo ser alterado durante a execução do programa.

- Exemplo: Linguagens de programação dinâmicas incluem Python, JavaScript e Ruby. Por exemplo, em JavaScript, uma variável pode começar contendo um número e depois ser atribuído a uma string sem qualquer erro de compilação.

- Vantagens: Oferece flexibilidade, permitindo mudanças de tipos durante a execução, o que pode simplificar a escrita inicial de código.

- Desvantagens: Pode resultar em erros inesperados de tipo em tempo de execução, tornando depuração e manutenção mais desafiadoras.

## Tipagem Estática

- Definição: Em uma linguagem de programação com tipagem estática, o tipo de uma variável é determinado em tempo de compilação, e não pode ser alterado durante a execução do programa.

- Exemplo: Linguagens de programação estáticas incluem C, C++, Java e TypeScript. No TypeScript, por exemplo, você deve declarar o tipo de uma variável e, uma vez definido, não pode atribuir valores de tipos diferentes a essa variável.

- Vantagens: Oferece segurança adicional ao evitar erros de tipo em tempo de compilação, melhorando a robustez do código.

- Desvantagens: Pode parecer mais restritiva, exigindo declarações explícitas de tipos, o que pode aumentar a quantidade de código.

## TypeScript e suas vantagens

O TypeScript oferece várias vantagens significativas em relação ao JavaScript puro:

## Verificação de Tipos Estáticos

Uma das principais vantagens do TypeScript é a capacidade de definir tipos estáticos para variáveis, funções e objetos. Essa tipagem estática permite que o compilador do TypeScript detecte erros de tipo em tempo de compilação, ajudando a evitar muitos erros comuns durante o desenvolvimento.

## Melhor IDE Support

Devido à natureza tipada do TypeScript, os ambientes de desenvolvimento integrados (IDEs) podem fornecer suporte mais robusto para recursos como autocompletar, navegação de código, renomeação de variáveis e refatoração, tornando o desenvolvimento mais eficiente.

## Maior Escalabilidade

O uso de tipos estáticos e interfaces no TypeScript torna o código mais escalável e de fácil manutenção. À medida que os projetos crescem, é mais fácil entender a estrutura do código e trabalhar em equipe sem conflitos de tipos.

## Intellisense

O TypeScript fornece recursos de autocompletar, como Intellisense, que permitem que os desenvolvedores tenham acesso rápido à documentação e aos métodos disponíveis em um objeto, tornando a escrita do código mais rápida e precisa.

## Facilidade na Refatoração

Devido à tipagem estática, é mais fácil fazer grandes mudanças em seu código, pois o TypeScript pode detectar automaticamente as alterações necessárias em várias partes do projeto durante a refatoração.

## Suporte a Novos Recursos do ECMAScript

O TypeScript frequentemente acompanha as atualizações do ECMAScript (o padrão por trás do JavaScript) e fornece suporte para os recursos mais recentes antes que os navegadores possam implementá-los nativamente.

## Compatibilidade com Ecossistema JavaScript

O TypeScript é um superconjunto do JavaScript, o que significa que você pode utilizar bibliotecas e frameworks existentes do ecossistema JavaScript sem nenhum problema. Isso permite que você adote gradualmente o TypeScript em projetos existentes.

## Documentação e Legibilidade

A tipagem estática e o uso de interfaces no TypeScript tornam o código mais documentativo, facilitando a compreensão do código, mesmo para desenvolvedores que não o escreveram originalmente.

## Conclusão

O TypeScript é uma poderosa adição ao desenvolvimento web que oferece recursos avançados de tipagem estática e vantagens significativas em relação ao JavaScript padrão. Ao longo deste curso, exploraremos a fundo como aproveitar ao máximo o TypeScript, tornando-nos desenvolvedores mais eficientes e capazes de lidar com projetos complexos de maneira mais segura e organizada.

# 📘 Aula - Instalação e Configuração do Ambiente

## Introdução

Antes de começarmos a trabalhar com TypeScript, é essencial configurar corretamente o ambiente de desenvolvimento. Nesta aula, aprenderemos como instalar e configurar as ferramentas necessárias para começar a escrever código TypeScript em nosso computador.

## Node.js e npm

O TypeScript é construído em cima do Node.js, portanto, precisaremos instalá-lo em nosso sistema. O Node.js é uma plataforma que permite a execução de código JavaScript fora do navegador, permitindo-nos usar ferramentas de linha de comando para compilar e executar nosso código TypeScript.

## Criação de Projeto com TypeScript

Com o Node.js instalado, agora podemos iniciar o nosso projeto e instalar o TypeScript como dependência de desenvolvimento para podermos usar o compilador de TypeScript (tsc) em qualquer projeto.

### Inicialização do projeto

- Abra o Terminal:
  - Abra o terminal ou prompt de comando no diretório onde você deseja criar seu projeto.

- Inicie um Novo Projeto npm:
  - Execute o seguinte comando para iniciar um novo projeto npm. Isso criará um arquivo package.json que conterá informações sobre o seu projeto:

  ```sh
  npm init -y
  ```
  O parâmetro -y instrui o npm a aceitar todas as configurações padrão sem pedir confirmações.

  ### Instalação do TypeScript

- Execute o seguinte comando para instalar o TypeScript como uma dependência de desenvolvimento em seu projeto:

```sh
npm install -D typescript
```
O argumento -D indica que o TypeScript será instalado como uma dependência de desenvolvimento e será adicionado ao arquivo package.json sob a seção "devDependencies".

- Crie um arquivo chamado tsconfig.json na raiz do seu projeto para configurar o TypeScript. Você pode criar manualmente esse arquivo ou usar o comando abaixo para gerar um arquivo de configuração padrão:
```sh
npx tsc --init
```
Esse arquivo será usado para configurar o comportamento do compilador do TypeScript.
#
## Configuração do tsconfig.json

O arquivo tsconfig.json contém várias opções de configuração que permitem personalizar o comportamento do compilador. Neste momento, não precisamos alterar nenhuma opção, mas é importante entender algumas das opções comuns disponíveis no arquivo tsconfig.json:

- target: Especifica a versão do ECMAScript para a qual o código TypeScript será compilado (por exemplo, "ES5", "ES6").

- outDir: Diretório de saída onde os arquivos JavaScript compilados serão armazenados.

- rootDir: Diretório de origem onde os arquivos TypeScript estão localizados.

- strict: Opção que habilita várias verificações rigorosas no código TypeScript.

## Compilando e Executando o Código TypeScript

Agora que nosso projeto TypeScript está configurado, podemos começar a escrever nosso código.

### Compilando o Código

Para compilar nosso código TypeScript, abra o terminal e navegue até o diretório do projeto. Em seguida, execute o seguinte comando:
```sh
npx tsc
```
Isso instruirá o compilador TypeScript a procurar o arquivo tsconfig.json no diretório atual e compilar todos os arquivos TypeScript para JavaScript, conforme as configurações definidas.

## Executando o Código JavaScript

Depois que o código TypeScript for compilado com sucesso, você pode executá-lo normalmente usando o Node.js. Por exemplo:
```sh
node ./caminho/para/arquivo.js
```
## Conclusão

Nesta aula, configuramos corretamente nosso ambiente de desenvolvimento para trabalhar com TypeScript. Agora, estamos prontos para começar a escrever código TypeScript e aproveitar todas as vantagens que essa linguagem tem a oferecer. Nos próximos módulos, exploraremos mais recursos avançados do TypeScript e criaremos projetos práticos para consolidar nosso conhecimento.

# 📘 Aula - Arquivo tsconfig.json

## Arquivo tsconfig.json

Os arquivos tsconfig.json são arquivos de configuração usados pelo compilador TypeScript. Eles permitem que você defina opções de compilação, como o diretório de origem do seu código TypeScript, o diretório de saída do código compilado e as configurações de tipos de biblioteca.

Para pegarmos a configuração inicial do tsconfig.json executamos o seguinte comando no terminal:

```sh
npx tsc --init
```
Estaremos utilizando as seguintes configurações no arquivo tsconfig.json:
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "typeRoots": ["node_modules/@types"],
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "exactOptionalPropertyTypes": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```
- "compilerOptions" é um objeto que contém opções de configuração do compilador.

- "target" é a versão do JavaScript para qual o código TypeScript será compilado.

- "module" é o módulo que será usado para o código compilado.

- "typeRoots" é um array que contém os caminhos onde o compilador TypeScript deve procurar arquivos de tipos (.d.ts).

- "esModuleInterop" é uma opção que ativa ou desativa a sintaxe de importação e exportação padrão do JavaScript (ES6).

- "forceConsistentCasingInFileNames" o compilador irá garantir que os nomes de arquivos sempre estejam escritos da mesma forma, independentemente do sistema de arquivos usado.

- "strict" é uma opção que ativa ou desativa o modo estrito de tipagem.

- "exactOptionalPropertyTypes" especifica se os tipos de propriedades opcionais devem ser exatos.

- "skipLibCheck" o compilador irá pular a verificação de tipos em arquivos de biblioteca e evitar gerar erros desnecessários, permitindo que você importe e utilize esses arquivos sem problemas.

- "include" é um array de caminhos de arquivos que devem ser incluídos na compilação.

- "exclude" é um array de caminhos de arquivos que devem ser excluídos da compilação.
#
Os arquivos tsconfig.json são usados pelo comando tsc (TypeScript Compiler) para saber como compilar o seu código. Ele procura por um arquivo tsconfig.json no diretório atual e em sua árvore de diretórios acima. Se você precisar especificar uma configuração diferente, pode passar o caminho para um arquivo tsconfig.json personalizado como argumento para o comando tsc.

# 📘 Aula - Biblioteca ts-node-dev

## Ts-node-dev

⁠O ts-node-dev é um utilitário que permite executar arquivos TypeScript diretamente sem precisar compilá-los primeiro. Ele também possibilita recarregar automaticamente o código quando houver alterações, o que pode ser muito útil durante o desenvolvimento, pois permite testar rapidamente mudanças no código sem precisar parar e iniciar o aplicativo manualmente.

Para utilizarmos ele, precisamos instalá-lo na aplicação como dependência de desenvolvimento:
```sh
npm install -D ts-node-dev
```
Com ele instalado, conseguimos executar arquivos .ts, se tornando possível executar aplicações Express utilizando o TypeScript.
#
### Script de run dev

Para facilitar a execução do nosso projeto, podemos inserir nos scripts de package.json a seguinte instrução:
```json
// package.json
"scripts": {
  "dev": "tsnd arquivoprincipal.ts"
}
```
⁠Algumas opções do ts-node-dev (ou tsnd):
- --ignore-watch - (default: []) - arquivos e pastas que serão ignorados pelo node-dev. Irá sempre buscar por caminhos absolutos, ou seja, partindo da raiz do projeto.

- --clear (--cls) - Irá limpar o terminal toda vez que o servidor for reiniciado.

- --respawn - Irá reiniciar o servidor automaticamente a cada alteração realizado no código.

- --rs - Possibilita reiniciar a aplicação escrevendo rs no terminal.

# 📘 Aula - Enum

## Introdução

Nesta aula, estaremos aprendendo sobre um tipo dado específico do Typescript, o enum.

## enum

O tipo enum é usado para representar um conjunto de valores nomeados. Por exemplo, podemos criar um enum para representar usuários de um sistema:
```ts
enum UserRoles{
    USER = "user",
    EDITOR = "editor",
    ADMIN = "admin"
}

const userType = UserRoles.USER;
```
Diferente dos demais recursos do Typescript, que tem finalidade somente de descrição, o enum instância os valores de fato, produzindo como saída um formato muito semelhante ao de um objeto.

## Conclusão

Nesta aula, aprendemos sobre o enum. Agora, com este conhecimento, podemos agrupar valores comuns de forma mais organizada.

# 📘 Aula - Notações de Tipos

## Introdução

Em TypeScript, podemos adicionar notações de tipos para especificar explicitamente o tipo de dados que uma variável deve armazenar ou que uma função deve receber e retornar. Nesta aula, aprenderemos como utilizar notações de tipos para tornar nosso código mais claro e seguro.

## Notações de Tipos em Variáveis

Ao declarar uma variável, podemos adicionar uma notação de tipo para especificar o tipo de dado que a variável deve conter. Isso ajuda a evitar erros de tipo e permite que o TypeScript faça a verificação estática do código.

### Exemplo de Notação de Tipo em Variáveis
```ts
// Notação de tipo para uma variável
let age: number;
age = 25; // OK

// Tentativa de atribuir valor de tipo diferente resultará em erro
age = "vinte e cinco"; // Erro de tipo: Type '"vinte e cinco"' is not assignable to type 'number'
```
## Notações de Tipos em Funções

As notações de tipos também são usadas em funções para especificar o tipo dos parâmetros que a função recebe e o tipo do valor que ela retorna.

### Exemplo de Notação de Tipo em Funções
```ts
// Função que recebe dois números e retorna a soma
const addNumbers = (num1: number, num2: number): number => num1 + num2;

// Uso da função com notações de tipo
const result: number = addNumbers(5, 10); // result = 15

// Tentativa de chamar a função com parâmetros de tipo errado resultará em erro
const invalidResult: number = addNumbers(5, "10"); // Erro de tipo: Argument of type '"10"' is not assignable to parameter of type 'number'
```
## Tipo

Quando uma função não retorna um valor, podemos utilizar o tipo void na notação de tipo para indicar que ela não tem um valor de retorno.

### Exemplo de Função com Tipo void
```ts
// Função que apenas imprime uma mensagem no console, sem retorno
const showMessage = (message: string): void => console.log(message);

// Uso da função sem esperar retorno
showMessage("Olá, TypeScript!"); // Imprime "Olá, TypeScript!"
```
## Conclusão

As notações de tipos em TypeScript nos permitem especificar explicitamente os tipos de dados para variáveis e parâmetros de função, proporcionando maior clareza e segurança em nosso código. Com essas notações, o TypeScript pode realizar a verificação estática de tipo e ajudar a evitar erros comuns durante o desenvolvimento.

# 📘 Aula - 'Type' para Tipos Personalizados

## Introdução

Além de criar tipos personalizados usando interfaces em TypeScript, podemos utilizar a palavra reservada type para criar tipos personalizados. Nesta aula, aprenderemos sobre type e como usá-lo para definir tipos complexos e compostos.

## O que é type em TypeScript?

A palavra reservada **type** é usada para criar um tipo personalizado que pode ser composto de outros tipos existentes em TypeScript. Isso nos permite criar tipos mais complexos e expressivos sem a necessidade de criar uma interface.

## Criando um Tipo com type

Para criar um tipo com type, usamos a palavra reservada type seguida do nome do tipo e a definição do mesmo. Podemos usar type para definir tipos primitivos, tipos de objetos, tipos de união, tipos literais, entre outros:
```ts
// Definição de um tipo primitivo
type Age = number;

// Definição de um tipo de objeto
type Person = {
  name: string;
  age: Age;
};

// Definição de um tipo de união
type Result = number | string;

// Definição de um tipo literal
type Status = "pending" | "completed";
```
## Utilizando Tipos com type

Assim como as interfaces, os tipos criados com type podem ser usados para definir variáveis, parâmetros de função e até mesmo outros tipos:
```ts
type Age = number;

const age: Age = 30;

type Person = {
  name: string;
  age: Age;
};

const person: Person = {
  name: "Alice",
  age: 30,
};

type MathOperation = (x: number, y: number) => number;

const add: MathOperation = (a, b) => a + b;

type Status = "pending" | "completed";

const updateStatus = (status: Status) => {
  // implementação da função
}
```
## Interfaces vs type

Ambas as interfaces e type podem ser usadas para criar tipos personalizados em TypeScript. A escolha entre uma interface e type depende das necessidades do projeto e do estilo de codificação preferido, mas segue uma dica:
- Use interfaces quando precisar definir a estrutura de um objeto ou classe, ou quando quiser estender outras interfaces.

- Use type quando quiser criar tipos de união, tipos literais, tipos primitivos ou tipos complexos e compostos.

## Conclusão

Nesta aula, aprendemos sobre a palavra reservada type em TypeScript, que nos permite criar tipos personalizados mais complexos e compostos. Com type, podemos definir tipos primitivos, tipos de objetos, tipos de união, tipos literais e muito mais. Combinando o uso de interfaces e type, podemos criar uma tipagem mais completa e expressiva para nossos programas.

# 📘 Aula - Omit, Pick e Partial

## Introdução

Nesta aula, exploraremos três tipos genéricos essenciais no TypeScript: Omit, Pick e Partial. Esses tipos genéricos são valiosos quando você deseja manipular tipos de forma precisa e modular, especialmente ao criar tipos derivados a partir de tipos existentes. Vamos compreender cada um deles em detalhes:

## Omit

O tipo Omit possibilita criar um novo tipo excluindo propriedades específicas de um tipo existente. A sintaxe geral é a seguinte:
```ts
type NovoTipo = Omit<TipoExistente, 'PropriedadeExcluída'>;

// exemplo

interface Person {
  name: string;
  age: number;
  email: string;
}

type PersonWithoutEmail = Omit<Person, 'email'>;

// Agora, PersonWithoutEmail será do tipo:
{
  name: string;
  age: number;
}
```
O Omit é útil quando você deseja criar um novo tipo com base em um tipo existente, mas sem incluir algumas propriedades específicas.

## Pick

O tipo Pick permite criar um novo tipo incluindo apenas as propriedades específicas de um tipo existente. A sintaxe geral é a seguinte:
```ts
type NovoTipo = Pick<TipoExistente, 'PropriedadeIncluída'>;

// exemplo

interface Vehicle {
  brand: string;
  model: string;
  year: number;
}

type Car = Pick<Vehicle, 'brand' | 'model'>;

// Agora, Car será do tipo:
{
  brand: string;
  model: string;
}
```
O Pick é útil quando você deseja criar um novo tipo com base em um tipo existente, incluindo apenas algumas propriedades específicas.

##  Partial

O tipo Partial permite criar um novo tipo tornando todas as propriedades de um tipo existente opcionais, ou seja, você pode definir ou não essas propriedades em uma instância do tipo. A sintaxe é a seguinte:
```ts
type NovoTipo = Partial<TipoExistente>;

// exemplo

interface Task {
  title: string;
  description: string;
  done: boolean;
}

type OptionalTask = Partial<Task>;

// Agora, TarefaOpcional será do tipo:
{
  title?: string;
  description?: string; 
  done?: boolean;
}
```
O Partial é útil quando você deseja criar um novo tipo com base em um tipo existente, permitindo que todas as suas propriedades sejam opcionais, facilitando o trabalho com objetos parcialmente preenchidos.

## Conclusão

Nesta aula, exploramos três poderosas ferramentas de tipagem: os tipos genéricos Omit, Pick e Partial. Percebemos como esses tipos podem ser usados para criar tipos derivados com precisão a partir de tipos existentes. Aplique esse conhecimento em suas entregas e projetos com TypeScript para tornar seu código mais robusto e modular. Bons estudos!

# 📘 Aula - Extends

## Introdução

Nesta aula, abordaremos o uso do recurso de herança para estabelecer relações entre tipos e interfaces em TypeScript.

## Sobre

Em TypeScript, a palavra-chave extends é utilizada para criar heranças entre tipos ou interfaces. Tanto em tipos quanto em interfaces, o extends permite a criação de novos tipos ou interfaces que herdam propriedades de um tipo ou interface preexistente. Abordaremos como isso funciona em ambas as situações:

## Herança de Tipos com extends

No TypeScript, é possível criar um novo tipo estendendo as propriedades de um ou mais tipos existentes. Esse recurso é útil quando se deseja criar tipos mais complexos a partir de tipos mais simples. A sintaxe geral é a seguinte:
```ts
type NovoTipo = TipoExistente1 & TipoExistente2 & ...;

// exemplo

type Person = {
  name: string;
  age: number;
};

type Employee = {
  position: string;
  salary: number;
};

type PersonWithPosition = Person & Employee;

const person: PersonWithPosition = {
  name: "John",
  age: 30,
  position: "Developer",
  salary: 50000,
};
```
Nesse exemplo, PersonWithPosition é um novo tipo que estende as propriedades de Person e Employee.
## Herança de Interfaces com extends

Em TypeScript, também é possível estender interfaces usando a palavra-chave "extends". Isso permite criar interfaces mais específicas ou especializadas que herdam as propriedades de outras interfaces. A sintaxe é a seguinte:
```ts
interface InterfaceExistente {
  propriedade1: tipo1;
  propriedade2: tipo2;
}

interface NovaInterface extends InterfaceExistente {
  propriedade3: tipo3;
}

// exemplo

interface Animal {
  name: string;
  type: string;
}

interface Bird extends Animal {
  wings: number;
}

const woodpecker: Bird = {
  name: "Woodpecker",
  type: "Bird",
  wings: 2,
};
```
Nesse exemplo, a interface "Bird" estende a interface "Animal", herdando suas propriedades (name e type) e adicionando uma nova propriedade (wings).
#
Ambos os usos do "extends" em tipos e interfaces são ferramentas poderosas para criar tipos mais complexos e interfaces mais especializadas. Eles permitem a reutilização de código e a definição de estruturas de dados mais flexíveis e robustas em programas TypeScript.

## Conclusão

Nesta aula, exploramos o uso da palavra-chave "extends" tanto em tipos instanciados quanto em interfaces. Utilize esse recurso para tornar a escrita de projetos em TypeScript mais produtiva. Continuem estudando!