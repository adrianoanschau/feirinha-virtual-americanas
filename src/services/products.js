import api from './api';
import {sortBy} from '../utils/sort';

export const getProducts = async (categoryId) => {
    let url = '/item';
    if (categoryId) {
        url = `/category_item/${categoryId}`;
    }
    let localization = localStorage.getItem('localization');
    if (localization) {
        localization = JSON.parse(localization);
        url = `${url}?lc=${localization.city}&ln=${localization.neighborhood}`;
    }
    return api.get(url)
        .then(products => {
            return products.sort(sortBy('priority'));
        });
}