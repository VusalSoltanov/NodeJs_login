const express = require('express');
const app = express();
const { db } = require('./config/db');

 const userRoutes = require('./routes/userRoutes' )

db.connect();

app.use(express.json());



app.use("/api/users",userRoutes);



app.listen(8080, () => {
    console.log('Server is running...');
})