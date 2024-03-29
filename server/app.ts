import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';

import { apiRouter } from './routes/api.router';
import * as getRecipesControler from './controllers/getRecipes.controller';

const app = express();


dotenv.config();
const MONGO_CONNECTION = 'mongodb://localhost:27017/cookbook';
mongoose.connect(MONGO_CONNECTION, { useNewUrlParser: true });


// mount json body parser
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
// mount query string parser

app.set('view engine', 'pug');

app.use('/api', apiRouter);
app.get('/', getRecipesControler.index); // Trnec pug

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log(`Server is running at http://localhost:${app.get('port')} in ${app.get('env')} mode`)
});

module.exports = app;