import axios from 'axios';

const instance = axios.create({
    baseURL: '"enter firebase base url"'
});

export default instance;