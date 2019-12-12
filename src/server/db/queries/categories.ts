import { Query } from '../index';

const all = () => Query('SELECT * from categories');

export default {
    all
}