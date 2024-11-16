---
title: "Ajuda com o Markdown"
category: ["help"]
draft: true
---

# {#top}

## Lista de Tópicos
- [Paragraphs](#Paragraphs)
- [Blockquotes](#Blockquotes)
- [Lists](#Lists)
- [Horizontal rule](#Horizontal)
- [Table](#Table)
- [Code](#Code)
- [Inline elements](#Inline)

***

# Cabeçalhos {#Headings}

# Heading one

## Heading two

### Heading three ... six

# Detalhes
### O que é?
É um padrão HTML que não é suportado nativamente pelo markdown, mas pode ser implementado assim:
{{< details summary="Mostrar detalhes" >}}
Aqui fica o texto a ser detalhado.
{{< /details >}}


# Paágrafos {#Paragraphs}

Um parágrafo: Proident fugiat tempor deserunt reprehenderit fugiat tempor deserunt reprehenderit fugiat tempor deserunt reprehenderit ullamco id dolore laborum.

Outro parágrafo: Incididunt commodo nisi velit est est elit et dolore elit exercitation. Enim aliquip magna id ipsum aliquip consectetur ad nulla quis. Incididunt pariatur dolor consectetur cillum enim velit cupidatat laborum quis ex.



# Citações {#Blockquotes}

Este é um parágrafo normal: Sint ex Lorem mollit laborum dolor amet est ut esse aute.

> Isto é uma citação.

[[Top]](#top)

# Listas {#Lists}

### Ordenada

1. Longan
2. Lychee
3. Excepteur ad cupidatat do elit laborum amet cillum reprehenderit consequat officia esse aliquip consectetur.
   Dorum commodo aliquip aliquip velit pariatur dolore.
4. Melon
   - Cantaloupe
   - Honeydew
5. Mulberry

### Desordenada

- Olive
- Orange
  - Blood orange
  - Clementine
- Papaya

[[Top]](#top)

# Separador horizontal {#Horizontal}

***
Este acima, ou este abaixo, tanto faz.

---

Mas se ficar colado no texto de cima transforma o texto em um cabeçalho.
---


# Tabela {#Table}

| Heading | Center align | Right align |
|:------- |:------------:| -----------:|
| Item 2  | Item 3       | Item 4      |
| Item 2  | Item 3       | Item 4      |
| Item 2  | Item 3       | Item 4      |
| Item 2  | Item 3       | Item 4      |
| Item 2  | Item 3       | Item 4      |

[[Top]](#top)

# Códigos {#Code}

## Inline code

Duis duis est `code in text` velit velit aute labore deserunt.

## Highlighted

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

# Inclusão de elementos _inline_ {#Inline}

Texto **negrito**, texto *italico*, texto _italico **negrito** italico_ e normal.

{{< figure 
    src="https://picsum.photos/800/450"
    alt="imagem aleatória"
    caption="Imagem inserida com a tag `<figure>`."
    >}}
    

![Conteúdo da tag ALT](https://picsum.photos/480/400)

Exemplo de inserção de imagem usando formato markdown.


[![Manny Pacquiao](https://img.youtube.com/vi/Yn-cvrmWO00/0.jpg)](https://youtu.be/Yn-cvrmWO00)


Exemplo de link de vídeo do Youtube.