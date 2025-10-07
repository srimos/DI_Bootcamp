import { readFile as fsReadFile } from 'fs/promises';

export async function readFile(filePath, encoding = 'utf-8') {
    const data = await fsReadFile(filePath, encoding);
    return data;
}