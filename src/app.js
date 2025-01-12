const express = require('express'); 
const app = express();
const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');
const userRoute = require('./routes/user');
const bodyParser = require('body-parser');  
const cors = require('cors');
const createAdminAccount = require('./scripts/admin');


const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use("/user", signupRoute);
app.use("/auth", loginRoute);   
app.use("/api", userRoute);    

createAdminAccount();


app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}.`);
});
