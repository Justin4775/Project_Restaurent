const { response } = require('express'); 
const exp = require('express');
const { request } = require('http');
const App = exp();
const db = require('mysql');

const cors = require('cors');
App.use(cors());
App.use(exp.json());

const connect = db.createConnection({
    host: process.env.PORT || 3001,
    user: "root",
    password: "Justin@4775",
    database:  "project_restaurent"
});

App.post("/test",(request,response)=>{
    const email = request.body.nemail;
    const password = request.body.npassword;
    


    const val = connect.query("select email_id,password,role from login where email_id = ?",[email],
    function(error,rows){
        if (error)
        {
            const s = {status :'error'};
            response.send(s);
        }
        else{
            const user1 = rows[0].email_id;
            const pass1 = rows[0].password;
            const role1 = rows[0].role;


            if(email == user1 && password == pass1)
            {
                if(role1 == "customer")
                {
                    response.send({status :'pass', role:'customer'});
                }
                
            }
        }
    }) 
});

App.post("/sign",(request,response)=>{
    const fullname = request.body.nFullname;
    const email = request.body.nEmail;
    const mobile = request.body.nMobile;
    const address = request.body.nAddress;
    const pin = request.body.nPin;
    const password = mobile + "@pass";
    const role = "customer"

    
    const val2 = connect.query("insert into customer_signin (user_name,email_id,mobile_no,address,zip) values (?,?,?,?,?)",[fullname,email,mobile,address,pin],
    function(err,result){
        if(err)
        {
            response.send({status:"Error"});
        }
        else
        {
            response.send(result);
        }
    })


    const val7 = connect.query("insert into login (email_id,password,role) values (?,?,?)",[email,password,role],
    function(err,result){
        if(result)
        {
            response.send(result);
        }
    })
});

App.post("/reserve",(request,response)=>
{
    const bookingLocation = request.body.nLocation;
    const bookingDate = request.body.nDayOfVisit;
    const bookingTime = request.body.nTimeOfVisit;
    const noOfPeopleBooking = request.body.nNoOfPeople;
    const bookingUserName = request.body.nUserName;
    const bookingContactNumber = request.body.nContactNumber;

    console.log(bookingLocation);
    console.log(bookingDate);
    console.log(bookingTime);
    console.log(noOfPeopleBooking);
    console.log(bookingUserName);
    console.log(bookingContactNumber);

    const val3 = connect.query("insert into reservation (location,visit_date,visit_time,num_of_people,username,contact_number) values (?,?,?,?,?,?)",[bookingLocation,bookingDate,bookingTime,noOfPeopleBooking,bookingUserName,bookingContactNumber],
    function(err,result){
        if(err)
        {
            console.log("Error")
        }
        else
        {
            response.send(result);
        }
    })
});


App.post("/adminLogin",(request,response)=>
{
    const adminUserNAme = request.body.nAdminUserName;
    const adminPassword = request.body.nAdminPassword

    console.log(adminUserNAme);
    console.log(adminPassword);

    const val4 = connect.query("select user_name,password from admin_login where user_name = ?",[adminUserNAme],
    function(error,rows){
        if (error)
        {
            const res = {status :'error'};
            response.send(res);
        }
        else{
            const dbUsername = rows[0].user_name;
            const dbPassword = rows[0].password;

            if(adminUserNAme == dbUsername && adminPassword == dbPassword)
            {
                const res = {status :'pass'};
                response.send(res);
            }
            else{
                response.send({status:'Error'});
            }
        }
    })

});


App.listen(3001);
