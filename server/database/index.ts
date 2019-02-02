import { MongoClient, Db } from 'mongodb';
import { RecipeModel } from '../models/recipe.model';

const MONGO_CONNECTION = 'mongodb://localhost:27017';

export class MongoProvider {
    private static connection: Db;
    private static recipeModel: RecipeModel;

    // tricky, find better way how to handle connection and model creation or switch to mongoose
    public static async getRecipeModel(): Promise<RecipeModel> {
        const connection = await this.getConnection();

        return new RecipeModel(connection, 'recipes');
    }

    public static async getConnection(): Promise<Db> {
        if (MongoProvider.connection) {
            return MongoProvider.connection;
        }

        const connection = await MongoClient.connect(MONGO_CONNECTION, { useNewUrlParser: true });
        MongoProvider.connection = connection.db('cookbook');

        return MongoProvider.connection;
    }
}