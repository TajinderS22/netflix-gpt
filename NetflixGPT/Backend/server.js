/* eslint-disable no-unused-vars */
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import bcrypt from 'bcrypt'



const userSchema= new mongoose.Schema({
    name:String,
    email:{ type:String, required :true, unique: true},
    password:String,
    plan:String,
    joinedAt:{
        type:Date,
        defailt:Date.now,
    },
})

const userModel = mongoose.model("User", userSchema);


const corsOptions={
    origin:"http://localhost:5713",
    methods:"GET,POST,UPDATE,PUT,DELETE,OPTIONS"
}

const app= express();
const port=3000
app.use(bodyParser.json())
app.use(cors(corsOptions))
const saltRounds=10;


const uri='mongodb+srv://tajinderyoutubepy:tajinderyoutubepy@cluster0.4uif2.mongodb.net/NetflixGPT?retryWrites=true&w=majority&appName=Cluster0'

// eslint-disable-next-line no-unused-vars
// const connectDB = async () => {
//   try {
//     if (mongoose.connection.readyState === 1) {
//       console.log(" MongoDB already connected");
//       return;
//     }

//     await mongoose.connect(uri);
//     console.log(" MongoDB connected");
//   } catch (error) {
//     console.error(" MongoDB connection error:", error);
    
//   }
// };

// connectDB();

// const client= await mongoose.connect(uri);

mongoose.connect(uri)


app.get('/',(req,res)=>{
    res.json({
        name:"Tajinder Singh"
    })
})

app.post('/auth/signup',async(req,res)=>{
    const{username,email,password}=req.body;

    // const hashedPassword= bcrypt.hash(password,saltRounds,(err,hash)=>{
    //     console.log(hash)
    // })
    const hashedPassword= bcrypt.hashSync(password, saltRounds);
    const newUser= new userModel({
        name:username,
        email:email,
        password:hashedPassword,
        plan:"Free"
    })
    try{
        await newUser.save()
        console.log( "Saved new user ")
        res.status(200).json(newUser)
    }catch(err){
        if(err.errorResponse.errmsg.includes('duplicate key error collection')){
        res.status(400).json({message: " User already registered" })
        }
        console.log(err.errorResponse.errmsg)
    }
})

app.post('/auth/signin',async(req,res)=>{
    const{email,password}=req.body;
    const user= await userModel.find(
        {
            email:email
        }
    )
    console.log(user)
    if(user[0]!=null){
        if (bcrypt.compareSync(password, user[0].password) ){
            res.status(200).json(user)
        }else{
            res.status(400).json({message:"Wrong Password"})
        }
        return
    }
    (
        res.status(400).json({message:" User Not Found"})
    )
})





app.listen(port,()=>{
    console.log(`server is running on port ${port}.`)
})