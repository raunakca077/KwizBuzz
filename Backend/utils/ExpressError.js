class ExpressError extends Error
{
    constructor(msg,sts)
{
    super();
    this.msg=msg
    this.sts=sts
}
    
}
module.exports=ExpressError