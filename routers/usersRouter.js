const express = require('express');
const { getUsers } = require('../controllers/getUsers');
const setHtmlTitle = require('../middlewares/shared/setHtmlTitle');

const router = express.Router();

router.get('/', setHtmlTitle('users'), getUsers);
module.exports = router;