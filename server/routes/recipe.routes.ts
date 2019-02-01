import * as express from 'express';
import { recipeController } from '../controllers/recipe.controller';

class RecipeRoutes {
    public router: express.Router = express.Router()

    constructor() {
        this.config();
    }

    private config(): void {
        this.router.get('/', (req: express.Request, res: express.Response) => {
            recipeController.getRecipes(req, res);
        });
    }
}

export const recipeRoutes = new RecipeRoutes().router;