var express = require('express');
var router = express.Router();

const setController = require('../controllers').set;
const cardController = require('../controllers').card;


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


/* FLASHCARD APP */

/* SETS ROUTER */
router.get('/api/set', setController.list);
router.get('/api/set/:id', setController.getById);
router.post('/api/set', setController.add);
router.delete('/api/set/:id', setController.delete);

/* CARDS ROUTER */
router.get('/api/card', cardController.list);
router.get('/api/card/:id', cardController.getById);
router.post('/api/card', cardController.add);
router.delete('/api/card/:id', cardController.delete);

module.exports = router;
