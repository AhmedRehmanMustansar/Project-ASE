const db = require('../models');

const Student = db.students;



const addStudent = async (req,res)=>{

  let info = {
    title:req.body.title,
    email:req.body.email,
    cellnumber:req.body.cellnumber,
    age:req.body.age,
    address:req.body.address,
  }

  const student = await Student.create(info);
  res.status(200).send(student);
  console.log(student);


}


const getAllStudents = async (req,res) => {

    let students = await Student.findAll({});
    res.status(200).send(students);
}


const getOneStudent = async (req,res) =>{
    let id = req.params.id;
    let student = await Student.findOne({where:{ id:id}});
    res.status(200).send(student);
}

const updateStudent = async (req,res) => {

 let id = req.params.id;
 const student = await Student.update(req.body, {where:{id:id}});
 res.status(200).send(student);
}


  const deleteStudent = async (req,res) => {
   let id  = req.params.id;

   await Student.destroy({where:{ id : id}})
   res.status(200).send('Student record is deleted!')

  }

  module.exports = {
  addStudent,
  getAllStudents,
  getOneStudent,
  updateStudent,
  deleteStudent,

  }