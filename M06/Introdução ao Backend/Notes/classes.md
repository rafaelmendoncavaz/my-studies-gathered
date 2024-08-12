# Aula - Classes: Introdução

## Introdução

Nesta aula, vamos dar um mergulho mais profundo em TypeScript e aprender como declarar e utilizar classes, sendo a base da Programação Orientada a Objetos (POO). As classes nos permitem criar objetos com propriedades e comportamentos específicos, o que é essencial para a aplicação dos conceitos aprendidos anteriormente.

## O que são classes?

Em TypeScript, da mesma forma que em outras linguagens de programação orientadas a objetos, as classes servem como uma maneira de criar modelos que representam entidades do mundo real ou conceitos abstratos. Elas atuam como uma espécie de "modelo-base" a partir do qual podemos instanciar objetos com atributos e funcionalidades específicos.

## Declarando uma classe

Para declararmos uma classe, basta seguir o modelo sintático abaixo:
```ts
class Person {

}
```
Numa classe, podemos encapsular variáveis e métodos.
### Variáveis

Declaremos variáveis dessa forma no interior da classe, veja que diferentemente da abordagem convencional, variáveis não são prefixas com let, const ou var.
```ts
class Person {
    // Declaração de variável
    name: string = "Alex";
}
```
### Métodos

Para declarar métodos dentro de uma classe, você deve seguir uma sintaxe específica. Observe no exemplo a seguir exposto que, assim como nas variáveis, não há o prefixo function nos métodos.
```ts
class Person {
    name: string = "Alex";

    // Declaração de método
    sayHello(message: string) {
        console.log(message);
    }
}
```
### Instanciando uma classe

Conforme mencionado anteriormente, uma classe é, essencialmente, um "modelo-base" para um objeto. Portanto, para tornar uma classe concreta como um objeto e ser capaz de interagir com suas variáveis e métodos, é necessário criar uma instância.
```ts
const person = new Person();
console.log(person.name);
person.sayHello("Olá pessoal, me chamo Alex!");
```
_Podemos instanciar uma classe múltiplas vezes, e cada instância será individual e independente. Cada instância de uma classe representará um objeto separado com seu próprio estado e comportamento._
## Conclusão

Nesta aula, aprendemos o essencial sobre classes. Continuaremos a explorar mais sobre classes e programação orientada a objetos nas próximas aulas. Bons estudos!

# 📘 Aula - Classes: Constructor

## Introdução

Nesta aula, aprenderemos sobre o método construtor, que desempenha um papel crucial na definição do comportamento das instâncias de uma classe.

## O que é?

Um método construtor de classe, comumente chamado de "construtor", é um método especial em uma classe de programação que é automaticamente acionado quando um objeto dessa classe é criado. Sua principal finalidade é inicializar os atributos (variáveis de instância) do objeto e executar outras configurações iniciais necessárias. É importante notar que, por meio do construtor, estamos criando uma mecânica para passagem de parâmetros para nossas classes. Veja o exemplo abaixo:
```ts
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
```
Declaramos o método construtor dessa forma e, neste exemplo, criamos um parâmetro name para associar à variável name no interior da classe.
## this

A palavra-chave "this" permite referenciar a própria classe no interior dos métodos, proporcionando acesso tanto aos métodos quanto às variáveis. Veja o exemplo abaixo:
```ts
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  saySomething(message: string) {
    console.log(message);
  }

  sayMyName() {
    console.log(`Me chamo ${this.name}`);
  }
}
```
Observe que, além de ser utilizado para referenciar a variável no método construtor, "this" também foi utilizado em console.log(`Me chamo ${this.name}`);. Com esse recurso, podemos relacionar variáveis e métodos de forma flexível.
## Conclusão

Nesta aula, aprendemos sobre o método construtor e sobre o uso da palavra-chave "this". Na próxima aula, continuaremos a explorar ainda mais o conceito de classes e programação orientada a objetos (POO). Para aprofundar seus conhecimentos, coloque em prática o que aprendeu nas atividades. Bom estudo!

# 📘 Aula - Classes: Static

## Introdução

Nesta aula, abordaremos um recurso que permite criar variáveis e métodos no interior das classes sem a necessidade de instâncias. Esse recurso é conhecido como static.

## O que é?

No TypeScript, a palavra-chave "static" é usada em classes para criar membros (variáveis e métodos) que pertencem à classe como um todo, em vez de pertencerem a instâncias individuais da classe. Isso significa que é possível acessar membros estáticos diretamente na classe, sem a obrigação de criar uma instância da mesma. Veja o exemplo a seguir:
```ts
export class ProductList {
  static productList: string[] = [];

  static addProduct(product: string) {
    this.productList.push(product);
  }

  static getProducts() {
    console.log(this.productList);
  }
}
```
Ao prefixar uma variável ou método com "static", é possível fazer referência a eles da seguinte maneira (sem criar instâncias):
```ts
ProductList.addProduct("Computador");
ProductList.getProducts();
```
**Vale ressaltar que as variáveis, ao contrário do modelo de instâncias, terão o mesmo valor, independentemente de onde forem referenciadas.**

