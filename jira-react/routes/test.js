const { Router } = require('express');
const { getTest } = require('../controller/test-controller');
const router = Router()

router.post('/', getTest)

module.exports = router;