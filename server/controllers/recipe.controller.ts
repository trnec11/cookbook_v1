import { Request, Response } from 'express';
import { MongoProvider } from '../database/index';
import { RecipeModel } from '../models/recipe.model';
import { Recipe } from '../models/schemas/recipe';

class RecipeController {
    public async getRecipes(req: Request, res: Response) {
        const recipeModel: RecipeModel = await MongoProvider.getRecipeModel();
        
        let testRecipe: Recipe = new Recipe('Oatmeal recipe', 'Combine oats, milk, water, salt, ...');
        if (recipeModel.create(testRecipe)) {
            res.send('Hallo from recipe controller, new recipe was created.');
        }
    }
}

export const recipeController = new RecipeController();