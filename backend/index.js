const express = require("express")
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
const app = express();
dotenv.config();



app.use(express.json());

const user ={
    'email':'kimla@gmail.com',
    'password':'12345'
}
const jwtVerify = (req,res,next)=>{
    const access_token = req.header(process.env.TOKEN_HEADER_KEY);
    jwt.verify(access_token,process.env.JWT_SECRET_KEY,(err,user)=>{
     if(err){ return res.json({message :'wrong'})
     req.user = user;
     next();
    }
    })
 }

app.post("/login",(req,res)=>{
    if(!req.body.email || !req.body.password) 
       return res.json({"message":'require'})
    if(req.body.email == user.email && req.body.password ==user.password){
        const access_token = jwt.sign(user,process.env.JWT_SECRET_KEY)
        return res.json({access_token});
    }
    req.json({'message':'Unauthiization'})
})

app.get('/user',jwtVerify,(req,res)=>{
    res.json({'message':'ok'})
})



app.listen(8080,()=>{
 console.log("http://localhost:8080");
})