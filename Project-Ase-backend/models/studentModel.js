module.exports = (sequelize, DataTypes) =>{

    const Student = sequelize.define("student", {
  
      name:{
        type: DataTypes.STRING,
        allowNull: false,
      }, 
      email:{
        type: DataTypes.TEXT,
      },
      cellno:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      age:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      address:{
        type: DataTypes.TEXT,
        allowNull: false,
      }

    });
    
    return Student;

}