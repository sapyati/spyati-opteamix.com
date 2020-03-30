module.exports = (sequelize, DataTypes) => {
  const Weight = sequelize.define("Weight", {
    weightId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true
    },
    weightValue: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    weightUnit: {
      type: DataTypes.STRING,
      allowNull: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Users",
        key: "userId"
      }
    }
  });

  Weight.associate = function(models) {
    Weight.belongsTo(models.User, {
      foreignKey: "userId"
    });
  };

  return Weight;
};
