import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const contacts = JSON.parse(data);

  contacts.pop();

  await fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf-8');
};

removeLastContact();
