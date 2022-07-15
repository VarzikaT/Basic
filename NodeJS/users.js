const express =require('express')
const router= express.Router()

router.use(logger)

router.get("/",(req,res)=>{
    res.render("users/new",{firstName: "Test"})
})

router.get("/new",(req,res)=>{
    res.send("User New Form")
})
// for creating a new user we need to create a post method
router.post('/',(req,res)=>{
    res.send('Create User') // displays the message create user when 
})
// here /:id will work dynamically like for user  who have id 1,2 or anything
// anything in the url with /1 /2 or /5678 

// when applying https verbs on the same parameters we dont need to write get, push, delete separately 
// as the express provides us with a single method to do all this functionality 
router
.route("/:id")
.get((req,res)=>{
    res.send(`Get User With ID ${req.params.id}`)
})
.put((req,res)=>{
    res.send(`Update User With ID ${req.params.id}`)
})
.delete((req,res)=>{
    res.send(`Delete User With ID ${req.params.id}`)
})

const users=[{name:"Kyle"}, {name:"Sally"}]
router.param("id",(req,res,next, id)=>{
    console.log(id)
    next() // next allows us to run the other functionality when a middleware like
    // param starts executing w/o calling the ithers functions, so we give next to run the next func
})

//alwys try to put the dynamic routes at the last beacuse they can match
// the existing call and provide you with wrong output
module.exports= router //