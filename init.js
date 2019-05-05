const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send("Tarea SA Paublo Martínez 201313876 <a href='https://github.com/pamg201313876/TareaSA/archive/master.zip'>Descargar Archivo </a>")
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
