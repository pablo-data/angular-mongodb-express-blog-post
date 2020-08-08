const express = require('express');
const morgan = require('morgan');

const cors = require('cors');

const app = express();

//me traigo la configuracion que esta en database y lo guardo js
const { mongoose } = require('./database'); 

// Settings
app.set('port', process.env.PORT || 2000);

// Middleware
app.use(morgan('dev'));
app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json());
// Routes
app.use('/api/posts', require('./routes/post.routes'));


// start server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});