const express = require ('express');
const router = express.Router();

const pages = require('../handlers/pages.js');

router.get('/', pages.home);

module.exports = router;