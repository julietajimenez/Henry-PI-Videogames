const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    } ,
    description_raw: {
      type: DataTypes.STRING,
      allowNull: false
    },
    released: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.FLOAT
    }, 
    platforms: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false
    }, 
    background_image: {
      type: DataTypes.STRING,
/*       validate: {
        isUrl: {
          args: true,
          msg: 'debe ser url'
        }
      } */
    }, 
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }

  }, {
    timestamps: false
  });
};
