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
    console.log("Users sent to Client")
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});