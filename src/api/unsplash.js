import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID aec2c5030c703429fcb86ed2e1bd465397c18c44944c3040471aa17279f6dd5b'
    }
});