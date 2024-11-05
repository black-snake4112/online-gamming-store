const express = require ('express')
const mongoose = require("mongoose")
const cors = require('cors')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')
const session = require ("express-session");
const MongoStore = require ("connect-mongo");
const UserModel = require("./model/user");

{/*bcrypt is used to store passwords in hash form*/}
dotenv.config();
const app= express()
app.use(express.json());

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

{/*establishing a connection with mongodb atlas Run atlas with vscode Paste link in enverment variable*/}

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.log("Failed to connect to MongoDB",err))

app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`);
})

app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI
    }),
    cookie: { maxAge: 24 * 60 * 60 * 1000}
}))

app.post("/signup", async (req, res) => {
    try {

        const {name , email, password } = req.body;
        console.log(name+" "+email+""+password)
        const existingUser = await UserModel.findOne({email});
        console.log(existingUser)
        if (existingUser) {
            return res.status(400).json({ error:"Email already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel ({ name, email , password: hashedPassword });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);

    }   catch (error) {
        res.status(500).json ({ error: error.message});
    }

});

{/*for the Login backend work*/}

app.post("/login", async (req, res) => {
    try{

        const {email , password} = req.body;
        const user = await UserModel.findOne({email});
        if (user){
            const passwordMatch = await bcrypt.compare(password, user.password);
              if(passwordMatch){
               
                req.session.user = { id: user._id, name: user.name, email: user.email};



                res.json("Success");
                console.log(email)
              } else{
                res.status(200).json("Password does not match");
              }
        }else{
            res.status(200).json("no records found");
        }
    } catch (error){
        res.status(500).json ({error:error.message})
    }
    
});



app.get('/user', (req, res) => {
    if(req.session.user){
        res.json({ user: req.session.user});
    }else {
        res.status(401).json("Not authenticated");
    }
});


app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ error: 'Logout failed' });
      }
      res.clearCookie('connect.sid'); // Clear the cookie stored in the browser
      res.json({ message: 'Logged out successfully' });
    });
  });
  