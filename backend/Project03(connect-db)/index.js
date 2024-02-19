const express = require("express");
const mongoose = require("mongoose");

const fs = require("fs");
const { abort } = require("process");



const app = express();
const PORT = 8000;

//Connection

mongoose.connect("mongodb://127.0.0.1:27017/Practice-db-1")
.then(() => {console.log("connection with mongo done")})
.catch((err) => {console.log("connection fail",err)})

//Schema
const userSchema = new mongoose.Schema(
    {
        first_name : 
        { 
            type : String,
            require : true
        },
        last_name :
        {
            type : String
        },
        email : 
        {
            type : String,
            require : true,
            unique : true
        },
        gender : 
        {
            type : String
        },
        job_titel :
        {
            type : String
        }
    }, 
);

const User = mongoose.model('user', userSchema);

//Middleware  

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    fs.appendFile("log.txt", `\n ${Date.now()} : ${req.method} : ${req.path}`,
        (err, data) => {
            next();
        });
})
// ROUTS
app.get('/api/users', async (req, res) => {
    const allDbUser = await User.find({});
    return res.json(allDbUser);
})
app.get('/users', async (req, res) => {

    const allDbUser = await User.find({});

    const html = `
     <ul>
      ${allDbUser.map((user) => `<li>${user.first_name}</li>`).join("")};
     </ul>
    `
    res.send(html);
});

app.route("/api/users/:id")
    .get(async(req, res) => {
        const user = await User.findById(req.params.id);
        return res.json(user);
    })

    .patch( async (req, res) => {


        const objToUpdate = await User.findById(req.params.id, {last_name : req.body.last_name});
       
            return res.json({ status: "Success", update: objToUpdate });

    })

    .delete( async (req, res) => {

        await User.findByIdAndDelete(req.params.id)
          
            return res.json({ status: "Success", Deletedindex: req.params.id });
    })

app.post('/api/users', async (req, res) => {
    const body = req.body;
    if (!body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_titel) {
        return res.status(400).json({ msg: "All filds are requear... " })
    }
    
   const result = await User.create({
        first_name : body.first_name,
        last_name : body.last_name,
        email : body.email,
        gender : body.gender,
        job_titel : body.job_titel
    });
   
    return res.status(201).json({ msg : "success"})
});

app.listen(PORT, () => { console.log(`server is started at port ${PORT}`) });