import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const PATH_DB = path.resolve(__dirname, '../db/db.json');
'src', 'db', 'db.json';
