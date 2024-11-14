const notfound = (req,res,next)=>{
     const error = new Error(`Not Found-${req.originalUrl}`)
     res.status(400)
     next(error);
}


const errorHandler = (err,req,res,next) =>{
     let statusCode = res.statusCode = 200 ? 500 : res.statusCode;
     let message =  err.message;
     res.status(statusCode).json({
         message,
         stack:"developement"=== "production" ? null : err.stack
     })
}

export { notfound , errorHandler }