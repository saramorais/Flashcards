'use strict';
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    set_id: DataTypes.INTEGER
  }, {});
  Card.associate = function(models) {
    Card.belongsTo(models.Set, {
      foreignKey: 'set_id',
      as: 'set'
    });
  };
  return Card;
};
