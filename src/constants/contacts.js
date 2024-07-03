import path from 'node:path';

const pathToworkDir = path.join(process.cwd());
export const PATH_DB = path.join(pathToworkDir, 'src/db/db.json');
