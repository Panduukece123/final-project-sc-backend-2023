const tiket_kereta = require("../controllers/tiket_kereta.controllers");
const express = require("express");
const router = express.Router();

router.get("/", tiket_kereta.findAll);
router.get("/:id", tiket_kereta.show);
router.post("/", tiket_kereta.create);
router.put("/:id", tiket_kereta.update);
router.delete("/:id", tiket_kereta.delete);

module.exports = app => {
    app.use("/tiket_kereta", router);
};
