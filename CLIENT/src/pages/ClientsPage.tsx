import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { render } from 'react-dom';

export interface Client {
    firstName: string,
    lastName: string,
    birthdate: string,
    email: string,
    c_id: string
}
const ClientsPage = () => {
    const [clients, setClients] = useState<Client[]>([]);

    useEffect(() => {
        const getClients = async () => {
            try {
                axios.get<Client[]>('/clients', {
                    baseURL: 'http://127.0.0.1:3000'
                }).then( response => {
                    setClients(response.data)
                })
            } catch (err) {
                console.error(err)
            }
        }
        getClients();
    }, [])

    const renderedClients = clients.map((client: Client) => {
        return (
            <div key={client.c_id}>
                {client.c_id}
                {client.lastName}
                {client.firstName}
                {client.birthdate}
                {client.email}
            </div>
        )
    })

    console.log(clients)
    return (
        <div>
            Clients
            {renderedClients}
        </div>
    )
}

export default ClientsPage