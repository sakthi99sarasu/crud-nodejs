const db=require('../database.js')

const employee1= function(employee){
    this.emp_id= employee.emp_id;
    this.emp_name=employee.emp_name;
    this.emp_email=employee.emp_email;
    this.emp_phone=employee.emp_phone;
    this.emp_dob=employee.emp_dob;
    this.emp_dept=employee.emp_dept;
    this.emp_address=employee.emp_address;
    this.emp_designation=employee.emp_designation;

}

employee1.insert=(valuefromController,result)=>{
    var sqlquery=`INSERT INTO employee(emp_id,emp_name,emp_email,emp_phone,emp_dob,emp_dept,emp_address,emp_designation)VALUES
    (   '${valuefromController.emp_id}','${valuefromController.emp_name}',
        '${valuefromController.emp_email}','${valuefromController.emp_phone}',
        '${valuefromController.emp_dob}','${valuefromController.emp_dept}',
        '${valuefromController.emp_address}','${valuefromController.emp_designation}')`;

        console.log('hi')        
    console.log(sqlquery);
    db.query(sqlquery, (err, res)=>{
        console.log(res);
        console.log(err);
        if(res.affectedRows>0){
            result(null,res.affectedRows);
        }else{
            result(null,res.affectedRows);
        }

    });
}
//select all
employee1.select=(valuefromController,result)=>{
    var sqlquery=`SELECT *FROM employee`
        console.log('hi')        
    console.log(sqlquery);
    db.query(sqlquery, (err, res)=>{
        console.log(res);
        console.log(err);
        //console.log(result);
        // if(res.affectedRows>0){
        //     result(null,res.res);
        // }else{
        //     result(null,res.err);
        // }

    });
}


//select with id
employee1.select=(valuefromController,result)=>{
    var sqlquery=`SELECT *FROM employee WHERE emp_id='${valuefromController.emp_id}'`
    console.log(sqlquery);
    console.log(result);
    db.query(sqlquery, (err, res)=>{
        console.log(res);
        console.log(err);
    });
}

//delete with id
employee1.delete=(valuefromController,result)=>{
    var sqlquery=`DELETE FROM employee WHERE emp_id='${valuefromController.emp_id}'`
    console.log(sqlquery);
    db.query(sqlquery, (err, res)=>{
        console.log(res);
        console.log(err);
        if(res.affectedRows>0){
            result(null,res.affectedRows);
        }else{
            result(null,res.affectedRows);
        }

    });
}
//update
employee1.insert=(valuefromController,result)=>{
    var sqlquery=`UPDATE employee set emp_name='${valuefromController.emp_name}' WHERE emp_id='${valuefromController.emp_id}'`;

        console.log('hi')        
    console.log(sqlquery);
    db.query(sqlquery, (err, res)=>{
        console.log(res);
        console.log(err);
        if(res.affectedRows>0){
            result(null,res.affectedRows);
        }else{
            result(null,res.affectedRows);
        }

    });
}
module.exports=employee1;