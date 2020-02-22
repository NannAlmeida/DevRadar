import axios from 'axios';

const api = axios.create({
    baseURL: 'http://devradarfront-com.umbler.net'
});

export default api;