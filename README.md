<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Multiplicação App</title>
    <script src="jquery-3.6.3.js"></script>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <form class="form" id="form">
      <h4 class="ponto" id="ponto">Pontos:0</h4>
      <h1 id="questao">Quanto é 1 multiplicado por 1 ?</h1>
      <input
        type="number"
        class="input"
        id="input"
        placeholder="Digite o número aqui  "
        autofocus
        autocomplete="off"
      />
      <button type="submit" class="btn">Confirma</button>
    </form>
    <script src="index.js"></script>
  </body>
</html>
