const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const { User } = require("./models/User");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://sanghoon:${process.env.MONGODB_PASSWORD}@express-ex.bucejoc.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => console.log('몽고 연결 성공'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!!!!!!'));

app.post('/register', (req, res) => {
  // 회원가입 정보
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err}) 
    return res.status(200).json({
      success: true
    })
  })
});

app.listen(port, () => console.log(`${port}!`));