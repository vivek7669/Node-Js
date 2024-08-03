const userchecking = (req,res,next) =>{
let {email , password } = req.body;
console.log(email);
console.log(password);
console.log(req.body);
    if(email && password){
        next();
    }
    else{
        res.status(400).send({message: 'Missing email or password'});
    }
}

module.exports = userchecking;