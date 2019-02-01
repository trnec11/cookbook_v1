import { IRead } from '../interfaces/read';
import { IWrite } from '../interfaces/write';

import { Db, Collection, InsertOneWriteOpResult } from 'mongodb';

export abstract class BaseModel<T> implements IRead<T>, IWrite<T> {
    public readonly collection: Collection;

    // create concrete collection to manipulatecmongo operations
    constructor(db: Db, collectionName: string) {
        this.collection = db.collection(collectionName);
    }

    find(item: T): Promise<T[]> {
        throw new Error("Method not implemented.");
    }    
    
    async create(item: T): Promise<boolean> {
        const result: InsertOneWriteOpResult = await this.collection.insertOne(item);

        return result.result.ok === 1;
    }
}