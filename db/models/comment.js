const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ Game, Player }) {
      this.belongsTo(Game, { foreignKey: 'game_id' });
      this.belongsTo(Player, { foreignKey: 'player_id' });
    }
  }
  Comment.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      text: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      player_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Players',
          key: 'id',
        },
      },
      game_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Games',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Comment',
    },
  );
  return Comment;
};
