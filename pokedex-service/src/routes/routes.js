const router = require("express").Router();

const listPokemon = require("./GET/owned").owned;
const catchPokemon = require("./POST/catch").catch;
const nicknamePokemon = require("./PUT/nickname").nickname;
const renamePokemon = require("./PUT/rename").rename;
const releasePokemon = require("./DELETE/release").release;

router.get("/owned", listPokemon);
router.post("/catch", catchPokemon);
router.put("/nickname", nicknamePokemon);
router.put("/rename", renamePokemon);
router.delete("/release", releasePokemon);

module.exports = router;
