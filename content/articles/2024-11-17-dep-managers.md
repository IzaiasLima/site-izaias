---
title: "Principais Gerenciadores de Dependências"
date: "2024-11-17"
category: [articles]
tags: ["gerenciadores", "dependências", "programação", "python"]
---

Quem é da área de programação sabe que não pode prescindir dos gerenciadores de dependências. Para cada linguagem pode haver um ou mais disponível, já que a criatividade dos desenvolvedores, especialmente a turma do software livre, é tão grande quanto as preferências e necessidades específicas de cada um.

Assim, correndo o risco de ser injusto com uma ou outra excelente opção, apresento a lista a seguir dos gerenciadores de dependências mais conhecidos (pelo menos por mim), para o caso de alguém estar precisando dessa informação.

1. **JavaScript e NodeJs**:
   
   - **npm** (Node Package Manager): O gerenciador de pacotes padrão para Node.js e JavaScript. Ele é usado para instalar, compartilhar e distribuir pacotes de código reutilizável.

2. **Python**:
   
   - **pip** (Pip Installs Packages): O gerenciador de pacotes padrão para Python. Ele é usado para instalar e gerenciar pacotes Python de repositórios Python Package Index (PyPI) e outros.
   - **Poetry**: Também um queridinho de muitos desenvolvedores Python, promete resolver dependências de forma exaustiva, de modo a sempre garantir a perfeita compatibilidade entre os pacotes, se essa solução existir.
   **UV** é a mais recentes dessas ferramentas. Moderna e extremamente rápida para gestão de ambientes e pacotes do Python, ela foi desenvolvida pela Astral (a mesma equipe responsável pelo Ruff). Por ser escrita em Rust, chega a ser de 10 a 100 vezes mais rápida que pip, tornando a instalação e a resolução de dependências praticamente instantâneas. Além disso, substitui completamente o pip, pip-tools, pipx, poetry e pyenv, unificando tudo em uma ferramenta só.

3. **Ruby**:
   
   - **Bundler**: Usado para gerenciar dependências Ruby para aplicativos e bibliotecas dessa linguagem, instala as gemas necessárias e as mantém em um Gemfile.lock para garantir a consistência das dependências.

4. **Java**:
   
   - **Maven**: Uma ferramenta de automação de compilação usada principalmente para projetos Java. Gerencia dependências e faz o _build_ dos projetos usando arquivos de configuração XML chamados POM (Project Object Model).

   - **Gradle**: Uma ferramenta de automação de compilação que pode ser usada para construir quase qualquer tipo de software, incluindo, mas não se limitando ao Java. Oferece grande flexibilidade e é altamente configurável, usando uma sintaxe baseada em Groovy ou Kotlin.

5. **PHP**:
   
   - **Composer**: O gerenciador de dependências para PHP permite que você declare as bibliotecas das quais o seu projeto depende e as instala para você, simplificando a integração de bibliotecas de terceiros em seu projeto PHP.

6. **C# e .NET**:
   
   - **NuGet**: O gerenciador de pacotes para o ecossistema .NET é usado para encontrar e instalar bibliotecas de terceiros e ferramentas para projetos que usam as linguagens da Microsoft.

7. **Go**:
   
   - **go mod**: A partir da versão 1.11, o Go vem com suporte integrado para gerenciamento de dependências usando módulos. O comando `go mod` é usado para criar e manter esses módulos, fornecendo uma maneira de gerenciar dependências para projetos Go.

8. **Rust**:
   
   - **Cargo**: Gerenciador de pacotes e construção de projetos para Rust, ele gerencia dependências, compilação e publicação de pacotes Rust.

Cada uma dessas ferramentas possui sua própria sintaxe e filosofia de uso. Para conhecer o conjunto de recursos específicos de cada uma delas, sugiro consultar a própria documentação da ferramenta no site ou no Github dos desenvolvedores da solução.
