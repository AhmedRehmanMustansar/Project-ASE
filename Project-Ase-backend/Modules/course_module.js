const db = require('../models');

const Course= db.courses;



const addCourse = async (req,res)=>{

  let info = {
    name:req.body.name,
    credithour: req.body.credithour,
    lab: req.body.lab? req.body.lab : false,
    subject: req.body.subject,
  }

  const course = await Course.create(info);
  res.status(200).send(course);
  console.log(course);


}


const getAllCourses = async (req,res) => {

    let courses = await Course.findAll({});
    res.status(200).send(courses);
}


const getOneCourse = async (req,res) =>{
    let id = req.params.id;
    let course = await Course.findOne({where:{ id:id}});
    res.status(200).send(course);
}

const updateCourse= async (req,res) => {

 let id = req.params.id;
 const course = await Course.update(req.body, {where:{id:id}});
 res.status(200).send(course);
}


  const deleteCourse = async (req,res) => {
   let id  = req.params.id;

   await Course.destroy({where:{ id : id}})
   res.status(200).send('Course is deleted!')

  }

  module.exports = {
  addCourse,
  getAllCourses,
  getOneCourse,
  updateCourse,
  deleteCourse,

  }