const express = require('express');
const { getLogin } = require('../controllers/getLogin');
const setHtmlTitle = require('../middlewares/shared/setHtmlTitle');


const router = express.Router();

router.get('/', setHtmlTitle('login'), getLogin);

module.exports = router;