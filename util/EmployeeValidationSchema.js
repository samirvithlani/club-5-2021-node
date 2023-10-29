const zod = require("zod");
const employeeValidationSchema = zod.object({
   body: zod.object({
         name: zod.string().min(3).max(20),
            email: zod.string().email().min(3).max(20),
            age: zod.number().min(18).max(60),
            password: zod.string().min(3).max(20),
            phone:zod.string().regex(/^[6-9]{1}[0-9]{9}$/),
   }).strict(),
})
module.exports = employeeValidationSchema
