module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    age: {
      type: DataTypes.STRING,
      allowNull: true
    },
    height: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  User.associate = function(models) {
    User.hasMany(models.Weight, {
      foreignKey: "userId",
      as: "weight"
    });
    User.hasMany(models.Bp, {
      foreignKey: "userId",
      as: "bp"
    });
  };
  return User;
};
