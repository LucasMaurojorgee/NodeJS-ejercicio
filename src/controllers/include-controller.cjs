const include = (req, res) => {
  const texto = req.params.texto;
  const cadena = req.params.cadena;

  const cadenaSplited = cadena.split(" ");
  const incluye = false;

  //   if () {
  //     incluye = true;
  //   } else {
  //     incluye = false;
  //   }

  res.send(cadenaSplited.include(texto));
};

module.exports = { include };
