// const { ObjectId } = require('mongodb'); // Error: Identifier 'ObjectId' has already been declared

// ... rest of the code

// const { ObjectId } = require('mongoose').Types;

const express = require("express");
// const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); // Added body-parser for parsing form data
const { ObjectId } = require("mongodb");

const app = express();
// app.use(cors());
// const corsOptions = {
    // origin: 'http://localhost:5000', // Replace with the actual origin of your frontend
    // methods: 'POST',
    // optionsSuccessStatus: 204,
//   };
  
//   app.use(cors(corsOptions));
  
app.use(bodyParser.urlencoded({ extended: true })); // Use body-parser middleware
app.use(express.static(__dirname+"/mark_attendance.html")); 
// app.use(express.static(__dirname));


// Serve static files like HTML

mongoose.connect("mongodb://127.0.0.1:27017/student_attendanceDB");
// ,{ useNewUrlParser: true, useUnifiedTopology: true }

const studentSchema = new mongoose.Schema({
    // Number
    prnNo: {
        type:ObjectId,
        // type:Number,
        // minlength:13,
        // maxlength:13
        type: Number,
        validate: {
            validator: function(value) {
                // Check if the value is a number and has exactly 13 digits
                return /^\d{13}$/.test(value);
            },
            message: props => `${props.value} is not a valid 13-digit number!`
        },
        required: true
        
    },
    name: String,
    class: String,
    branch: String,
    date: Date
});

const studAttendance = mongoose.model("studAttendance", studentSchema);


