# 📘 Aula - Estado - Formulários

## Introdução

Nesta aula aprenderemos como gerenciar formulários utilizando estados no React.

## Captura de valores

Uma das finalidades do gerenciamento de formulários com estados no React é a captura de valores para que os mesmos possam ser posteriormente utilizados na nossa lógica.

Para realizarmos a captura, será necessário a criação de um estado para cada campo. Por exemplo, se tivéssemos três campos (nome, email e password), precisaríamos de três estados:

```jsx
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
```

Com os estados devidamente criados, conseguiremos capturar o valor digitado pelo usuário relacionando a função de modificadora com o evento onChange de cada campo:

```jsx
<input type="text" onChange={(e) => setName(e.target.value)} />
```

Por meio de e (event), conseguimos extrair o target.value que consiste no valor atual do input a cada interação e armazená-lo em um estado passando o mesmo como parâmetro da função modificadora.

O mesmo procedimento também funciona em tags como select e textarea:

```jsx
<textarea onChange={(e) => setName(e.target.value)} />

<select onChange={(e) => setName(e.target.value)}></select>
```

__Uma breve nota sobre o select: é muito importante que o valor inicial do estado corresponda ao valor da primeira option disponível.__

```jsx
const [example, setExample] = useState("opcao1");
```

## Espelhamento

Mas do que capturarmos os valores que o usuário digita, um vínculo reatividade com cada campo pode ser um aliado poderoso no desenvolvimento de diversas funcionalidades, como: reset de campos, carregamento de valores iniciais e etc.

Por isso, além do evento onChange vincularemos a variável de estado aos campos, da seguinte forma:

```jsx
<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
```

## Exemplo de uma função de reset

```jsx
const submit = (e) => {
        e.preventDefault();
        setName("");
        setEmail("");
        setPassword("");
}
```

Com os estados devidamente vinculados, ao retornarmos os valores de estado para string vazias, os campos terão ser valores limpos respectivamente.

__No caso do select, devemos retornar o mesmo para o valor da primeira opção.__

```jsx
setExample("opcao1");
```

## Conclusão

Nesta aula aprendemos sobre o gerenciamento de formulários com estado. Coloque esse conceito em prática, tanto nas atividades quanto nas entregas para absorver ainda mais.
