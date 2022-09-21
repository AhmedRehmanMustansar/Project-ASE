const db = require('../models');

const Student = db.students;
const Course = db.courses;



const addStudent = async (req,res)=>{

  let info = {
    name:req.body.name,
    email:req.body.email,
    cellno:req.body.cellno,
    age:req.body.age,
    address:req.body.address,
    courses:req.body.courses,
  }

  const student = await Student.create(info, {include: db.courses});
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