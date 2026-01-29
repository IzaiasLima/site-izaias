---
title: "Ajuda com o Markdown"
category: ["help"]
draft: true
toc: true
---

# {#top}

## Cabeçalhos

De h1 (#) a h6 (######)

## Detalhes

### O que é?

É um padrão HTML que não é suportado nativamente pelo markdown, mas pode ser implementado assim:
{{< details summary="Mostrar detalhes" >}}
Aqui fica o texto a ser detalhado.
{{< /details >}}

## Parágrafos

Um parágrafo: Proident fugiat tempor deserunt reprehenderit fugiat tempor deserunt reprehenderit fugiat tempor deserunt reprehenderit ullamco id dolore laborum.

Outro parágrafo: Incididunt commodo nisi velit est est elit et dolore elit exercitation. Enim aliquip magna id ipsum aliquip consectetur ad nulla quis. Incididunt pariatur dolor consectetur cillum enim velit cupidatat laborum quis ex.

## Citações

Este é um parágrafo normal: Sint ex Lorem mollit laborum dolor amet est ut esse aute.

> Isto é uma citação.
> 
> Com dois parágrafos.

[[Top]](#top)

## Listas

### Ordenadas

1. Longan
2. Lychee
3. Excepteur ad cupidatat do elit laborum amet cillum reprehenderit consequat officia esse aliquip consectetur.
   Dorum commodo aliquip aliquip velit pariatur dolore.
4. Melon
   - Cantaloupe
   - Honeydew
5. Mulberry

### Desordenadas

- Olive
- Orange
  - Blood orange
  - Clementine
- Papaya

[[Top]](#top)

## Separador horizontal

***

Este acima, ou este abaixo, tanto faz.

---

Mas se ficar colado no texto de cima transforma o texto em um cabeçalho.
---

## Tabela

| Heading           | Center align | Right align       |
|:----------------- |:------------:| -----------------:|
| Linha 1, coluna 1 | Lin 1, col 2 | Linha 1, coluna 3 |
| Linha 2, coluna 1 | Lin 2, col 2 | Linha 2, coluna 3 |
| Item 2            | Item 3       | Item 4            |

[[Top]](#top)

## Códigos

### Inline code

Duis duis est `code in text` velit velit aute labore deserunt.

### Highlighted

Disponível em várias linguagens de programação.

Golang:

```go
package main

import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hi there, I love %s!", r.URL.Path[1:])
}

func main() {
    http.HandleFunc("/", handler)
    http.ListenAndServe(":8080", nil)
}
```

Python

```python
def func():
    a = 5

    for i in range(5):
        print(i)
```

[[Top]](#top)

## Elementos inline

Texto **negrito**, texto *italico*, texto _italico **negrito** italico_ e normal.

{{< figure 
    src="https://picsum.photos/480/130"
    alt="imagem aleatória"
    caption="Use _tag_ ```<figure>``` para combinar com textos que tenham formatação, como **negrito**, _sublinhados_ e _tags_ ```<code>```, por exemplo. Pois, caso contrário, usando a sintaxe básica do _markdown_ de exibição de imagens, o leiaute vai ficar quebrado, no template CSS que estamos usando.">}} 

![Conteúdo da tag ALT](https://picsum.photos/480/120)
Exemplo de inserção de imagem usando formato markdown. Como este é um texto corrido normal, não tem problema a combinação de texto e imagem. O texto vai ficar lado-a-lado nas telas mais largas ou embaixo, nas telas pequenas.

![Conteúdo da tag ALT](https://picsum.photos/480/300)
Exemplo de inserção de imagem usando formato markdown com um texto _formatado_ vai quebrar o leiaute, casando **problema**. Essa combinação de texto e imagem não funciona para o template CSS que estamos usando.

[![Manny Pacquiao](https://img.youtube.com/vi/Yn-cvrmWO00/0.jpg)](https://youtu.be/Yn-cvrmWO00)

Exemplo de link de vídeo do Youtube.