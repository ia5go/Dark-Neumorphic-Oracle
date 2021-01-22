# Proposta

Cricar um sistema de aleatoriedade em cima do projeto https://ia5go.github.io/darkneumorphism/

- Aplicação oracular que traga 3 cartas (passado, presente e futuro).
- As informações serão carregadas a partir de um json que está na pasta de assets.

## Dificuldades

- Carregar um JSON a partir de js puro não é tão facil quanto é fazer isso com a biblioteca P5js
  - Primeiro precisamos utilizar a função fetch(), já que a função loadJSON() não é nativa da linguagem ES.
    - Para isso usei algumas referencias: https://www.youtube.com/watch?v=tc8DU14qX6I - https://www.youtube.com/watch?v=5VCY9yCZnlc
  - Ao Utilizar a função fetch() precisamos de um servidor, ela não rodará internamente com arquivos locais.
    - Para resolver isso utilizei a aplicação Live Server, um pluging que torna a pasta da sua aplicação em uma pagina "live", isso permite que agora a função fetch() pegue o arquivo JSON dentro dessa pasta e trate como se viesse de um servidor online.