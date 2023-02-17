const Router = require("express");
const SignUpSchema =  require("../schema");
const router = Router();


router.post("/signup",(request,response)=>{
    const signedUpUser = new SignUpSchema({
        username:request.body.username,
        password:request.body.password,
        email:request.body.email,
    })
    signedUpUser.save()
    .then((data)=>response.json(data))
    .catch((error)=>response.json(error));
})

router.post("/login",async (request,response)=>{
    const loggedInUser = new SignUpSchema({
        username:request.body.username,
        password:request.body.password,
    })
    const user = await SignUpSchema.find({username:loggedInUser.username, password:loggedInUser.password});
    if(user.length>0)
        response.send("Verified");
    else    
        response.send("Not Verifed");    

})

module.exports = router;