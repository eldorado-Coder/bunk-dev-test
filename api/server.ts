const express = require('express');

import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as route from './routes';

const app = express();

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    }),
);
app.use(cors());

const router = express.Router();
route.init(router);
app.use(router);

// Create port
const port = process.env['PORT'] || 3000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port);
});

// error handler
app.use(function (err: any, req: any, res: any, next: any) {
    console.error(err.message); // Log error message in our server's console
    if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
    res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});
