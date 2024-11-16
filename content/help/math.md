---
title: "Fómulas matemáticas"
category: ["help"]
mathjax: true
draft: true
---

Exemplo de símbolo matemático {{< texi `\varphi` >}} inserido _in line_ no texto.

Equação matemática:

{{< texd `\begin{aligned}
\varphi &\Rightarrow \psi \\
\varnothing &\rightarrow A
\end{aligned}` >}}

$$
R_{\mu \nu} - {1 \over 2}g_{\mu \nu}\,R + g_{\mu \nu} \Lambda
= {8 \pi G \over c^4} T_{\mu \nu}
$$

Equação inserida como parte do texto: a equação $$(x_i \cdot x_j)^2$$ é conhecida como _função de base_ e é sempre escrita como $$k(x_i, x_j)$$.

Exemplo de equação complexa:
$$
\arg\max_\alpha \sum_j \alpha_j - \frac{1}{2} \sum_{j,k} \alpha_j, \alpha_k y_j y_k (x_j \cdot x_k)
$$

$$
f(X) = \frac{1}{(2\pi)^{\frac{n}{2} |\Sigma|^{\frac{1}{2}}}} e^{ - \frac{1}{2} (X - \mu)^T \Sigma^{-1} (X - \mu)}
$$

Mais exemplo de equação complexa:
$$
\mu_i = \sum_{j=1}^N \frac{p_{ij} x}{n_i} \\
\Sigma_i = \sum_{j=1}^N \frac{p_{ij} (x_j - \mu_i) (x_j - \mu_i)^T}{n_i}\\
w_i  =  \frac{n_i}{N}
$$

Exemplo de equação com erro na sua escrita e o erro que o sistema exibe:
$$
S_i^{(t)} = \big \{ x_p : \big \| x_p - \mu^{(t)}_i \big \|^2 \le \big \| x_p - \mu^{(t)}_j \big \|^2 \ \forall j, 1 \le j \le k \big\}
$$
