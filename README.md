# Proposta

Cricar um sistema de aleatoriedade em cima do projeto https://ia5go.github.io/darkneumorphism/

- Aplicação oracular que traga 3 cartas (passado, presente e futuro).
- As informações serão carregadas a partir de um JSON que está na pasta de assets.

## Objetivo

- Praticar front-end e consumo de JSON.
- Criar um JSON, e todo um conjunto de assets que possam ser utilizados em outros projetos mock.

### Futuro

- Criar uma página sobre o Tommie Kelly e uma sobre os quarenta servidores.
- Add descrições aos campos passado, presente e futuro dos objetos JSON.
- Criação de páginas individuais que carreguem um objeto específico e dé uma visão mais detalhada.

## Dificuldades

- Carregar um JSON a partir de js puro não é tão facil quanto é fazer isso com a biblioteca P5js
  - Primeiro precisamos utilizar a função fetch(), já que a função loadJSON() não é nativa da linguagem ES.
    - Para isso usei algumas referencias: https://www.youtube.com/watch?v=tc8DU14qX6I - https://www.youtube.com/watch?v=5VCY9yCZnlc
  - Ao Utilizar a função fetch() precisamos de um servidor, ela não rodará internamente com arquivos locais.
    - Para resolver isso utilizei a aplicação Live Server, um pluging que torna a pasta da sua aplicação em uma pagina "live", isso permite que agora a função fetch() pegue o arquivo JSON dentro dessa pasta e trate como se viesse de um servidor online.
  - Agora preciso transformar transformar o que fetch() pega em um array de objetos em uma variável global.
    - const deck = fatch()...; não dá certo pois salva uma promessa não só o objeto que foi recuperado do json.
    - Pelo visto é necessário manipular o json dentro da função async responsável por executar a fetch(), se tentar dar um retorno desta ainda recebo uma promessa.
- Para criar a função de revelar independente em cada carta foi necessário quebrar a função em funções idependentes para cada carta.
- Ao tentar add uma classe para esconder o botão ele ignorou o valor para display none - a solução aqui foi usar " .style.display = 'none' " diretamente no js.

### NEXT:

#### Minimo para versão 1.0

- Add as palvras para cada carta (ongoing).
- Colocar pagina em um grid - add footer e header (links para dev, logo e direitos altorais para pagina do tommie).

#### Para versões futuras

- NOTE: Caso o header ganhe outro botão, este deverá ser colocado a direita da logo e esta deve ser centralizada.
- Add footer com link para minha página apresentação.
- Pagina "como usar" deve ser adicionada.
- dar opção de acesso a palavras ou ao lema do servidor.
