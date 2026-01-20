---
title: "Cálculo do Dígito Verificador em Python"
date: "2024-11-08"
category: [articles]
featured: true
banner: "dv.png"
summary: "Quem já viu o cálculo do DV em outra linguagem, vai se surpreender com a beleza da solução em Python."
tags: ["algorítimo", "listas", "python", "programação"]
---

Segundo a Wikipédia, "dígito verificador ou algarismo de controle é um mecanismo de autenticação utilizado para verificar a validade e a autenticidade de um valor numérico, evitando dessa forma fraudes ou erros de transmissão ou digitação. Consiste em um ou mais algarismos acrescentados ao valor original e calculados a partir deste através de um determinado algoritmo".[^1]

Nos anos 80s, 90s a informatização ainda era embrionária. Para abrir uma conta, os funcionários recorriam a uma tabela fornecida pela central de processamento que já vinha com o dígito verificador calculado. Por exemplo, o último dígito **3** na conta **1234-3** é o dígito verificador (DV). Existe também DV para CPF e CNPJ. Nestes documentos, os dois últimos algarismos é o dígito verificador.


Se você já viu ou já escreveu uma solução para o algorítimo Módulo 11 em qualquer outra linguagem, vai se surpreender com a simplicidade da solução usando _list comprehension_[^2] em Python:

```python
def dv(nr):
	d = sum([i*int(x) for i, x in enumerate(nr.rjust(10,'0'))]) % 11
	return str(0 if d > 9 else d)

```

Copie ou digite essas 3 linhas de código no arquivo **dv.py**, teste e veja a mágica acontecer. 

```python
from dv import *

dv('1234')
```

Para calcular o DV do CPF, basta chamar a rotina duas vezes, passando, na segunda chamada, o primeiro dígito encontrado.

```python
def cpf(nr):
  d = dv(nr)
  return '%s-%s%s' % (nr, d, dv(nr+d))
```

O cálculo do DV do CNPJ é um pouquinho diferente do já mostrado, então faremos uma pequena adaptação:
```python
def dv_cnpj(nr):
  d = sum([int(x)*(6-i if 6-i>1 else 14-i) for i, x in enumerate(nr.rjust(13,'0'))]) % 11
  return str(0 if d<2 else 11 - d)
```

Para executar, é só fazer duas chamadas, como no caso do CPF.
```python
def cnpj(nr):
    d = dv_cnpj(nr)
    return "%s-%s%s" % (nr.rjust(13, "0"), d, dv_cnpj(nr + d))
```

Não vamos explicar cada um dos códigos acima, mas examinaremos o primeiro cálculo para entender como o Python faz a mágica acontecer.
Uma das vantagens dessa linguagem é que ela foca diretamente na solução do problema. Assim, o programador não precisa gastar tempo e energia com idiossincrasias da própria linguagem. Voltemos ao código:

```python
def dv(nr):
	d = sum([i*int(x) for i, x in enumerate(nr.rjust(10,'0'))]) % 11
	return str(0 if d > 9 else d)

```
A função criada com o comando ```def dv(nr)``` espera receber um valor numérico como _string_, entre aspas, que no Python tanto podem ser simples como duplas. E, na última linha, retorna o resultado, testando a seguinte condição: se o dígito encontrado estiver entre 0 e 9, retorna o próprio dígito; caso seja 10, retorna 0 (zero). Alguns bancos usam a letra **_X_**, quando o dígito é 10.

Toda a complexidade do cálculo está condensada e resolvida na linha ```d = sum(...)```. Vamos dissecar cada trechinho dessa linha, para entender o que está acontecendo, começando pelo trecho ```nr.rjust(10,'0')```. Esse código pega o valor recebido em **nr** e alinha à direita, preenchendo com zeros à esquerda até o tamanho de 10 dígitos. Se o valor recebido foi "1234", ele passa a ser "0000001234" e estará pronto para as próximas etapas do cálculo.

Agora, vamos criar um enumerador[^3] associado a esse novo valor de **nr**: ```enumerate(nr.rjust(10,'0'))```. Devido as características dos enumeradores, mesmo que você crie uma variável, algo assim: ```e = enumerate(nr.rjust(10,'0'))```, não será possível ver o valor do objeto criado. Para conhecer seu conteúdo, será necessário iterar sobre ele.

Experimente isso no prompt do Python:

```python
>>> nr = '1234'
>>> nr = nr.rjust(10,"0")
>>> print (nr)
0000001234
>>> e = enumerate(nr.rjust(10,'0'))
>>> print(e)
<enumerate object at 0x7a4036015e80>
>>> for i,x in e:
...   print(i,x)

```

A saída do último **print** serão pares de valores, associando cada posição **_i_** do enumerador com cada um dos dígitos de **nr**. São estes valores que usaremos para gerar uma nova lista, multiplicando esses fatores, como pede o algorítimo do Módulo 11.

É isso que faz o trecho de código a seguir: ```[i*int(x) for i, x in enumerate(nr.rjust(10,'0'))]```.

Se executarmos no prompt do Python, veremos algo como o seguinte:
```python
>>> e = enumerate(nr.rjust(10,'0'))
>>> l = [i*int(x) for i, x in e]
>>> print (l)
[0, 0, 0, 0, 0, 0, 6, 14, 24, 36]
```
O resultado obtido é uma nova lista com a multiplicação dos fatores, como esperado.

Uma observação importante quando se lida com iteráveis no Python é que não podemos iterar mais de uma vez sobre eles, por isso, nos exemplos que dei usando o prompt, tive que recriar a variável **e** que continha o _enumerator_.

Seguindo o algorítimo do Módulo 11, somaremos, agora, os valores da lista obtida pela multiplicação realizada no processo anterior: ```sum([...])``` e, a seguir, pegamos o resto[^4] da divisão por 11:  ```d = sum(...) % 11```. O Python usa o símbolo de percentual para fazer essa operação.

O valor de **_d_** será um número variando de 0 a 10, que nosso retorno ajustará para o intervalo de 0 a 9. No exemplo dado (1234), retornará 3, o dígito verificador que estamos procurando.


[^1]: Dígito Verificador: [Wikipédia](https://pt.wikipedia.org/wiki/D%C3%ADgito_verificador).
[^2]: _List comprehension_ cria uma nova lista a partir de valores de outra pré-existente: [Python docs](https://docs.python.org/2/tutorial/datastructures.html#list-comprehensions)
[^3]: Enumerador: [Python Tutorial](https://pythonbasics.org/enumerate/)
[^4]: Resto da divisão: conhecido como _módulo_ (operador _mod_ em algumas linguagens), daí o nome do algorítimo.