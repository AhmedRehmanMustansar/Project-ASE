module.exports = (sequelize, DataTypes) =>{

    const Course = sequelize.define("course", {
  
      title:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      subject:{
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
      }

    });
    
    return Course;

}