import api from './api';

function sortPriority(a, b) {
    a = parseInt(a.priority, 10);
    b = parseInt(b.priority, 10);
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }

export const getCategories = async () => api.get('/category')
    .then(categories => {
        return categories.sort(sortPriority);
    });