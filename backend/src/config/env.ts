import * as dotenv from 'dotenv';
import * as path from 'path';

const configFilePath = path.resolve(__dirname, '../../.env');
console.log(configFilePath);
dotenv.config({ path: configFilePath });