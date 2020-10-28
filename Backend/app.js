require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors = require('cors');

const authrouter = require('./Routers/Authroute');
const poductRouter = require('./Routers/ProductRoute');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json({ limit: "40mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
})


app.use(authrouter);
app.use(poductRouter);

app.listen(PORT, (req, res) => {
    console.log(`Server Started at PORT ${PORT}`);
});