module.exports = (sequelize, DataTypes) => {
  const Bp = sequelize.define("Bp", {
    bpId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true
    },
    systolic_high: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    diastolic_low: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pulse: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Users",
        key: "userId"
      }
    },
    createdDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  });

  Bp.associate = function(models) {
    Bp.belongsTo(models.User, {
      foreignKey: "userId"
    });
  };

  return Bp;
};
