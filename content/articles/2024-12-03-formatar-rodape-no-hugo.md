
---
title: "Formatar rodapé no framework Hugo"
date: "2024-12-03"
category: [articles]
tags: ["hugo", "css", "markdown", "citação", "rodapé", "footnote"]
---

Este site foi desenvolvido como o _framework_ Hugo[^1], um dos mais
populares geradores de sites estáticos, _open-source_, que conheço. O conteúdo das páginas são escritos em linguagem de marcação Markdown[^2]. Isso torna o processo de edição de conteúdo (e acréscimo de páginas) algo muito simples, trivial até.

Porém, um pequeno problema surgiu quando decidi formatar as notas de rodapé, como essa aqui[^3], usando uma fonte um pouco menor que a do texto principal. O Hugo cria o rodapé convertendo o _markdown_ num código HTML como o mostrado a seguir, onde a âncora para o link interno é identificada como ```id=fn:1, id=fn:2```, e assim por diante."


```html
<ol>
<li id="fn:1" role="doc-endnote">
        <p>Nota de rodapé em <a href="https://pt.wikipedia.org">https://pt.wikipedia.org</a>.
            <a href="#fnref:1" class="footnote-backref" role="doc-backlink"></a>
        </p>
    </li>
</ol>
```

Felizmente, a ferramenta adiciona também uma ```role="doc-endnote"```, que facilitou a minha vida. Dessa forma, o meu CSS pode ser algo como:

```css
ol>li[role="doc-endnote"] p { font-size: 0.9em !important; }
``` 
![Referência para o rodapé](../img/formatar-rodape-no-hugo-01.png)
Entretanto, havia outro porém. Devido o menu do site ser fixo, quando o link de acesso ao rodapé era clicado, ele rolava para o topo da tela, como deveria, mas ficava oculto, debaixo do menu. Seria necessário deslocar a margem superior de rolagem para compensar a altura do menu e, assim, evitar esse inconveniente.

Como já havia uma referência para o rodapé, que eu estava usando para formatar o parágrafo dentro dele, ficou fácil de resolver isso no CSS:

```css
ol>li[role="doc-endnote"] { scroll-margin-top: 70px; } 
```

![Referência para o rodapé](../img/formatar-rodape-no-hugo-02.png)
O problema se repetia, quando era clicado o link do rodapé para retornar ao corpo da página. Da mesma forma, a rolagem escondia o texto debaixo do menu. A solução, obviamente, seria aplicar a mesma compensação na margem superior de rolagem.

O novo problema que surgiu aqui foi: como identificar a âncora desse link no CSS? Pois, nesse ponto, o _markdown_ está sendo renderizado para HTML, pelo Hugo, com a _tag_ ```<sub>```, também usando IDs sequenciais, no formato: ```id="fnref:1", id="fnref:2"``` e assim, sucessivamente. Porém, a _role_ agora fica na _tag_ ```<a>```, que é filha de ```<sub>```.

A âncora que eu preciso acessar no CSS, para determinar a margem superior de rolagem, não tem um identificador único (são sequenciais) e não tem uma _class_ nem uma _role_ para referenciá-las de forma categorizada. 

```css
<sup id="fnref:1">
    <a href="#fn:1" class="footnote-ref" role="doc-noteref">1</a>
</sup>
```
No entanto, na _tag_ ```<a>``` existem uma _class_ e uma _role_ à minha disposição. Posso usar qualquer uma das duas para identificar essa filha e, por meio dela, identificar a _tag_ ```<sup>``` que eu preciso modificar no CSS. Usando a _pseudo-class_ ```has()``` posso selecionar a _tag_ ```<sup>``` apenas se ela tiver uma _tag_ ```<a>``` como filha e se a filha possuir o atributo (_class_ ou a _role_) especificado.

```css
sup:has(a[class="footnote-ref"]) {}
```

ou, alternativamente:

```css
sup:has(a[role="doc-noteref"]) {}
```

Portanto, o código CSS final, que atendeu à minha necessidade ficou assim:

```css
ol>li[role="doc-endnote"],
sup:has(a[class="footnote-ref"]) {
    scroll-margin-top: 70px;
}
```

Conheço o _framework_ Hugo há bastante tempo e já testei suas funcionalidades diversas vezes, mas esse é o primeiro projeto desenvolvido, de fato, com o uso dessa ferramenta. Pode ser que a situação descrita aqui não seja a forma como todos os temas do Hugo lidam com as referências cruzadas e as notas de rodapé. Se for sempre desse modo, talvez, então, seja uma situação conhecida e costumeiramente tratada por outros desenvolvedores. Contudo, vai que alguém está passando pelo mesmo problema! Por isso, compartilho aqui a solução adotada, esperando que seja útil.


[^1]: Hugo: https://gohugo.io/ 
[^2]: Markdown: https://commonmark.org/
[^3]: Nota de rodapé em https://pt.wikipedia.org/.