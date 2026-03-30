# Tela de Login com Animação

Projeto front-end estático de autenticação com transição animada entre os modos de `Sign in` e `Sign up`, desenvolvido com HTML, CSS e JavaScript puro. A interface combina formulários sobrepostos, painéis laterais interativos e animações de entrada/saída controladas por alternância de classe no container principal.

## Visão Geral

Esta aplicação apresenta uma tela única de autenticação com duas experiências no mesmo layout:

- `Sign in`: formulário de login com campos de usuário e senha.
- `Sign up`: formulário de cadastro com campos de usuário, e-mail e senha.
- Alternância visual animada entre os dois estados sem recarregar a página.
- Painéis laterais com CTA para troca de contexto entre login e cadastro.
- Layout responsivo com regras específicas para mobile, tablet e desktop.

## Preview

### Tela de login

<img src="./Assets/img/Sign In.png" alt="Preview da tela de login" width="900" />

### Tela de cadastro

<img src="./Assets/img/Sing Up.png" alt="Preview da tela de cadastro" width="900" />

## Tecnologias Utilizadas

- `HTML5` para estrutura semântica da tela.
- `CSS3` para layout, responsividade e animações.
- `JavaScript` para troca de estado entre login e cadastro.
- `Google Fonts` para a tipografia `Poppins`.
- `Font Awesome` e `Bootstrap Icons` para os ícones dos campos e redes sociais.

## Estrutura do Projeto

```text
Tela_Login_Animation/
|-- Assets/
|   |-- Icons/
|   |   `-- icon.svg
|   `-- img/
|       |-- Login.svg
|       |-- log.svg
|       |-- register.svg
|       |-- Sign In.png
|       `-- Sing Up.png
|-- global.css
|-- index.html
|-- README.md
|-- Screen.css
|-- script.js
`-- style.css
```

## Papel de Cada Arquivo

- `index.html`: concentra toda a marcação da interface, os dois formulários, os painéis laterais e a importação dos arquivos externos.
- `style.css`: define o layout principal, os estilos dos formulários, botões, painéis e as animações entre estados.
- `Screen.css`: contém os ajustes responsivos por faixa de largura de tela.
- `global.css`: aplica reset básico, tipografia global e regras de base para `html` e `body`.
- `script.js`: adiciona e remove a classe `sign-up-mode`, responsável pela animação e troca visual entre os formulários.
- `Assets/`: armazena ícones e imagens usadas na interface e na documentação.

## Funcionamento da Interface

O comportamento principal do projeto é controlado pela classe `sign-up-mode` aplicada ao elemento `.container`.

- Ao clicar em `Sign up`, o JavaScript adiciona a classe `sign-up-mode`.
- Ao clicar em `Sign in`, essa classe é removida.
- O CSS reage a essa troca movendo formulários, painéis e elementos gráficos com `transform`, `transition`, `opacity` e mudança de `pointer-events`.

Esse padrão mantém a implementação simples e evita lógica complexa no JavaScript, deixando a maior parte da animação sob responsabilidade do CSS.

## Dependências Externas

O projeto utiliza recursos carregados por CDN e serviços externos:

- `Font Awesome Kit` para ícones.
- `Bootstrap Icons` via `jsDelivr`.
- `Google Fonts` para a família `Poppins`.
- `readme-typing-svg` para os textos animados exibidos dentro dos painéis.

Por ser um projeto estático, não há `npm`, bundler ou etapa de build configurada.

## Como Executar Localmente

Como a aplicação é composta apenas por arquivos estáticos, basta abrir o arquivo `index.html` em um navegador.

### Opção 1: execução direta

1. Clone ou baixe este repositório.
2. Acesse a pasta do projeto.
3. Abra o arquivo `index.html` no navegador.

### Opção 2: servidor local recomendado

Se preferir rodar com um servidor local, você pode usar qualquer extensão ou ferramenta simples, como `Live Server`, no VS Code.

## Fluxo de Navegação

1. O projeto inicia exibindo o formulário de `Sign in`.
2. O usuário pode clicar em `Sign up` no painel esquerdo para abrir o modo de cadastro.
3. No modo de cadastro, o painel direito exibe a ação inversa para retornar ao login.
4. Toda a transição ocorre na mesma página, com animação suave e sem refresh.

## Responsividade

O arquivo `Screen.css` organiza o comportamento em diferentes breakpoints:

- até `575px`: adaptação para smartphones pequenos.
- de `576px` até `768px`: ajustes para tablets.
- de `769px` até `1024px`: adaptação para laptops menores.
- acima de `1025px`: uso do layout desktop padrão.

Nos tamanhos menores, as ilustrações laterais são ocultadas para priorizar legibilidade e espaço útil para os formulários.

## Pontos de Customização

Este projeto é uma boa base para evoluir uma tela real de autenticação. Os pontos mais naturais para personalização são:

- textos, títulos e placeholders dos formulários;
- cores principais e gradientes do layout;
- ícones e botões de redes sociais;
- imagens dos painéis laterais;
- integração dos formulários com back-end ou APIs de autenticação;
- validação de campos e tratamento de envio com JavaScript.

## Melhorias Recomendadas

Para transformar este layout em uma solução pronta para produção, vale considerar:

- corrigir textos com problemas de codificação de caracteres;
- adicionar validação de formulário e mensagens de erro;
- conectar os formulários a uma API real;
- incluir atributos de acessibilidade, como `label`, `aria-*` e `alt` mais descritivos;
- tratar melhor o comportamento em telas menores com mais consistência visual;
- remover dependências externas não essenciais, caso o projeto precise funcionar totalmente offline.

## Observações Técnicas

- Os formulários usam `action="#"`, portanto atualmente não há envio funcional de dados.
- O JavaScript do projeto é propositalmente simples e atua apenas na troca visual de estados.
- Parte do conteúdo visual depende de carregamento externo via internet.

## Licença

Este projeto não possui uma licença definida no repositório até o momento. Se desejar disponibilizá-lo publicamente, recomenda-se adicionar uma licença como `MIT`.
