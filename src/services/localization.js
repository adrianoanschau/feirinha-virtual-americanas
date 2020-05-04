import api from './api';

export const getLocals = async () => api.get('/store_local')
    .then(locals => {
        return Object.values(locals.reduce((acc, curr) => {
            const city = `${curr.city.split(' ').join('-')}-${curr.state}`.toLowerCase();
            let neighborhoods = [curr.neighborhood];
            if (acc[city]) {
                neighborhoods = neighborhoods.concat(...acc[city].neighborhoods);
            }
            const add = { id: city, city: curr.city, state: curr.state, neighborhoods };
            return { ...acc, [city]: add };
        }, {}));
    });