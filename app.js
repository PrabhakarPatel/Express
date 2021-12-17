const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port =80;

//Express specific stuff
app.use('/static', express.static('static')) // for serving static file
app.use(express.urlencoded())

 //pug specific stuff
app.set('view engine','pug'); //set the template engine as pug
app.set('views',path.join(__dirname,'views'));//set the view directory



//endpoints
app.get("/",(req,res)=>{
    const con ="this is the best content on the internet so far so use it wisely"
    const params ={'title':'BEST GYM OF THE YEAR', "content": con}
    res.status(200).render('index.pug',params);
})
app.post('/',(req,res)=>{
    name =req.body.name
    age =req.body.age
    gender =req.body.gender
    more =req.body.more
    let outputtowrite = `The name of the client is ${name} , ${age} years old ,Gender ${gender} ,more about him /her ${more}`

    fs.writeFileSync('output.txt',outputtowrite)
    const params ={'message':'your form is submitted sucessfully'}
    res.status(200).render('index.pug',params);
})

// start the server 
app.listen(port,()=>{
    console.log(`the application started sucessfully on port ${port}`);
});