const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const { notFoundHandler, errorHandler } = require('./middlewares/shared/errorHandler');

const loginRouter = require('./routers/loginRouter');
const usersRouter = require('./routers/usersRouter');
const inboxRouter = require('./routers/inboxRouter');

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//setup template engine
app.set('view engine', 'ejs');

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser(process.env.COOKIE_SECRET_KEY));

//setup routing
app.use('/', loginRouter);
app.use('/users', usersRouter);
app.use('/inbox', inboxRouter);

//error handleler middleware
app.use(notFoundHandler);
app.use(errorHandler);


app.listen(process.env.PORT, () => {
    console.log(`Application listening on port- ${process.env.PORT}`);
})

