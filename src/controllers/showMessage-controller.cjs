const showMessage = (req, res) => {
  const param = req.params.message;

  res.send(`Su mensaje es: ${param}`);
};

module.exports = { showMessage };
