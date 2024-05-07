let model = require('../models/dog-card-model');
const util = require('util');

const getAllCards = async (req, res) => {
  const cards = await model.getAllCards();
  res.send(cards);
};

const insertCard = async (req, res) => {
  // console.log(req.body);
  const card = {
    title: req.body.value.title,
    color: req.body.value.color,
    imagePath: req.body.value.imagePath,
    description: req.body.value.description,
  };

  

  console.log(`adding card to database; card: ${util.inspect(card)}`);
  const result = await model.insertCard(card);
  const success = result && result.acknowledged;
  if (success) {
    res.status(200).json('SUCCESS').send();
  } else {
    res.status(500).json('FAILED').send();
  }
};

const deleteCard =async (req,res) => {
  let card = req.body;
  console.log(`Deleting card to database; card: ${util.inspect(card)}`);
  const result = await model.deleteCard(card);
  console.log(result);
  const success = result && result.acknowledged;
  if (success) {
    res.status(200).json('SUCCESS').send();
  } else {
    res.status(500).json('FAILED').send();
  }

}

module.exports = { getAllCards, insertCard, deleteCard };