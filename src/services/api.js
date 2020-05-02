import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://gestorvirtual.net.br/api',
});

Api.interceptors.response.use((res) => {
    return res.data;
});

export default Api;