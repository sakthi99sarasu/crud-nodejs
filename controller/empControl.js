const employee = require('../models/empModels.js');



exports.insert = (req, res) =>{
    console.log("TEST controller");
    const emp = new employee({
        emp_id:req.body.emp_id,
        emp_name:req.body.emp_name,
        emp_phone : req.body.emp_phone,
        emp_email : req.body.emp_email,
        emp_dob : req.body.emp_dob,
        emp_address : req.body.emp_address,
        emp_dept : req.body.emp_dept,
        emp_designation : req.body.emp_designation
    });
    console.log('hi contoller')   
console.log(emp);
    employee.insert(emp,(err, data)=>{
        console.log(err);
        console.log(data);
        if(err){
            res.json({status:0,message:"error while inserting"});
        }else if(data>0){
            res.json({status:1,message:"Success"});
        }else{
            res.json({status:0,message:"Failed to insert"});
        }
    });
}

//select all
exports.select = (req, res) =>{
    console.log("TEST controller");
    // const empS = new employee({
    //     emp_id:req.body.emp_id,
    //     emp_name:req.body.emp_name,
    //     emp_phone : req.body.emp_phone,
    //     emp_email : req.body.emp_email,
    //     emp_dob : req.body.emp_dob,
    //     emp_address : req.body.emp_address,
    //     emp_dept : req.body.emp_dept,
    //     emp_designation : req.body.emp_designation
    // });
    console.log('hi contoller')   
//console.log(empS);
    employee.select((err, data)=>{
        console.log(err);
        console.log(data);
        if(err){
            res.json({status:0,message:err});
        }else if(data>0){
            res.json({status:1,message:data});
        }else{
            res.json({status:0,message:err});
        }
    });
}


//select with id
exports.select = (req, res) =>{
    const empS = new employee({
        emp_id:req.params.emp_id
    });
    console.log(empS);
    employee.select(empS,(err, data)=>{
        console.log(err);
        console.log(data);
        if(err){
            res.json({status:0,message:"error while inserting"});
        }else if(data>0){
            res.json({status:1,message:"Success"});
        }else{
            res.json({status:0,message:"Failed to insert"});
        }
    });
} 

//delete with id
exports.delete = (req, res) =>{
    const empD = new employee({
        emp_id:req.body.emp_id
    });
    console.log(empD);
    employee.delete(empD,(err, data)=>{
        console.log(err);
        console.log(data);
        if(err){
            res.json({status:0,message:"error while deleting"});
        }else if(data>0){
            res.json({status:1,message:"Success"});
        }else{
            res.json({status:0,message:"Failed to deleting"});
        }
    });
}

//update 

exports.update = (req, res) =>{
    console.log("TEST controller");
    const empU = new employee({
        emp_id:req.body.emp_id,
        emp_name:req.body.emp_name,
        // emp_phone : req.body.emp_phone,
        // emp_email : req.body.emp_email,
        // emp_dob : req.body.emp_dob,
        // emp_address : req.body.emp_address,
        // emp_dept : req.body.emp_dept,
        // emp_designation : req.body.emp_designation
    });
    console.log('hi contoller')   
console.log(empU);
    employee.insert(empU,(err, data)=>{
        console.log(err);
        console.log(data);
        if(err){
            res.json({status:0,message:"error while inserting"});
        }else if(data>0){
            res.json({status:1,message:"Success"});
        }else{
            res.json({status:0,message:"Failed to insert"});
        }
    });
}



