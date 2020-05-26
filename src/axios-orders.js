import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-5b4a0.firebaseio.com'
});

export default instance 