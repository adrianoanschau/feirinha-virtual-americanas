import api from './api';
import {sortBy} from '../utils/sort';

export const getProducts = async (categoryId) => {
    let url = '/item';
    if (categoryId) {
        url = `/category_item/${categoryId}`;
    }
    return api.get(url)
        .then(products => {
            return products.sort(sortBy('priority'));
        });
}