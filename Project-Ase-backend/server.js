const express = require('express');
const cors = require('cors');


const app = express();

var corOptions = {
    origin: '*'

}




//middleware
app.use(cors(corOptions));  
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const  router = require('./controllers/studentController');
app.use('/api/students', router);

const router2 = require('./controllers/courseController');

app.use('/api/courses', router2);

app.get('/',(req,res)=>{
    res.json({message:'hello from api'});
})


const PORT = process.env.PORT || 8080;

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  });
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})


