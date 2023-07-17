# English Documentation
[EN](https://github.com/viniciussnitram/advice-generator-app/blob/main/README.md)

# Frontend Mentor - Solução do Gerador de Conselhos

Essa é uma solução para o [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor Challenges te ajuda a melhorar suas "coding skills" construindo projetos realistas.

## Tabela de conteúdos

- [Overview](#overview)
  - [O desafio](#o-desafio)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Construido com](#construido-com)
  - [O que eu aprendi](#o-que-eu-aprendi)
  - [Desenvolvimento Continuo](#desenvolvimento-continuo)
- [Autor](#autor)
- [Agradecimentos](#agradecimentos)

## Overview

### O desafio

Os usuários deverão ser capazes de:

- ✅ Visualizar o layout ideal para o aplicativo, dependendo do tamanho da tela do dispositivo (responsividade);
- ✅ Visualizar os estados de foco para todos os elementos interativos na página;
- ✅ Gerar um novo conselho ao clicar no ícone do dado;
- ✅ Copiar o conselho para o clipboard (isso é um desafio a mais, achei interessante adicionar).

### Screenshot

![Screenshot da Solução](./images/advice-generator-app-example.jpg)

### Links

- Solução no Frontend Mentor: [Solução Frontend Mentor](https://www.frontendmentor.io/solutions/advice-generator-app-using-html5-css3-js-flexbox-axios-SVdhLnAQxT)
- Site da Solução: [Github Pages](https://viniciussnitram.github.io/advice-generator-app/)

## Meu processo

### Construido com

- HTML5
- CSS
- Flexbox
- Mobile-first
- [Axios](https://axios-http.com/ptbr/) - Biblioteca JS baseada em promessas (promises)
- [Advice Slip JSON API](https://api.adviceslip.com/) - API de conselhos

### O que eu aprendi

Aprendi a realizar requisição de API com Axios.

```js
    const url = 'https://api.adviceslip.com/advice';

    async function showAdvice() {
        const response = await axios.get(url);
        id.textContent = response.data.slip.id;
        advice.textContent = `\u{201C}${response.data.slip.advice}\u{201D}`;
    }
```

### Desenvolvimento continuo

Desejo continuar desenvolvendo meus conhecimentos sobre API e os próximos desafios serão feitos em ReactJS.

## Autor

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/ViniciusAlba)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

## Agradecimentos

- Agradecimento a He4rt Developers, uma comunidade incrível [He4rt Developers](https://heartdevs.com/);
- Agradecimento ao Iuri Code por proporcionar o eBook "eFront", com vários conteúdos de Frontend [Iuri Code](https://iuricode.com/efront/);
- Agradecimento ao FreeCodeCamp [FreeCodeCamp](https://www.freecodecamp.org/);
- Agradecimento ao MDN [MDN Web Docs](https://developer.mozilla.org/en-US/).