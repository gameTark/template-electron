import Dexie, { type EntityTable } from 'dexie';
if (process.env.DB_NAME == null) throw new Error('.env[DB_NAME] is not found');

interface Friend {
    id: number; // This prop will be used as primary key (see below)
    name: string;
    age: number;
}

const db = new Dexie(process.env.DB_NAME) as Dexie & {
    friends: EntityTable<
        Friend,
        'id' // primary key "id" (for the typings only)
    >;
};

db.version(1).stores({
    friends: '++id, name, age' // primary key "id" (for the runtime!)
});

export type { Friend };
export { db };