import { Request, Response } from 'express';
import { Recipe } from '../models/recipe';

class RecipeController {
    public async getRecipes(req: Request, res: Response) {
        const newModel = new Recipe({
            title: 'test',
            description: 'Balbla'
        })

        const saved = await newModel.save();


        const recipeCount = await Recipe.getRecipesCount();
        res.send('Hallo from recipe controller. New recipe saved: ' + saved +  ', number of recipes is ' + recipeCount);

    }
}

export const recipeController = new RecipeController();