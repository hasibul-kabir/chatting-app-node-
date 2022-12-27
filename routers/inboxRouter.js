const express = require('express');
const { getInbox } = require('../controllers/getInbox');
const setHtmlTitle = require('../middlewares/shared/setHtmlTitle');

const router = express.Router();

router.get('/', setHtmlTitle('inbox'), getInbox);

module.exports = router;