const express = require('express');
const mongoose = require("mongoose")
const path = require('path');
const fs = require('fs');

const app = express();

mongoose.connect("mongodb://localhost:27017/EDUQUESTCLUSERS")
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err))

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

const routesDirectory = path.join(__dirname, 'routes');

fs.readdirSync(routesDirectory).forEach(file => {
    if (file.endsWith('.js')) {
        const route = require(path.join(routesDirectory, file));

        if (file === 'index.js') {
            app.use("/", route);
        } else {
            if (typeof route === 'function') {
                app.use(`/${ file.slice(0, -3) }`, route);
            } else {
                console.error(`Invalid route handler in ${ file }. Please export a function.`);
            }
        }
    }
});

app.use(function(req, res, next) {
    let err = new Error('Resourse Not Found');
    err.statusCode = 404;
    err.statusMessage = "Page Not Found";

    next(err);
});
  
app.use(function(err, req, res, next) {
    let response = res.status(err.statusCode || 500);
    response.statusMessage = err.statusMessage || "Internal Server Error"

    res.render('error', { statusCode: response.statusCode, statusMessage: response.statusMessage });
});

const port = 3000 || process.env.PORT;

app.listen(port, () => {
    console.log(`Server listening on port ${ port }`);
});
