const express = require('express');
const app = express();
const port = 3000;

require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://sanghoon:${process.env.MONGODB_PASSWORD}@express-ex.bucejoc.mongodb.net/?retryWrites=true&w=majority`).then(() => console.log('몽고 연결 성공'))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`${port}!`))