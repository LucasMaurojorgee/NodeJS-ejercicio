include = (req, res) => {
  const texto = req.params.texto;
  const cadena = req.params.cadena;

  if (cadena.includes(texto)) {
    res.send(`La cadena: ${cadena} | incluye: ${texto}`);
  } else {
    res.send(`La cadena: ${cadena} | no incluye: ${texto}`);
  }
};

module.exports = {include};
