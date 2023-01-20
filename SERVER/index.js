import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const prisma = new PrismaClient()
const app = express();
const port = 3000;
app.use(cors());

app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
    console.log("Users sent to frontend CLIENT")
});

app.get('/clients', async (req, res) => {
    const clients = await prisma.client.findMany();
    res.json(clients);
    console.log("Clients sent to frontend CLIENT")
});

app.post('/auth', async (req,res) => {
    console.log('Auth received')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});