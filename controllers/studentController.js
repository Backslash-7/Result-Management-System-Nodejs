const Student = require('../models/student');

const student_login_get = (req, res) => {
       res.render("student/login");
    };

const student_login_post = async (req, res) => {
  try{
        //console.log(req.body);
        const Sturoll = req.body.roll; 
        const StuDob = req.body.dob;

        const individualStudent = await Student.findOne({ roll: Sturoll, dob: StuDob });
   
        if(!individualStudent){
          res.render("student/login", {
            error: "Login with correct Roll number"
          })
        }      
        res.render("student/view", { one : individualStudent});

  }catch(error)
    {
        return res.status(500).json({
            data:{},
            message:"Something went wrong",
            success: false,
            err:error
        });
    }


    };


module.exports={
    student_login_get,
    student_login_post
}

