const express = require('express')
const app = express()  // this variable is required to call express function so that it works as a server
// app.use(logger)

app.use(express.static("public")) //this command serves all the files from the public folder as per requir

app.set('view engine', ejs) //compulsry code for view engine

/*app.get('/',logger,(req,res, next)=>{

    console.log("Here")
    res.status(500).send("Hi")

    // res.send("Hi") //the send method sends the text within the braces (not preffered though)
    res.json("{message:Error")

    // res.download("script.js") this will create a pop up .....which will ultimately lead you to down,load  the file 
    // provided in the address
    res.render("index", {text:"welcome"})

})  // here / is the path & request , respond are the variable used to create request and send response
*/
const userRouter =require('./routes/users')

app.use('/users',userRouter)

// function logger(req, res, next){
//     console.log(req.originalUrl)
//     next()
// }

app.listen(3000) //3000  is the port where it will be hosted
