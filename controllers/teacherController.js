const Student = require("../models/student");

const teacher_login_get = (req, res) => {
  try{
    res.render("teacher/teacherLogin");
  }catch(error)
    {
        return res.status(500).json({
            data:{},
            message:"Something Went Wrong",
            success: false,
            err:error
        });
    }
  
};

const teacher_login_post = (req, res) => {
  if (
    req.body.email === "teacher@nagarro.com" &&
    req.body.password === "tec@123"
  ) {
    res.redirect("/teacher/option");
  } else {
    res.render("teacher/teacherLogin", {
      error: "Please Enter Correct Email and Password",
    });
  }
};

const teacher_viewall_get = async (req, res) => {
  try{
    const allStudents = await Student.find();
    res.render("teacher/viewall", { student: allStudents });
  }catch(error)
    {
        return res.status(500).json({
            data:{},
            message:"Something Went Wrong",
            success: false,
            err:error
        });
    }
  
};

const teacher_edit_get = async (req, res) => {
  try{
    const user = await Student.findById(req.params.id);
    console.log(user);
    res.render("teacher/edit", { user: user });
  }catch(error)
    {
        return res.status(500).json({
            data:{},
            message:"Something Went Wrong",
            success: false,
            err:error
        });
    }
  
};


const teacher_edit_post = async (req, res) => {
    try{
        const user = await Student.findByIdAndUpdate(req.params.id, req.body);
        res.redirect("/teacher/viewall");
    }catch(error)
    {
        return res.status(500).json({
            data:{},
            message:"Something Went Wrong",
            success: false,
            err:error
        });
    }
  
};


const teacher_delete_get = async (req, res) => {
  try{
    await Student.findByIdAndDelete(req.params.id);
    res.redirect("/teacher/viewall");
  }catch(error)
  {
      return res.status(500).json({
          data:{},
          message:"Something Went Wrong",
          success: false,
          err:error
      });
  }
  
};


const teacher_option_get = (req, res) => {
  try{
    res.render("teacher/option");
  }catch(error)
  {
      return res.status(500).json({
          data:{},
          message:"Something Went Wrong",
          success: false,
          err:error
      });
  }
};


const teacher_add_get = (req, res) => {
  try{
    res.render("teacher/addstudent");
  }catch(error)
  {
      return res.status(500).json({
          data:{},
          message:"Something Went Wrong",
          success: false,
          err:error
      });
  }
};


const teacher_add_post = async (req, res) => {
  try {
    const singleStudent = new Student({
        name: req.body.name,
        roll: req.body.roll,
        dob: req.body.dob,
        score: req.body.score,
      });
    const newStudent = await singleStudent.save();
    res.redirect("/teacher/viewall");
  } catch(error)
  {
      return res.status(500).json({
          data:{},
          message:"Something Went Wrong",
          success: false,
          err:error
      });
  }
};

module.exports = {
  teacher_login_get,
  teacher_login_post,
  teacher_viewall_get,
  teacher_edit_get,
  teacher_edit_post,
  teacher_delete_get,
  teacher_add_post,
  teacher_add_get,
  teacher_option_get,
};
