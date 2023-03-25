const express = require('express');
const { listAction, deleteAction, formAction } = require('./controller');
const router = express.Router();




router.get('/', listAction);
router.get('/delete/:id', deleteAction);
router.get('/form/:id', formAction);


module.exports = router;