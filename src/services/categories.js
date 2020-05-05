import api from './api';
import {sortBy} from '../utils/sort';

export const getCategories = async () => api.get('/category')
    .then(categories => {
        return categories.sort(sortBy('priority'));
    });