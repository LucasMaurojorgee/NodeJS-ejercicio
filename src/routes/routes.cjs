const express = require("express");
const router = express.Router();
const {
  welcomeMessage,
} = require("../controllers/welcomeMessage-controller.cjs");
const { showMessage } = require("../controllers/showMessage-controller.cjs");
const { error } = require("../controllers/error-controller.cjs");
const { include } = require("../controllers/include-controller.cjs");

router.get("/", welcomeMessage);

router.get("/message/:message", showMessage);

router.get("/error", error);

router.get("/include/:texto/:cadena", include);

module.exports = { router };
