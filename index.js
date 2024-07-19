const express = require("express");
const app = express();
const db = require("./config/DB");
const users  = require("./models/User");
const hisaabs = require("./models/Hisaab");
const Auth = require("./middleware/Auth");
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(__dirname = "public"));
app.set("view engine","ejs");

app.get("/", async (req,res)=>{

    const data = await hisaabs.find();
    res.render("main",{data});
})

app.get("/login",(req,res)=>{
    res.render("login-signup",{value : "Login"});
})

app.post("/login",(req,res)=>{
    const {email,pass} = req.body;
    if(verified) res.render("/");
    else res.status("401").send("invelid email Or Passward");
})

app.get("/signup",(req,res)=>{
    res.render("login-signup",{value : "Create"});
})

app.post("/signup",async (req,res)=>{
    const {email,pass} = req.body;
    const user  = await users.findOne({email});
    if(user){
        res.status(400).json({message : "User Exist with this Email"});
    }
    else{
        await users.create({
            email,
            pass
        });
        res.status(200).json({message : "User registered successfully"});
    }
})


app.get("/create",(req,res)=>{
    res.render("create");
})

app.post("/create", async (req, res) => {
    try {
        const entry = req.body;

        const data = await hisaabs.create({
            ...entry
        });

        res.redirect("/");
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).send({ success: false, message: 'Error saving data', error });
    }
});

app.get("/view/:title", async (req,res)=>{
    const hisaab = await hisaabs.findOne({title : req.params.title});
    res.render("hisaab",{hisaab});
})

app.get("/edit/:title", async (req,res)=>{
    const hisaab = await hisaabs.findOne({title : req.params.title});
    res.render("edit",{hisaab});
})

app.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { title, hisaab, encrypt, share, edit } = req.body;

    try {
        // Find and update document
        const updatedHisaab = await hisaabs.findByIdAndUpdate(id, {
            title,
            hisaab,
            encrypt,
            share,
            edit
        }, { new: true });

        if (!updatedHisaab) {
            return res.status(404).send('Hisaab not found');
        }

        res.redirect("/");
    } catch (error) {
        console.error("Error updating hisaab:", error);
        res.status(500).send('Server Error');
    }
});


app.get("/Delete/:title", async (req,res)=>{
    const hisaab = await hisaabs.deleteOne({title : req.params.title});
    res.redirect("/");
})


app.listen(4000, (err)=>{
    if(err) console.log(err);
})