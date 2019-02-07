import { Document, Model, model, Schema } from 'mongoose';
import { IRecipe } from '../interfaces/recipe';

export interface IRecipeDocument extends IRecipe, Document {
    createdAt: Date
    // custom model methods will be defined here
}

export interface IRecipeModel extends Model<IRecipeDocument> {
    // custom static methods for model will be defined here
    getRecipesCount(): Promise<number>;

}

export const recipeSchema: Schema = new Schema({
    title: String,
    description: String,
    createdAt: Date
});

recipeSchema.pre<IRecipeDocument>('save', function(next) {
    // we can use timestamps for this https://mongoosejs.com/docs/guide.html#timestamps
    let now = new Date();

    if (!this.createdAt) {
        this.createdAt = now;
    }

    next();
});

recipeSchema.static('getRecipesCount', (): Promise<number> => {
    return Recipe.find().countDocuments().exec();

});

export const Recipe = model<IRecipeDocument, IRecipeModel>('Recipe', recipeSchema);