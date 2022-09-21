module.exports = (sequelize, DataTypes) =>{

    const Course = sequelize.define("course", {
  
      name:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      credithour:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      lab:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      subject:{
        type: DataTypes.STRING,
        allowNull: false,
      },

    });
    
    return Course;

}