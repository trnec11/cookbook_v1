import { Request, Response } from 'express';

class RecipeController {
    public getRecipes(req: Request, res: Response) {
        res.send('Hallo from recipe controller');
    }
}

export const recipeController = new RecipeController();