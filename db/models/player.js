const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    static associate({ Favorite, Game, Comment }) {
      this.hasMany(Game, { foreignKey: 'player_id' });
      this.hasMany(Favorite, { foreignKey: 'player_id' });
      this.hasMany(Comment, { foreignKey: 'player_id' });
    }
  }
  Player.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      age: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      email: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      avatar: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Player',
    },
  );
  return Player;
};
