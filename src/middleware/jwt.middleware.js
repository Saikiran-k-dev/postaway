import  jwt from "jsonwebtoken"

const jwtAuth = (req,res,next)=>{
    const token = req.headers["authorization"]
    // console.log(token)
    if(!token){
        return res.status(401).send("unauthorized")
    }
    try {
        const payload = jwt.verify(token,process.env.JWT_SECRET) 
        req.userId = payload.userId
    } catch (error) {
        return res.status(401).send("unauthorized")
    }
    next()
}

export default jwtAuth;