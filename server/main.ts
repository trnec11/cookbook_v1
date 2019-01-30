import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';

import * as testController from './controllers/test.controller';

const app = express();

dotenv.config();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', testController.index);

app.listen(app.get('port'), () => {
    console.log(`Server is running at http://localhost:${app.get('port')} in ${app.get('env')} mode`)
});

module.exports = app;