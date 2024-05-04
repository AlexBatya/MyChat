import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';
import color from 'colors';
import bodyParser from 'body-parser'

import router from './routes'

const app = express();

const fileToken: any = fs.readFileSync(path.join(__dirname, '../', 'config', 'localhost.json'));
const PORT: string = JSON.parse(fileToken).server.PORT; 

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json({limit: "2000mb"}));

app.use('/api', router)

app.listen(PORT, () => console.log(color.green(`Сервис user запущен на порту ${PORT}, батеньки...`)));

