import * as express from 'express';
import { recipeRoutes } from './recipe.routes';

class ApiRouter {
    public router: express.Router = express.Router()

    constructor() {
        this.config();
    }

    private config(): void {
        this.router.get('/', (req: express.Request, res: express.Response) => {
            res.send('API in progress!!!')
        });

        this.router.use('/recipe', recipeRoutes)
    }
 }

 export const apiRouter = new ApiRouter().router;

