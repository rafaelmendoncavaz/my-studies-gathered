# 📘 Aula - Estados Globais: Bibliotecas de Estado Global

## Introdução

Durante nossa jornada no React aprendemos sobre prop drilling e exploramos soluções nativas (Composição e ContextAPI) para lidar com o problema, porém, ao explorarmos ambas as soluções percebemos algumas limitações e problemas.

- A composição pode ser aplicada em cenários bem específicos, e apenas reduz a passagens de props

- A Context API é eficiente para resolver o prop drilling, porém o uso não cuidadoso pode causar problemas de performance.

## Alternativas para lidar com estados globais

Por conta dessas limitações e problemas, existem uma grande lista de bibliotecas para lidar com estados globais disponíveis para React. Abaixo, segue a lista contendo algumas das mais utilizadas:

- **[Redux](https://redux.js.org/)** + **[Redux Toolkit](https://redux-toolkit.js.org/)**
- **[Recoil](https://recoiljs.org/)** 
- **[MobX](https://mobx.js.org/README.html)**
- **[Zustand](https://zustand-demo.pmnd.rs/)**
- **[Jotai](https://jotai.org/)**
#
Nessa próxima série de aulas exploraremos como exemplo de bibliotecas de estado global Zustand e Jotai, comprendendo o funcionamento e benefícios de cada uma delas.