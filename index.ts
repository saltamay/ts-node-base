import dotenv from 'dotenv-safe';
import { add } from '@src/math/add';

dotenv.config();

const total = add(2, 3);

console.log(total);
console.log('It works!');
