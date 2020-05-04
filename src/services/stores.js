import api from './api';
import {sortBy} from '../utils/sort';

export const getStores = async () => api.get('/store')
    .then(stores => {
        return stores.sort(sortBy('priority'));
    });