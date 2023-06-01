const error = (req, res) => {
  res.status(400).send({ message: "Mensaje de error" });
};

module.exports = { error };
