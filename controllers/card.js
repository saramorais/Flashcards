const Set = require('../models').Set;
const Card = require('../models').Card;

module.exports = {

  list(req, res) {
    return Card
      .findAll()
      .then((card) => res.status(200).send(card))
      .catch((error) => {
        res.status(400).send(error);
      });
  },

  getById(req, res) {
    return Card
      .findById(req.params.id, {
        include: [{
          model: Set,
          as: 'set'
        }],
      })
      .then((card) => {
        if (!card) {
          return res.status(404).send({
            message: 'Card Not Found',
          });
        }
        return res.status(200).send(card);
      })
      .catch((error) => res.status(400).send(error));
  },


  add(req, res) {
    console.log('req.body', req.body.set_id, 'hereee');
    return Card
      .create({
        question: req.body.question,
        answer: req.body.answer,
        set_id: req.body.set_id
      })
      .then((card) => {
        if (!card) {
          return res.status(404).send({
            message: 'Did not work!',
          });
        }
        Set
          .findById(req.body.set_id, {
            include: [{
              model: Card,
              as: 'cards'
            }],
          })
          .then((set) => {
            if (!set) {
              return res.status(404).send({
                message: 'Set Not Found',
              });
            }
            return res.status(200).send(set);
          })
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Card
      .findById(req.params.id)
      .then(card => {
        if (!card) {
          return res.status(400).send({
            message: 'Card Not Found',
          });
        }
        return card
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },


};