## Conclusão

Nesta aula, exploramos a palavra-chave "static". À medida que avançamos no curso, desenvolveremos um entendimento mais preciso sobre quando devemos ou não criar recursos estáticos em nossas classes. Continue estudando com dedicação!

# 📘 Aula - Classes: Herança

## Introdução

Nesta aula, exploraremos um conceito poderoso da Programação Orientada a Objetos (POO) chamado "Herança". A herança permite que uma classe (subclasse) herde atributos e métodos de outra classe (superclasse). Essa abordagem promove a reutilização de código e a criação de hierarquias de classes, tornando o código mais organizado e fácil de manter.

## O que é?

A herança é um conceito fundamental da POO em que uma classe pode herdar atributos e métodos de outra classe. A classe que herda é chamada de subclasse ou classe filha, enquanto a classe que é herdada é chamada de superclasse ou classe pai.
Veja o exemplo abaixo:
```ts
class Superclasse {
  // Atributos e métodos da superclasse
}

class Subclasse extends Superclasse {
  // Atributos e métodos adicionais da subclasse
}
```
No exemplo da vídeoaula, relacionamos as classes Person e Student da seguinte forma:
```ts
export class Student extends Person {}
```
**Com isso, todas as variáveis e métodos presentes em Person foram compartilhados com a classe Student.**

## Super

Se a subclasse tiver um construtor, é necessário chamar o construtor da superclasse usando a palavra-chave **super()** antes de inicializar seus próprios atributos. Confira o exemplo abaixo:
```ts
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  saySomething(message: string) {
    console.log(message);
  }

  sayMyName() {
    console.log(`Me chamo ${this.name}`);
  }
}
//
export class Student extends Person {
  module: string;

  constructor(name: string, module: string) {
    // super "importando" o name do constructor em Person
    super(name);
    this.module = module;
  }

  sayMyModule() {
    console.log(`Estou matriculado no módulo: ${this.module}`);
  }
}
```
Neste caso, foi repassado o parâmetro para a superclasse, executando "super" e fornecendo "name" como parâmetro.

## Conclusão

Nesta aula, aprendemos como relacionar duas classes por meio do recurso de herança e como repassar valores para a classe pai usando a palavra-chave "super". Continuaremos a evoluir nossos conhecimentos em POO e classes na próxima aula. Bons estudos!

# 📘 Aula - Classes: Polimorfismo

## Introdução

Nesta aula, exploraremos um dos conceitos mais poderosos da Programação Orientada a Objetos (POO): o Polimorfismo. O Polimorfismo é a capacidade de um objeto se comportar de diferentes maneiras, permitindo que métodos com o mesmo nome tenham implementações diferentes em classes distintas. Essa flexibilidade é fundamental para criar códigos mais genéricos e reutilizáveis.

## O que é?

O Polimorfismo é um conceito central da POO que nos permite tratar objetos de diferentes classes de maneira uniforme, como se fossem objetos da mesma classe. Isso significa que podemos chamar métodos com o mesmo nome em objetos de classes diferentes, e cada objeto executará sua própria implementação específica do método.

## Polimorfismo de Sobrescrita

Um tipo de polimorfismo ocorre quando uma subclasse fornece uma implementação específica para um método que já está presente na superclasse. Isso possibilita que o mesmo método seja chamado, mas com comportamentos diferentes, dependendo do objeto em questão. Veja o exemplo abaixo:
```ts
export class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayMyName() {
    console.log(`Me chamo ${this.name}`);
  }
}

// Polimorfismo

export class Teacher extends Person {
  sayMyName() {
    console.log(`Sou o professor ${this.name}`);
  }
}
```
## Polimorfismo de Sobrecarga

Outro tipo de polimorfismo ocorre quando uma classe possui vários métodos com o mesmo nome, mas com diferentes tipos ou números de parâmetros. Isso é chamado de sobrecarga de métodos e permite que a classe responda a diferentes tipos de chamadas para o mesmo método. É importante observar que, no TypeScript, novos parâmetros devem ser fornecidos apenas pelo método construtor.

## Vantagens do Polimorfismo

- Flexibilidade: O polimorfismo nos permite escrever códigos mais genéricos e flexíveis, pois podemos tratar objetos de diferentes classes como se fossem objetos da mesma classe.

- Reutilização de Código: Com a sobrescrita de métodos, podemos reutilizar códigos em diferentes classes, o que promove a economia de tempo e a redução de duplicação de código.

## Conclusão

