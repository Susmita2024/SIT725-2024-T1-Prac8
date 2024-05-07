var express = require('express');
let router = express.Router();
const dogController = require('./controllers/dog-controller');

router.get('/api/cards', (req, res) => {
  console.log('GET: /api/cards');
  return dogController.getAllCards(req, res);
});

router.post('/api/cards', async (req, res) => {
  console.log('POST: /api/cards');
  return dogController.insertCard(req, res);
});

router.delete('/api/cards', (req,res) => {
  console.log('DELETE: /api/cards');
  return dogController.deleteCard(req,res);
});


module.exports = router; 



