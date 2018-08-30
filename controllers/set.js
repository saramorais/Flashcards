const Card = require('../models').Card;
const Set = require('../models').Set;


module.exports = {
  list(req, res) {
    return Set
      .findAll({
        include: [{
          model: Card,
          as: 'cards'
        }],
        order: [
          ['createdAt', 'DESC'],
          [{ model: Card, as: 'cards' }, 'createdAt', 'DESC'],
        ],
      })
      .then((set) => res.status(200).send(set))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Set
      .findById(req.params.id, {
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
      .catch((error) => res.status(400).send(error));
  },



  add(req, res) {
    return Set
      .create({
        set_name: req.body.name,
      })
      .then((set) => {
        if(!set) {
          return res.status(404).send({
            message: 'Did not work!',
          });
        }
        Set
          .findAll({
            include: [{
            model: Card,
            as: 'cards'
          }],
          order: [
          ['createdAt', 'DESC'],
          [{ model: Card, as: 'cards' }, 'createdAt', 'DESC'],
        ],
      })
      .then((set) => res.status(200).send(set))
      })
      .catch((error) => res.status(400).send(error));
  },


  delete(req, res) {
    return Set
      .findById(req.params.id)
      .then(set => {
        if (!set) {
          return res.status(400).send({
            message: 'Set Not Found',
          });
        }
        return set
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },


};
