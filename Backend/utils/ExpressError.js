class ExpressError extends Error
{
    constructor(msg,sts)
{
    super();
    this.message=msg
    this.statusCode=sts
}
    
}
module.exports=ExpressError