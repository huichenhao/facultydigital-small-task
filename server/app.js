const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://mongoadmin:mongoadmin@cluster0.fwol9ua.mongodb.net/myvueappdb?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB database Connected...'))
    .catch((err) => console.log(err))

app.use('/api/auth', require('./routes/auth'));
app.use('/api/data', require('./routes/revenue'));

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});