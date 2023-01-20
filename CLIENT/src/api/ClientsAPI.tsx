import axios from 'axios';

interface Client {
    firstName: string,
    lastName: string,
    birthdate: string,
    email: string,
    c_id: string
};


const instance = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    timeout: 15000,
});

//const responseBody = (response) => response.data;

const clientRequests = {
    get: 
}

export const Clients {
    
}