Nesta aula, aprendemos mais sobre o polimorfismo. Continuaremos a explorar os conceitos de Programação Orientada a Objetos, classes e TypeScript na próxima aula. Bons estudos!

# 📘 Aula - Classes: Níveis de Acesso

## Introdução

Nesta aula, vamos explorar um recurso importante da Programação Orientada a Objetos (POO): os níveis de acesso de métodos e variáveis dentro de uma classe.

## Níveis de acesso

Os níveis de acesso são utilizados para determinar como uma variável ou método específico será compartilhado com outras classes ou disponibilizado dentro da instância da classe.

## Protected

O nível de acesso protected restringe o acesso ao recurso somente à instância da classe e permite seu compartilhamento por meio de herança.

Exemplo de código:
```ts
class Classe {
  protected variavel: string;
  ⁠
  protected metodo() {
    /* ... */
  }
}
```
## Private

O nível de acesso private restringe tanto o acesso à instância da classe quanto o compartilhamento por herança.

Exemplo de código:
```ts
class Classe {
  private variavel: string;
  ⁠
  private metodo() {
    /* ... */
  }
}
```
## Public

O nível de acesso public é o **padrão** para variáveis e métodos, permitindo que o recurso esteja presente na instância da classe e seja compartilhado por herança. Pode ser declarado implicitamente ou explicitamente como prefixo.

Exemplos de código:
```ts
class Classe {

  // implicito
  variavel: string;
  metodo() {
    /* ... */
  }

  // explicito
  public variavel: string;
  ⁠
  public metodo() {
    /* ... */
  }
}
```
## Conclusão

Nesta aula, aprendemos como gerenciar os níveis de acesso de variáveis e métodos em nossas classes. Continuaremos a explorar a Programação Orientada a Objetos (POO) nas próximas aulas, aprofundando ainda mais nossos conhecimentos. Bons estudos!

# 📘 Aula - Implementação de Interfaces em Classes

## Introdução

Nesta aula, vamos aprofundar o conhecimento sobre interfaces e aprender como implementá-las em classes do TypeScript. A implementação de interfaces em classes permite garantir que as classes sigam um determinado contrato definido pela interface, ou seja, que todas as propriedades e métodos especificados na interface estejam presentes na classe.

## Implementação de Interfaces em Classes

Para implementar uma interface em uma classe, utilizamos a palavra-chave implements seguida pelo nome da interface. A classe deve conter todas as propriedades e métodos definidos na interface.
Exemplo:
```ts
interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Au au!");
  }
}
```
## Verificação de Implementação

Ao implementar uma interface em uma classe, o TypeScript realiza uma verificação para garantir que a classe contenha todos os membros exigidos pela interface. Se algum membro estiver faltando ou não estiver corretamente implementado, o TypeScript emitirá um erro:
```ts
interface Person {
  name: string;
  age: number;
}

class Client implements Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  // Error! The Client class did not implement the "age" property defined in the Person interface.
}
```

## Implementação de Múltiplas Interfaces

Uma classe pode implementar várias interfaces. Para fazer isso, basta separar os nomes das interfaces com vírgulas:
```ts
interface Animal {
  emitSound(): void;
}

interface LivingBeing {
  breathe(): void;
}

class Dog implements Animal, LivingBeing {
  emitSound(): void {
    console.log("Au au!");
  }

  breathe(): void {
    console.log("Respirando...");
  }
}
```

## Herança e Implementação de Interfaces

Uma classe pode herdar de uma superclasse e, ao mesmo tempo, implementar interfaces. Nesse caso, primeiro usamos a palavra-chave extends para indicar a superclasse e, em seguida, a palavra-chave implements para as interfaces.
```ts
class Animal {
  name: string;
  makeSound(): void {
    console.log("Barulho genérico.");
  }
}

interface Flyable {
  fly(): void;
}

class Bird extends Animal implements Flyable {
  fly(): void {
    console.log("Voando...");
  }
}
```
## Utilizando Polimorfismo com Interfaces

Interfaces também podem ser usadas para alcançar polimorfismo, onde objetos de diferentes classes podem ser tratados de forma uniforme, desde que implementem a mesma interface.
```ts
interface Shape {
  calculateArea(): number;
}

class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Square implements Shape {
  side: number;

  constructor(side: number) {
    this.side = side;
  }

  calculateArea(): number {
    return this.side * this.side;
  }
}
```
## Conclusão

Nesta aula, aprendemos sobre a implementação de interfaces em classes do TypeScript. A implementação de interfaces permite que as classes sigam um contrato específico, garantindo que todas as propriedades e métodos definidos na interface estejam presentes na classe. Isso ajuda a organizar e tipar melhor o código, tornando-o mais seguro e confiável. As classes também podem implementar várias interfaces e, ao mesmo tempo, herdar de uma superclasse. 

