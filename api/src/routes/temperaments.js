//rutas GET y POST de "temperaments"
const { Router } = require('express');
const getTempHandler = require('../handlers/temperamentsHandlers');
const router = Router();


router.get('/', getTempHandler)

module.exports = router;