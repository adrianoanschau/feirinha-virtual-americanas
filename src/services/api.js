import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://35.223.12.207/api',
});

Api.interceptors.response.use((res) => {
    return res.data;
});

export default Api;