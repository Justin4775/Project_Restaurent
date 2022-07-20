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

App.post("/login",(request,response)=>{
    const email = request.body.nemail;
    const password = request.body.npassword;
    


    const val = connect.query("select email_id,password,role from login",
    function(error,rows){
        if (error)
        {
            response.send({status :"Error", role :"Error"});
        }
        else{
            const user1 = rows[0].email_id;
            const pass1 = rows[0].password;
            const role1 = rows[0].role;


            if(email === user1 && password === pass1)
            {
                if(role1 === "customer")
                {
                    response.send({status :"pass", role:"customer"});
                }
                else if(role1 === "admin")
                {
                    response.send({status:"pass", role:"admin"});
                }
                
            }
            else
            {
                response.send({status:"fail", role:"none"});
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
    const password = request.body.nPass;
    const role = "customer";
    

    console.log(fullname);
    console.log(email);
    console.log(mobile);
    console.log(address);
    console.log(pin);
    console.log(password);
    console.log(role);


    
    const val2 = connect.query("insert into customer_signin (user_name,email_id,mobile_no,address,zip) values (?,?,?,?,?)",[fullname,email,mobile,address,pin],
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


    const val7 = connect.query("insert into login (email_id,password,role) values (?,?,?)",[email,password,role],
    function(err,result){
        if(result)
        {
            response.send(result);
        }
    })
});

App.get('/adminHome', (request,response)=>{
    connect.query('select * from customer_signin',(err,result,field)=> {
        if (err) throw err;
        response.send(result);
    })
    
})







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

let date = Date.now();
let TodaysDate_ob = new Date(date);
let TodaysDate = (TodaysDate_ob.getFullYear() + "-" + (TodaysDate_ob.getMonth()+1) + "-" + TodaysDate_ob.getDate());


App.get('/admin_table_availability', 
function(request,response){
    connect.query('select * from reservation',(err,result,field)=> {
        if (err) throw err;
        response.send(result);
    })

});

App.get('/todays_bookings', (req,res)=>{
    connect.query('select * from reservation where visit_date = ?',[TodaysDate],
    function(err,result,field) {
        if (err) throw err;
        res.send(result);
    })

});



App.listen(3001);
