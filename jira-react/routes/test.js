const { Router } = require("express");
const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({ ok: "ok" })
})

module.exports = Router;