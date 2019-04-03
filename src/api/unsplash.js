import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: 'Client-ID 7228f1fc0b1a19aab52fce8e914e07595bef9f76717899e22c5961971b9a34b9'
    }
});