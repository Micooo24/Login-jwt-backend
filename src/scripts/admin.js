const user = require('../models/user');
const bcrypt = require('bcrypt');
 
async function createAdminAccount(){
    try {
       const existingAdmin = await user.findOne({email: "admin@test.com"});
        if(!existingAdmin){
           const newAdmin = new user({
                email: "admin@test.com",
                name: "admin",
                password: await bcrypt.hash("admin", 10),
                role: "admin"
            });
        //   const save = await newAdmin.save();
        await newAdmin.save();
            console.log("Admin created successfully");
        }else{
            console.log("Admin already exists");
        }

    } catch (error) {
        console.error(error.message);    
    }
}


module.exports = createAdminAccount;
