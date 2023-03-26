const path = require('path');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

connectDB()

const app = express()

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// RULES OF API
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method == 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

// // SERVE FRONT-END
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../frontend/build')))

//   app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))
// } else {
//   app.get('/', (req,res) => res.send('Please set to Production'))
// }

app.use(errorHandler)

app.listen(port, () => {
  console.log(`SERVER STARTED AT PORT ${port}`);
})