app.post("/markAttendance", function (req, res) {
    mydate= new Date().getDate();
    mymonth= new Date().getMonth()+1;
    myyear= new Date().getFullYear();
    // full=mydate+"-"+mymonth+"-"+myyear;
    var combinedDate = myyear + "-" + (mymonth < 10 ? "0" : "") + mymonth + "-" + (mydate < 10 ? "0" : "") + mydate;

    const prnno = req.body.prnno;
    const Name = req.body.Name;
    const Class =req.body.Class || "SE";
    const Branch = req.body.Branch || "cse";
    const Dates = req.body.Dates || combinedDate ;

    const studData = new studAttendance({
        prnNo: prnno,
        name: Name,
        class: Class,
        branch: Branch,
        date: Dates
    });
    studData.save()
        .then(() => {
            // res.send("Attendance marked successfully!");
            res.sendFile(__dirname+"/student_dashboard.html")
 
        })
        .catch(err => {
            console.error(err);
            res.status(500).send("Error saving data to the database");
        });
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.get("/getAttendanceData", function (req, res) {
    studAttendance.find({}).exec()
        .then(data => res.json(data))
        .catch(err => {
            console.error(err);
            res.status(500).send("Error fetching attendance data");
        });
});


app.get("/displayRecords.js", function (req, res) {
    res.sendFile(__dirname + "/displayRecords.js", { type: 'application/javascript' });
});



// app.listen(3000, function () {
//     console.log("Server is started at port 3000");
// });





// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");


// const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
mongoose.connect("mongodb://127.0.0.1:27017/student_attendanceDB");




const loginSchema = new mongoose.Schema({

    regname:String,
    email:String,
    regpass:String

});

const registerStud = mongoose.model("registerStud", loginSchema);


app.post("/markRegister", function (req, res) {
    const regname = req.body.regname;
    const email = req.body.email;
    const regpass =req.body.regpass;
    

    const regstudData = new registerStud({
        regname: regname,
        email: email,
        regpass: regpass,
        
    });

    regstudData.save()
        .then(() => {
            // res.send("Thank you for Registered!");
            res.sendFile(__dirname+"/mark_attendance.html")
 
        })
        .catch(err => { 
            console.error(err);
            res.status(500).send("Error saving data to the database");
        });
});

app.post("/login", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    registerStud.findOne({ regname: username, regpass: password })
        .then(user => {
            console.log("User found in the database:", user);
            if (user) {
                console.log("Login successful!");
                // res.send("Login successful!");
                res.sendFile(__dirname+"/mark_attendance.html")
            } else {
                console.log("Login failed!");
                res.status(401).send("Invalid credentials");
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).send("Error during login");
        });
});


// app.get("/",function(reg,res){
//     res.sendFile(__dirname+"/index.html");
// })

app.listen(5000, function () {
    console.log("Server is started at port 5000");
});






































// app.get("/getAttendanceData", function (req, res) {
//     studAttendance.find({}, function (err, data) {
//         if (err) {
//             console.error(err);
//             res.status(500).send("Error fetching attendance data");
//         } else {
//             res.json(data);
//         }
//     });
// });













/////////////////////////////////////////////////////


// previous


// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

// const app = express();
// // const port = 3000;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname+" /index1.html")); // Serve static files from the current directory

// mongoose.connect("mongodb://127.0.0.1:27017/student_attendanceDB" );
// {
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true
// }

// const studentSchema = new mongoose.Schema({
//     prnNo: Number,
//     name: String,
//     class: String,
//     branch: String,
//     date: Date
// });

// const studAttendance = mongoose.model("studAttendance", studentSchema);

// // Handle form submission
// app.post("/submit-attendance", function (req, res) {
//     const prnno = req.body.prnno;
//     const Name = req.body.Name;
//     const Class = req.body.class; // corrected from "class" to "Class"
//     const Branch = req.body.Branch;
//     const Dates = req.body.Dates;

//     const studData = new studAttendance({
//         prnNo: prnno,
//         name: Name,
//         class: Class,
//         branch: Branch,
//         date: Dates
//     });

//     studData.save(function (err) {
//         if (err) {
//             console.error(err);
//             res.status(500).send("Error in saving data");
//         } else {
//             console.log("Data saved successfully");
//             res.send("Attendance marked successfully"); // You can customize the success message
//         }
//     });
// });

// // Serve the HTML file
// app.get("/", function (req, res) {
//     res.sendFile(__dirname + "/index1.html");
// });

// app.listen(3000, function () {
//     console.log("Server is running on port 3000");
// });





////////////////////////////////////////////////////




// // previous 



// // const express = require("express");
// // const mongoose = require("mongoose");
// // const bodyParser = require("body-parser"); // Added body-parser for handling form data
// // const app = express();

// // app.use(bodyParser.urlencoded({ extended: true })); // Parse form data

// // mongoose.connect("mongodb://127.0.0.1:27017/student_attendanceDB");

// // const studentSchema = new mongoose.Schema({
// //     prnNo: Number,
// //     name: String,
// //     class: String,
// //     branch: String,
// //     date: Date
// // });

// // const studAttendance = mongoose.model("studAttendance", studentSchema);

// // app.get("/", function (req, res) {
// //     console.log("hi");
// //     console.log("welcome to server");
// //     res.sendFile(__dirname + "/index1.html");
// // });

// // app.post("/", function (req, res) {
// //     const prnno = req.body.prnno;
// //     const Name = req.body.Name;
// //     const Branch = req.body.Branch;
// //     const Dates = req.body.Dates;
// //     const Class = req.body.class;    // this is //              // corrected from "class" to "Class"
// //     console.log(prnno)
// //     console.log(Name)
// //     console.log(Branch)
// //     console.log(Dates)
// //     console.log(Class)

// //     const studData = new studAttendance({
// //         prnNo: prnno,
// //         name: Name,
// //         class: Class,
// //         branch: Branch,
// //         date: Dates
// //     });
        
    
// //     studData.save(function (err) {
// //         if (err) {
// //             console.log(err);
// //                 res.send("Error in saving data");
// //         } else {
// //             console.log("Data saved successfully");
// //                 res.sendFile(__dirname + "/success.html"); // Assuming you have a success.html file
// //         }
// //     });
// // });




// // //from this code chat gpt

// // // document.getElementById("attendanceForm").addEventListener("submit", function (event) {
// // //     event.preventDefault(); // Prevent the default form submission

// // //     // Collect form data
// // //     const prnno = document.getElementsByName("prnno")[0].value;
// // //     const Name = document.getElementsByName("Name")[0].value;
// // //     const Class = document.getElementsByName("class")[0].value;
// // //     const Branch = document.getElementsByName("Branch")[0].value;
// // //     const Dates = document.getElementsByName("Dates")[0].value;

// // //     // Create an object with the form data
// // //     const formData = {
// // //         prnno: prnno,
// // //         Name: Name,
// // //         Class: Class,
// // //         Branch: Branch,
// // //         Dates: Dates
// // //     };

// // //     // Send the form data to the server (you can use AJAX/fetch for this)
// // //     fetch("/submit-attendance", {
// // //         method: "POST",
// // //         headers: {
// // //             "Content-Type": "application/json"
// // //         },
// // //         body: JSON.stringify(formData)
// // //     })
// // //     .then(response => response.json())
// // //     .then(data => {
// // //         console.log(data); // Handle the response from the server
// // //         // Optionally, you can redirect or show a success message to the user
// // //     })
// // //     .catch(error => {
// // //         console.error("Error:", error);
// // //         // Handle errors if any
// // //     });
// // // });




















// // app.listen(3000, function () {
// //     console.log("server is started at port 3000");
// // });












/////////////////////////////////////////////////////






// // // -------------------------------------------------------------------------
// // //========================>================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




// // // Previous code  is below

// // // previous code is  below  



// // // const express=require("express");
// // // const app=express();


// // // const mongoose= require("mongoose");
// // // mongoose.connect("mongodb://127.0.0.1:27017/student_attendanceDB");

// // // const studentSchema = new mongoose.Schema({
// // //     prnNo : Number,
// // //     name : String,
// // //     class : String,
// // //     branch : String,
// // //     date : Date
// // // })

// // // const studAttendance = mongoose.model("studAttendance",studentSchema)

// // // // const stud1 = new studAttendance({
// // // //     prnNo : 2122521243,
// // // //     name : "rushali",
// // // //     class : "TE",
// // // //     date : 16-11-2023

// // // // })
// // // // stud1.save();

// // // const stud2 = new studAttendance({
// // //     prnNo : prnno,
// // //     name : Name,
// // //     class : Branch,
// // //     date : Dates

// // // })
// // // stud2.save();





// // // app.get("/",function(req,res){
// // //     console.log("hii");
// // //     console.log("welcome to server");
// // //     res.sendFile(__dirname+"/index1.html");
// // // })


// // // app.listen(3000,function(){
// // //     console.log("server is started at port 3000");
// // // })