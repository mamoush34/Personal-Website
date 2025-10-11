import { MongoClient, Db, ObjectId } from 'mongodb';

export namespace Database {
    const database_url = 'mongodb://localhost:27017/';
    const connection_options = {};
    let database: Db;

    export async function connect(target: string) {
        const client = new MongoClient(database_url, connection_options);
        await client.connect();
        database = client.db(target);
    }

    export async function getOrCreateCollection(name: string) {
        try {
            return database.collection(name);
        } catch (error) {
            return await database.createCollection(name);
        }
    }

    export async function existsCollection(collection: string) {
        const cursor = database.listCollections(undefined, { nameOnly: true });
        while (await cursor.hasNext()) {
            const { name, type } = (await cursor.next()) as any;
            if (type === 'collection' && name === collection) {
                return true;
            }
        }
        return false;
    }

    export async function insert(collection: string, data: any[] | any) {
        const resolved = await getOrCreateCollection(collection);
        if (Array.isArray(data)) {
            return await resolved.insertMany(data);
        } else {
            return await resolved.insertOne(data);
        }
    }

    export async function updateField(collection: string, data: any, updatedField: string) {
        const resolved = await getOrCreateCollection(collection);
        const $set: any = {};
        $set[updatedField] = data[updatedField];
        return resolved.updateOne({ _id: new ObjectId(data._id) }, { $set });
    }

    export async function clearCollections(...collections: string[]) {
        return Promise.all(collections.map(collection => database.dropCollection(collection)));
    }
}
