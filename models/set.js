'use strict';
module.exports = (sequelize, DataTypes) => {
  const Set = sequelize.define('Set', {
    set_name: DataTypes.STRING
  }, {});
  Set.associate = function(models) {
    Set.hasMany(models.Card, {
      foreignKey: 'set_id',
      as: 'cards',
    });
  };
  return Set;
};