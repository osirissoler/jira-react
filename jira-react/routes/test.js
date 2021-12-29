const { Router } = require('express');
const { getTest } = require('../controller/test-controller');
const router = Router()

router.get('/', getTest)

module.exports = router;