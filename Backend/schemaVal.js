const Joi=require("joi")    //used to check incoming data before going to mongoose schema  
module.exports.schemaVal=Joi.object({
        check:Joi.object({
            quizId:Joi.number().min(0).required()
    }).required()})
    